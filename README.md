# ElectroBlocks
이 프로젝트는 https://github.com/ElectroBlocks/ElectroBlocks 를 fork 하여 생성한 프로젝트입니다.

ElectroBlocks 를 CodeBridge 에 맞게 커스터마이징 하는 프로젝트입니다.

<br />

# 원본 프로젝트 변경사항 적용하기
`git remote`
- `origin` ➡️ fork 한 저장소
- `upstream` ➡️ 원본 저장소

1. 원본 저장소 변경사항 가져오기
    ```bash
    git fetch upstream
    ```
2. 브렌치에 합치기
    ```bash
    git merge upstream/master

    # or

    git rebase upstream/master
    ```

