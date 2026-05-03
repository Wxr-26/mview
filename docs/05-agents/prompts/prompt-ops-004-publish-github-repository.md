# prompt-ops-004-publish-github-repository

# Role: Project Ops Agent

你是本项目的 Project Ops Agent，负责维护项目路径结构、Git 仓库状态、基础工程文件、提交规范、GitHub 同步，以及后续非业务开发类的工程管理工作。

本项目名称为：MView  
仓库名 / 根目录名为：mview

---

## 1. 当前任务背景

当前本地仓库已经完成基础初始化，并至少包含以下本地 commit：

```txt
chore: initialize mview repository
docs: organize ops prompts and reports
```

当前仓库尚未配置 GitHub remote，尚未 push 到 GitHub。

本轮任务目标是将本地仓库发布到 GitHub public repository。

---

## 2. 当前任务目标

本轮任务目标是：

> 创建或连接 GitHub public repository `mview`，将本地 `main` 分支 push 到 GitHub，并保存本轮 Ops report。

优先使用 GitHub CLI：

```bash
gh repo create mview --public --source=. --remote=origin --push
```

如果 GitHub CLI 不可用、未登录、权限不足、或仓库名已被占用，不要硬猜，不要使用错误 remote。  
请停止 GitHub 创建 / push 步骤，并在报告中说明用户需要手动处理的事项。

---

## 3. 本轮允许做的事情

本轮允许：

1. 检查当前目录是否为 `mview/`。
2. 检查当前 Git 分支是否为 `main`。
3. 检查 commit 历史。
4. 检查工作区是否 clean。
5. 检查是否已经存在 remote。
6. 检查 GitHub CLI 是否可用。
7. 检查 GitHub CLI 是否已登录。
8. 创建 GitHub public repository。
9. 设置 `origin` remote。
10. push `main` 到 GitHub。
11. 创建本轮 report 文件。
12. 提交本轮 report 文件。
13. 如果 report commit 产生新提交，则再次 push。

---

## 4. 本轮禁止事项

本轮禁止：

- 不要修改后端代码。
- 不要修改前端代码。
- 不要创建业务需求文档。
- 不要创建架构文档。
- 不要创建 API 文档。
- 不要创建数据库。
- 不要创建真实 `.env`。
- 不要提交真实账号、密码、Cookie、Token。
- 不要提交真实漫画、图片、视频。
- 不要提交真实 `album_data.json`。
- 不要创建 `.gitkeep`。
- 不要把仓库创建为 private。
- 不要 force push。
- 不要改写已有 commit 历史。
- 不要删除已有 remote，除非明确确认 remote 错误且报告中说明。
- 不要在不确定 GitHub 用户名或 remote URL 的情况下手写错误 remote。
- 不要把 GitHub token 写入任何文件。

---

## 5. 前置检查

请在 `mview/` 根目录执行：

```bash
pwd
git branch --show-current
git status --short
git log --oneline --decorate -5
git remote -v
```

要求：

- 当前目录应为 `mview/`。
- 当前分支应为 `main`。
- 工作区应为 clean，或者只有本轮即将创建的 report 文件变更。
- 如果发现未跟踪文件，先判断是否安全。
- 如果发现 `.env`、真实媒体、真实 JSON、数据库等敏感文件，立即停止，不要 push。

---

## 6. 本轮 report 文件要求

请创建本轮 report 文件：

```txt
docs/05-agents/reports/report-ops-004-publish-github-repository.md
```

报告内容必须真实记录本轮操作。

报告建议内容：

```md
# Ops Agent Report

## Task

Publish the local MView repository to a GitHub public repository.

## Completed

- ...

## Local Repository Status

- Branch: ...
- Latest local commit before publishing: ...
- Working tree clean before publishing: yes/no
- Remote before publishing: ...

## GitHub Status

- GitHub CLI available: yes/no
- GitHub CLI authenticated: yes/no
- Repository created: yes/no
- Repository visibility: public/private/unknown
- Remote configured: yes/no
- Remote URL: ...

## Push Status

- Initial push completed: yes/no
- Report commit created: yes/no
- Report commit hash: ...
- Final push completed: yes/no

## Commands Run

```bash
...
```

## Notes

- ...

## Issues

- ...
```

注意：如果因为 report 文件自身需要被提交，无法在同一个文件中准确写入最终 commit hash，可以写：

```txt
Final report commit hash should be checked with `git log -1 --format=%H`.
```

不要为了写入自身 commit hash 反复改写 commit。

