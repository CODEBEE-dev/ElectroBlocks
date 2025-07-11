<script>
  import { base } from '$app/paths'
</script>

<main class="container">
    <div class="row">
      <div class="col logos">
        <img src="{base}/logo.png" alt="logo" class="logo">
        <a target="_blank" href="https://fossee.in/">
            <img src="{base}/fossee.png" alt="fossee logo" class="logo">
        </a>
      </div>
    </div>
    <div class="row">
        <h1>About ElectroBlocks</h1>
        <div class="col">
            <p>ElectroBlocks is a user-friendly platform developed by Noah Glaser that simplifies the learning
                of electronics and programming. Designed for students of all levels, ElectroBlocks enables them
                to explore and create Arduino-based projects through an intuitive, block-based interface.</p>
                
                <p>Inspired by popular visual programming environments like Scratch and Blockly, ElectroBlocks
                    makes coding accessible to beginners by allowing them to drag and drop code blocks,
                    eliminating the need to learn complex syntax. This approach empowers users to immediately
                    see how their code interacts with electronic components such as LEDs, sensors, motors, and
                    more. The platform also includes real-time simulations, helping students visualize circuit wiring
                    alongside code execution for a more interactive learning experience.</p>

                    <p>The FOSSEE Project, which is part of the National Mission on Education Through Information
and Communication Technology (ICT) of the Ministry of Education (MoE), Government of India,
is committed to promoting open-source software in education and research. As part of this
mission, FOSSEE is implementing and promoting ElectroBlocks to schools and coding clubs.</p>

<p>By leveraging ElectroBlocks, FOSSEE aims to make electronics and programming accessible to
    a broader audience. The platform's drag-and-drop code blocks eliminate the need for students
    to learn complex syntax, allowing them to immediately see how their code interacts with
    electronic components.</p>

    <p>FOSSEE's implementation and promotion of ElectroBlocks will include:</p>
    <ul>
        <li>Workshops and training sessions for teachers and students</li>
        <li>Integration of ElectroBlocks into school curricula</li>
        <li>Collaboration with coding clubs and makerspaces</li>
        <li>Development of open educational resources</li>
        <li>Support for research projects utilizing ElectroBlocks</li>
    </ul>
    <p>Through these efforts, FOSSEE hopes to foster a generation of students who are confident in
        their ability to create and innovate using electronics and programming.</p>
        </div>
    </div>
    
    <div class="row">
        <div class="col">
            <h2>License Information</h2>
            <p>This project is a fork of ElectroBlocks, originally created by Noah Glaser.</p>
            <p>
                Original Project: 
                <a href="https://github.com/ElectroBlocks/ElectroBlocks" target="_blank">
                    https://github.com/ElectroBlocks/ElectroBlocks
                </a>
            </p>
            <p>
                This software is licensed under the GNU General Public License v3.0 (GPL-3.0).
                The complete source code is available at: 
                <a href="https://github.com/CODEBEE-dev/ElectroBlocks" target="_blank">
                    https://github.com/CODEBEE-dev/ElectroBlocks
                </a>
            </p>
        </div>
    </div>
</main>

<style>
    .logos {
        text-align: center;
    }
    main {
        overflow: scroll;
        height: 100%;
    }
    a {
        color: #505bda;
        text-decoration: underline;
    }
    h2 {
        margin-top: 2rem;
        margin-bottom: 1rem;
    }
</style>