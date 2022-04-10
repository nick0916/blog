---
sidebar_position: 1
title: Git - 指令
---

### > git 暫存

* 使用情況: 當
```shell
git stash
```

```shell
git stash pop
```

```shell
git stash list
```

### > git rebase

* 整理線條用的
```shell
git rebase --onto f92fbb4d73b017d9e610bb33bf0b4ab413dce184 a031b5344a532ed2d5a55f319d1a809bb27de9a2 a4a4b73a770a047bcbbc1d3a3375a49f8ab300df
```

### > git 退回版本

```shell
git reset --hard XXXXXX
```

- XXXX為版本號
- `--hard`: 可以乾淨的回到當初那一版(如果沒有加, 會把目標版本之後新的都變成 un-staged file)

### > git pull 遠端分支

```shell
git checkout --track origin/daves_branch
```

### > git push 遠端分之

```shell
git push -u origin <new_branch>
```

- -u: --set-upstream （追蹤這個分支，之後才可以只要用git push簡單指令，就可以上傳到想要的遠端分支）

### > git 忽略個人設定

```shell
git update-index --assume-unchanged
```
* 參考文章: [How to ignore files already managed with Git locally - DEV Community 👩‍💻👨‍💻](https://dev.to/nishina555/how-to-ignore-files-already-managed-with-git-locally-19oo)

### > git 退回commit

```shell
git reset e12d8ef
```

- 解除掉`e12d8ef`的commit

### > git ignore 產生器

> [Gitignore.io](https://www.gitignore.io/)


### > git alias
* 可以加到 你的 `.bashrc` or `.zshrc` 來做short cut 使用
* 適合常用 terminal 下 git 指令的人
* 個人常用 `gs`, `gco`, `gcm`
```shell
# ----------------------
# Git Aliases
# ----------------------
alias ga='git add'
alias gaa='git add .'
alias gaaa='git add --all'
alias gau='git add --update'
alias gb='git branch'
alias gbd='git branch --delete '
alias gc='git commit'
alias gcm='git commit --message'
alias gcf='git commit --fixup'
alias gco='git checkout'
alias gcob='git checkout -b'
alias gcom='git checkout master'
alias gcos='git checkout staging'
alias gcod='git checkout develop'
alias gd='git diff'
alias gda='git diff HEAD'
alias gi='git init'
alias glg='git log --graph --oneline --decorate --all'
alias gld='git log --pretty=format:"%h %ad %s" --date=short --all'
alias gm='git merge --no-ff'
alias gma='git merge --abort'
alias gmc='git merge --continue'
alias gp='git pull'
alias gpr='git pull --rebase'
alias gr='git rebase'
alias gs='git status'
alias gss='git status --short'
alias gst='git stash'
alias gsta='git stash apply'
alias gstd='git stash drop'
alias gstl='git stash list'
alias gstp='git stash pop'
alias gsts='git stash save'

# ----------------------
# Git Functions
# ----------------------
# Git log find by commit message
function glf() { git log --all --grep="$1"; }
```
> [Reference](https://jonsuh.com/blog/git-command-line-shortcuts/)
