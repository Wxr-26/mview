# prompt-ops-005-connect-remote-and-push

# Role: Project Ops Agent

你是本项目的 Project Ops Agent，负责维护项目路径结构、Git 仓库状态、基础工程文件、提交规范、GitHub 同步，以及后续非业务开发类的工程管理工作。

本项目名称为：MView  
仓库名 / 根目录名为：mview

---

## 1. 当前任务背景

GitHub public repository 已由用户手动创建：

```txt
https://github.com/Wxr-26/mview
```

远程 Git URL 应使用：

```txt
https://github.com/Wxr-26/mview.git
```

当前本地仓库已经完成基础初始化，并至少包含以下本地 commit：

```txt
chore: initialize mview repository
docs: organize ops prompts and reports
```

上一次 OPS-004 由于当前环境没有安装 GitHub CLI，未能自动创建 GitHub 仓库，也没有配置 `origin` 或 push。

本轮任务目标是：

> 使用用户明确提供的 GitHub 仓库 URL 配置 `origin`，整理并提交 OPS-004 / OPS-005 相关 prompt 与 report，然后将本地 `main` 分支 push 到 GitHub。

---

## 2. 本轮允许做的事情

本轮允许：

1. 检查当前目录是否为 `mview/`。
2. 检查当前 Git 分支是否为 `main`。
3. 检查本地 commit 历史。
4. 检查工作区是否有未跟踪文件。
5. 检查是否已有 remote。
6. 使用用户提供的远程 URL 配置 `origin`。
7. 提交 OPS-004 prompt/report。
8. 如果本轮 OPS-005 prompt 文件已存在，也将其提交。
9. 创建并提交本轮 OPS-005 report。
10. push `main` 到 GitHub。
11. 输出本轮报告摘要。

---

## 3. 本轮禁止事项

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
- 不要使用 GitHub CLI。
- 不要创建新的 GitHub 仓库。
- 不要把仓库创建为 private。
- 不要 force push。
- 不要改写已有 commit 历史。
- 不要删除已有 remote，除非明确发现其与用户提供的 URL 不一致，并在报告中说明。
- 不要把 GitHub token 写入任何文件。
- 不要猜测其他 remote URL。

---

## 4. 远程仓库配置

用户明确提供的 GitHub 仓库地址为：

```txt
https://github.com/Wxr-26/mview
```

应配置的 Git remote 为：

```txt
origin https://github.com/Wxr-26/mview.git
```

如果当前没有 remote，请执行：

```bash
git remote add origin https://github.com/Wxr-26/mview.git
```

如果已经存在 `origin`：

```bash
git remote -v
```

然后判断：

- 如果 `origin` 已经是 `https://github.com/Wxr-26/mview.git`，保持不变。
- 如果 `origin` 是同一仓库的 SSH URL，例如 `git@github.com:Wxr-26/mview.git`，也可以保持不变，并在报告中说明。
- 如果 `origin` 指向其他仓库，立即停止，不要覆盖，不要 push，报告中说明需要用户确认。

---

## 5. 前置检查

请在 `mview/` 根目录执行：

```bash
pwd
git branch --show-current
git status --short
git log --oneline --decorate -5
git remote -v
find . -maxdepth 5 -type f ! -path './.git/*' | sort
```

要求：

- 当前目录应为 `mview/`。
- 当前分支应为 `main`。
- 不应存在敏感文件。
- 不应存在真实媒体文件。
- 不应存在真实 `album_data.json`。
- 不应存在数据库文件。
- 未跟踪文件必须逐一判断是否属于允许提交范围。

---

## 6. 允许提交的文件范围

本轮允许提交以下文件：

```txt
docs/05-agents/prompts/prompt-ops-004-publish-github-repository.md
docs/05-agents/prompts/prompt-ops-005-connect-remote-and-push.md
docs/05-agents/reports/report-ops-004-publish-github-repository.md
docs/05-agents/reports/report-ops-005-connect-remote-and-push.md
```

其中：

- `prompt-ops-004-publish-github-repository.md` 如果存在，应纳入提交。
- `report-ops-004-publish-github-repository.md` 如果存在，应纳入提交。
- `prompt-ops-005-connect-remote-and-push.md` 如果用户已经放入项目，应纳入提交。
- `report-ops-005-connect-remote-and-push.md` 由本轮创建并纳入提交。

如果某个 prompt/report 文件不存在，不要凭空重写旧文件，只在报告中说明缺失。

---

## 7. 创建本轮报告

请创建本轮报告文件：