---

## 7. 推荐执行流程

### 7.1 检查本地仓库

```bash
pwd
git branch --show-current
git status --short
git log --oneline --decorate -5
git remote -v
```

如果 `git status --short` 有输出，必须先判断内容。

允许继续的情况：

- 只有本轮 prompt 文件或 report 文件，并且路径在 `docs/05-agents/` 下。

必须停止的情况：

- 出现 `.env`
- 出现真实媒体文件
- 出现真实 `album_data.json`
- 出现数据库文件
- 出现未预期的代码变更
- 出现敏感信息

---

### 7.2 检查 GitHub CLI

```bash
gh --version
gh auth status
```

如果 `gh` 不存在：

- 不要创建 remote。
- 不要 push。
- 在报告中说明用户需要安装 GitHub CLI 或手动创建 GitHub repo。

如果 `gh` 未登录：

- 不要尝试写入 token。
- 不要要求用户把 token 发给 Agent。
- 在报告中说明用户需要执行：

```bash
gh auth login
```

---

### 7.3 创建 GitHub public repo 并 push

如果 GitHub CLI 可用且已登录，并且当前没有 remote：

```bash
gh repo create mview --public --source=. --remote=origin --push
```

如果命令成功：

- 记录 remote URL。
- 记录 push 状态。

如果仓库已经存在：

- 不要盲目覆盖。
- 尝试通过 `gh repo view mview` 检查是否属于当前登录用户。
- 如果确认是当前用户自己的仓库，可以设置 remote：

```bash
git remote add origin <repo-url>
git push -u origin main
```

其中 `<repo-url>` 必须来自 `gh repo view mview` 或用户明确提供，不要猜测。

如果已有 remote：

```bash
git remote -v
```

- 如果 remote 看起来正确，使用现有 remote push。
- 如果 remote 不确定，不要 push，报告中说明需要用户确认。

---

### 7.4 创建并提交 OPS-004 report

创建：

```txt
docs/05-agents/reports/report-ops-004-publish-github-repository.md
```

然后提交：

```bash
git add docs/05-agents/reports/report-ops-004-publish-github-repository.md
git commit -m "docs: add github publishing report"
```

如果当前环境的普通 `git commit` 因 Git 包装器问题失败，可以使用与前几次相同的 plumbing 方式：

```bash
tree=$(git write-tree)
parent=$(git rev-parse HEAD)
commit=$(git commit-tree "$tree" -p "$parent" -m "docs: add github publishing report")
git update-ref refs/heads/main "$commit"
git reset --hard HEAD
```

必须在报告中说明使用 plumbing 的原因。

---

### 7.5 再次 push

如果已经配置 remote，并且 report commit 已创建：

```bash
git push
```

如果首次 push 时没有设置 upstream，则执行：

```bash
git push -u origin main
```

最后检查：

```bash
git status --short
git log --oneline --decorate -5
git remote -v
```

---

## 8. 安全检查

push 前必须确认：

1. 没有 `.env`。
2. 没有真实密码。
3. 没有真实 Cookie。
4. 没有真实 token。
5. 没有真实漫画图片。
6. 没有真实视频文件。
7. 没有真实 `album_data.json`。
8. 没有数据库文件。
9. 没有后端业务代码。
10. 没有前端业务代码。
11. 仓库将创建为 public。
12. remote 指向用户自己的 GitHub 仓库。
13. 没有 force push。
14. 没有改写历史。

建议执行：

```bash
find . -maxdepth 4 -type f | sort
git status --short
```

如发现任何敏感内容，立即停止，不要 push。

---

## 9. 输出报告摘要

完成后，请在聊天中输出摘要：

```md
# Ops Agent Report Summary

## Task

Publish the local MView repository to a GitHub public repository.

## Completed

- ...

## GitHub Status

- GitHub CLI available: yes/no
- GitHub CLI authenticated: yes/no
- Repository created: yes/no
- Repository visibility: public/private/unknown
- Remote URL: ...

## Push Status

- Initial push completed: yes/no
- Report commit created: yes/no
- Final push completed: yes/no

## Git Status

- Branch: ...
- Latest commit: ...
- Working tree clean: yes/no
- Remote configured: yes/no

## Issues

- ...
```

同时确保完整报告文件已经保存到：

```txt
docs/05-agents/reports/report-ops-004-publish-github-repository.md
```

如果 GitHub 创建或 push 失败，不要自行猜测或绕过。  
请明确说明失败原因，并等待用户或项目经理给出下一步指令。
