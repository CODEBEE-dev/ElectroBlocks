<script lang="ts">
  const navTooltipStyle = {
    position: "bottom",
    align: "center",
    animation: "slide",
    theme: "nav-tooltip",
  };
  import authStore from "../../stores/auth.store";
  import projectStore from "../../stores/project.store";
  import { isPathOnHomePage } from "../../helpers/is-path-on-homepage";
  import { fade } from "svelte/transition";
  import { logout } from "../../firebase/auth";
  import { resetWorkspace } from "../../core/blockly/helpers/workspace.helper";
  import { saveProject } from "../../firebase/db";
  import { wait } from "../../helpers/wait";
  import { onConfirm, onErrorMessage } from "../../help/alerts";
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import { tooltip } from "@svelte-plugins/tooltips";
  import { base } from "$app/paths";

  const BASE_URL = base || '';

  let canSave = true;
  let showSaveSuccess = false;
  let params = "";

  projectStore.subscribe((p) => {
    if (p.projectId) {
      params = `?projectid=${p.projectId}`;
    } else {
      params = "";
    }
  });

  async function onNewFileAuth() {
    if (!$projectStore.project) {
      onNewFileNoAuth();
      return;
    }

    const confirmNewFile = await onConfirm(
      "We are about to save your current project and create a new one? Would you like to continue?"
    );

    if (!confirmNewFile) {
      return;
    }
    try {
      await saveProject($projectStore.project, $projectStore.projectId);
      projectStore.set({ projectId: null, project: null });
      await goto("/");
      resetWorkspace();
    } catch (e) {
      onErrorMessage("Error saving your project please try agian.", e);
    }
  }

  async function onNewFileNoAuth() {
    const confirmNewFile = await onConfirm(
      "You are creating a new file, which will delete your work.  Would you like to continue?"
    );
    if (!confirmNewFile) {
      return;
    }

    resetWorkspace();
  }

  async function onSaveClick() {
    if (!$projectStore.projectId) {
      await goto("/project-settings");
      return;
    }

    if (!canSave) return;
    try {
      await saveProject($projectStore.project, $projectStore.projectId);
      showSaveSuccess = true;
      await wait(1500);
      canSave = true;
      showSaveSuccess = false;
    } catch (e) {
      onErrorMessage("Error saving your project please try agian.", e);
    }
  }

  async function onSignOut() {
    try {
      await logout();
    } catch (e) {
      onErrorMessage("Please try again in 5 minutes", e);
    }
  }
</script>

<nav class:small={!$authStore.isLoggedIn}>
  <a href="/" class="logos">
    <span class="codebridge-logo logo-name">CodeBridge</span>
    <span class="codebridge-logo editor-name">arduino</span>
  </a>

  {#if !$authStore.isLoggedIn}
    <a
      href="{BASE_URL}/"
      title="Home"
      use:tooltip={navTooltipStyle}
      class:active={isPathOnHomePage($page.url.pathname)}
    >
      <i class="fa fa-home" />
    </a>

    <a
      href="{BASE_URL}/code"
      title="Code"
      use:tooltip={navTooltipStyle}
      class:active={$page.url.pathname.includes("code")}
    >
      <i class="fa fa-code" />
    </a>
    <a
      href="{BASE_URL}/arduino"
      use:tooltip={navTooltipStyle}
      title="Upload"
      class:active={$page.url.pathname.includes("arduino")}
    >
      <i class="fa fa-microchip" />
    </a>

    <a
      href="{BASE_URL}/open"
      use:tooltip={navTooltipStyle}
      title="Projects"
      class:active={$page.url.pathname.includes("open")}
    >
      <i
        class="fa"
        class:fa-folder-open-o={!$page.url.pathname.includes("open")}
        class:fa-folder-open={$page.url.pathname.includes("open")}
      />
    </a>
    <span
      use:tooltip={navTooltipStyle}
      title="New File/Blank File"
      on:click={onNewFileNoAuth}
      class="active"
    >
      <i class="fa fa-file-o" />
    </span>
    <a
      href="{BASE_URL}/download"
      use:tooltip={navTooltipStyle}
      title="Download"
      class:active={$page.url.pathname.includes("download")}
    >
      <i class="fa fa-download" />
    </a>
    <a
      href="{BASE_URL}/settings"
      use:tooltip={navTooltipStyle}
      title="Settings"
      class:active={$page.url.pathname.includes("settings")}
    >
      <i class="fa fa-gears" />
    </a>
    <!-- <a
      href="{BASE_URL}/login"
      use:tooltip={navTooltipStyle}
      title="Login"
      class:active={$page.url.pathname.includes("login")}
    >
      <i class="fa fa-sign-in" />
    </a> -->
  {/if}
  <a
      title="About"
      use:tooltip={navTooltipStyle}
      href="{BASE_URL}/about"
      class:active={$page.url.pathname.includes("about")}
    >
      <i class="fa fa-info-circle" />
    </a>
</nav>
{#if showSaveSuccess}
  <p transition:fade id="saved">project saved</p>
{/if}

<style>
  nav {
    background-color: rgb(47, 65, 88);
    box-sizing: border-box;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: system-ui, sans-serif;
  }

  nav a {
    text-decoration: none;
    color: white;
    margin: 0 1em;
  }

  nav span {
    color: white;
    margin: 0 1em;
  }
  
  a.logos {
    display: flex;
    align-items: center;
    position: absolute;
    left: 100px;
  }

  .codebridge-logo {
    color: white;
    margin: 0 .5em 0 0;
  }

  .logo-name {
    font-weight: 800;
    font-size: medium;
    letter-spacing: -0.025em;
  }

  .editor-name {
    margin-left: 0.5em;
    font-size: 12px;
    font-weight: bold;
    background-color: rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
    padding: 0px 0.5em;
    border-radius: 0.5em;
    margin: 0;
  }
</style>