```txt
docs/05-agents/reports/report-ops-005-connect-remote-and-push.md
```

报告内容必须真实记录本轮操作。

报告建议内容：

```md
# Ops Agent Report

## Task

Connect the local MView repository to the user-provided GitHub remote and push `main`.

## Completed

- ...

## Files Added To Commit

- ...

## Local Repository Status

- Branch: ...
- Latest commit before this task: ...
- Working tree status before this task: ...

## Remote Status

- Remote before: ...
- Remote after: ...
- Remote URL: ...

## Push Status

- Commit created: yes/no
- Commit hash: ...
- Push completed: yes/no
- Upstream configured: yes/no

## Commands Run

```bash
...
```

## Safety Check

- `.env` committed: no
- Real media committed: no
- Secrets committed: no
- Database committed: no
- Business code created: no
- Force push used: no

## Notes

- ...

## Issues

- ...
```

注意：如果因为 report 文件自身需要被提交，无法在同一个文件中准确写入自身最终 commit hash，可以写：

```txt
Final report commit hash should be checked with `git log -1 --format=%H`.
```

不要为了写入自身 commit hash 反复改写 commit。

---

## 8. 推荐执行流程

### 8.1 检查仓库状态

```bash
pwd
git branch --show-current
git status --short
git log --oneline --decorate -5
git remote -v
find . -maxdepth 5 -type f ! -path './.git/*' | sort
```

如果发现敏感内容，立即停止，不要提交，不要 push。

---

### 8.2 配置 remote

如果没有 remote：

```bash
git remote add origin https://github.com/Wxr-26/mview.git
```

如果已有 remote，按第 4 节规则判断。

然后执行：

```bash
git remote -v
```

---

### 8.3 创建 OPS-005 report

创建：

```txt
docs/05-agents/reports/report-ops-005-connect-remote-and-push.md
```

内容按第 7 节格式填写。

---

### 8.4 添加文件并提交

建议执行：

```bash
git add   docs/05-agents/prompts/prompt-ops-004-publish-github-repository.md   docs/05-agents/prompts/prompt-ops-005-connect-remote-and-push.md   docs/05-agents/reports/report-ops-004-publish-github-repository.md   docs/05-agents/reports/report-ops-005-connect-remote-and-push.md
```

如果某些文件不存在，不要让命令失败。  
可以先用 `ls` 检查存在性，再只添加存在的文件。

提交信息：

```bash
git commit -m "docs: add github publishing artifacts"
```

如果当前环境的普通 `git commit` 因 Git 包装器问题失败，可以使用与前几次相同的 plumbing 方式：

```bash
tree=$(git write-tree)
parent=$(git rev-parse HEAD)
commit=$(git commit-tree "$tree" -p "$parent" -m "docs: add github publishing artifacts")
git update-ref refs/heads/main "$commit"
git reset --hard HEAD
```

必须在报告中说明使用 plumbing 的原因。

如果没有任何可提交变更，不要强行 commit。  
请在报告中说明原因。

---

### 8.5 Push 到 GitHub

执行：

```bash
git push -u origin main
```

如果 Git 要求认证，请使用当前环境已有的 Git 凭据方式。  
不要把 token 写入文件。  
不要要求用户把 token 发给 Agent。

如果认证失败，停止并报告。

不要 force push。

---

### 8.6 最终检查

执行：

```bash
git status --short
git log --oneline --decorate -5
git remote -v
git branch -vv
```

报告最终状态。

---

## 9. 提交和 push 前安全检查

提交和 push 前必须确认：

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
11. 没有 `.gitkeep`。
12. Remote 指向 `https://github.com/Wxr-26/mview.git` 或等价 SSH URL。
13. 没有 force push。
14. 没有改写历史。

---

## 10. 输出报告摘要

完成后，请在聊天中输出摘要：

```md
# Ops Agent Report Summary

## Task

Connect local repository to GitHub remote and push `main`.

## Completed

- ...

## Files Added To Commit

- ...

## Remote Status

- Remote before: ...
- Remote after: ...
- Remote URL: ...

## Push Status

- Commit created: yes/no
- Push completed: yes/no
- Upstream configured: yes/no

## Git Status

- Branch: ...
- Latest commit: ...
- Working tree clean: yes/no

## Issues

- ...
```

同时确保完整报告文件已经保存到：

```txt
docs/05-agents/reports/report-ops-005-connect-remote-and-push.md
```

如果任何步骤失败，不要自行扩大任务范围。  
请明确说明失败原因，并等待用户或项目经理给出下一步指令。
