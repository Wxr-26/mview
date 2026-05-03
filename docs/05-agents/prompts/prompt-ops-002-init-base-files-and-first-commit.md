# prompt-ops-002-init-base-files-and-first-commit

# Role: Project Ops Agent

你是本项目的 Project Ops Agent，负责维护项目路径结构、Git 仓库状态、基础工程文件、提交规范，以及后续与 GitHub 同步相关的非业务开发工作。

本项目名称为：MView  
仓库名 / 根目录名为：mview

---

## 1. 当前任务目标

本轮任务目标是：

> 在已经创建好的 `mview/` 空目录结构基础上，创建第一批可被 Git 跟踪的基础仓库文件，并完成首次本地 commit。

本轮任务仍然不是业务开发阶段。

你只允许创建和维护以下基础文件：

```txt
README.md
AGENTS.md
.gitignore
.env.example
```

此外，请检查以下文件是否已经存在：

```txt
docs/05-agents/prompts/prompt-ops-001-init-paths-and-git.md
```

如果该文件已经存在，不要覆盖它。  
如果该文件不存在，不要自行补写内容，只在报告中说明缺失。

---

## 2. 本轮允许做的事情

本轮允许：

1. 确认当前目录为 `mview/`。
2. 确认已有目录结构存在。
3. 将 Git 默认分支重命名为 `main`。
4. 创建 `README.md`。
5. 创建 `AGENTS.md`。
6. 创建 `.gitignore`。
7. 创建 `.env.example`。
8. 检查 `docs/05-agents/prompts/prompt-ops-001-init-paths-and-git.md` 是否存在。
9. 执行 `git status`。
10. 执行首次本地 commit。

---

## 3. 本轮禁止事项

本轮禁止：

- 不要创建后端代码。
- 不要创建前端代码。
- 不要初始化 FastAPI。
- 不要初始化 React / Vite。
- 不要创建 package 文件。
- 不要创建 Python 项目文件。
- 不要创建 Dockerfile。
- 不要实现 docker-compose 服务。
- 不要创建数据库。
- 不要创建真实 `.env`。
- 不要提交真实账号、密码、Cookie、Token。
- 不要提交真实漫画、图片、视频。
- 不要提交真实 `album_data.json`。
- 不要创建示例 JSON。
- 不要创建业务需求文档。
- 不要创建架构文档。
- 不要创建 API 文档。
- 不要创建 `.gitkeep`。
- 不要配置 GitHub remote。
- 不要 push 到 GitHub。

---

## 4. 文件内容要求

### 4.1 `README.md`

请创建以下内容：

```md
# MView

MView is a self-hosted personal media browser.

The first MVP focuses on reading locally downloaded JMComic albums from a Linux server.

## Current MVP Direction

MView MVP is currently scoped as a local JMComic web reader.

The application will read an existing JMComic download directory and provide a browser-based reading experience.

## MVP Principles

- Local network access first.
- Single-user usage first.
- Read-only file access in the first MVP.
- Local JMComic album source first.
- No database in the first MVP.
- No JMComic download feature in the first MVP.
- No file delete, move, rename, or upload feature in the first MVP.
- No reading progress tracking in the first MVP.
- No video progress tracking in the first MVP.

## Planned Structure

```txt
mview/
├── docs/
├── backend/
├── frontend/
├── scripts/
└── examples/
```

## Status

Project scaffolding is in progress.
```

---

### 4.2 `AGENTS.md`

请创建以下内容：

```md
# AGENTS

This file defines global rules for all Cursor agents working on MView.

## Required Reading

Before making changes, every agent must read the task prompt assigned to it.

When project documents become available, agents must also read the relevant files under `docs/`.

## Core Rules

- Do not implement features outside the assigned task.
- Do not add a database unless the task explicitly requires it.
- Do not implement file delete, move, rename, or upload features in the MVP.
- Do not implement JMComic download features in the MVP.
- Do not implement reading progress tracking in the MVP.
- Do not implement video progress tracking in the MVP.
- Do not expose absolute server paths to the frontend.
- Do not commit secrets, credentials, cookies, tokens, or local `.env` files.
- Do not commit real media files.
- Keep changes scoped to the assigned role and task.

## Current MVP Scope

The first MVP is a read-only local JMComic web reader.

The target local source directory is expected to be configurable, with the current intended path:

```txt
/mnt/hdd/JMDownload/images
```

The MVP should read local album directories and `album_data.json` files, but must not call JMComic download APIs.

## Agent Boundaries

### Project Ops Agent

Responsible for:

- Directory structure
- Git repository state
- GitHub preparation
- Basic repository files
- Commit hygiene
- Non-business engineering operations

The Project Ops Agent must not implement backend or frontend business logic.

### Backend Agent

Responsible for backend implementation only when assigned.

### Frontend Agent

Responsible for frontend implementation only when assigned.

### UI/UX Agent

Responsible for design and interaction guidance only when assigned.

### QA Agent

Responsible for review, testing plans, and issue reports only when assigned.
```

---

### 4.3 `.env.example`

请创建以下内容：

```env
APP_NAME=MView
APP_ENV=development

APP_USERNAME=admin
APP_PASSWORD=change-me
JWT_SECRET=change-me

JM_IMAGE_ROOT=/mnt/hdd/JMDownload/images

BACKEND_HOST=0.0.0.0
BACKEND_PORT=8000
FRONTEND_PORT=5173
```

注意：

- 只创建 `.env.example`。
- 不要创建 `.env`。
- 不要写入真实密码。
- 不要写入真实 token。

---

### 4.4 `.gitignore`

请创建以下内容：

```gitignore
# Environment
.env
.env.*
!.env.example

# Python
__pycache__/
*.py[cod]
*.pyo
*.pyd
.python-version
.venv/
venv/
env/
.pytest_cache/
.mypy_cache/
.ruff_cache/

# Node
node_modules/
dist/
build/
.vite/
.next/
coverage/

# Logs
logs/
*.log

# Local cache
.cache/
.cache-jm/
thumbnails/

# Databases
*.db
*.sqlite
*.sqlite3

# Media and downloads
/mnt/
/media/
/downloads/
/JMDownload/
*.jpg
*.jpeg
*.png
*.webp
*.gif
*.mp4
*.mkv
*.webm
*.cbz
*.cbr
*.zip
*.rar

# OS / IDE
.DS_Store
Thumbs.db
.idea/
.vscode/
```

---

## 5. Git 操作要求

请在 `mview/` 根目录执行。

### 5.1 检查当前状态

```bash
pwd
git status
```

确认当前目录是 `mview/`。

### 5.2 将分支改为 `main`

如果当前分支是 `master`，执行：

```bash
git branch -M main
```

如果当前分支已经是 `main`，不要重复操作，只在报告中说明。

### 5.3 添加并提交

创建上述基础文件后，执行：

```bash
git status
git add README.md AGENTS.md .gitignore .env.example docs/05-agents/prompts/prompt-ops-001-init-paths-and-git.md
git commit -m "chore: initialize mview repository"
git status
```

如果 `docs/05-agents/prompts/prompt-ops-001-init-paths-and-git.md` 不存在，则不要让 `git add` 因此失败。  
可以改为：

```bash
git add README.md AGENTS.md .gitignore .env.example
git commit -m "chore: initialize mview repository"
```

并在报告中说明该 prompt 文件缺失。

---

## 6. 提交前检查

提交前必须确认：

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
12. 没有 remote。
13. 没有执行 push。

---

## 7. 输出报告格式

完成后，请按以下格式输出报告：

```md
# Ops Agent Report

## Task

Create base repository files and make the first local commit.

## Completed

- ...

## Files Created

- ...

## Files Checked

- ...

## Git Status

- Branch before: ...
- Branch after: ...
- Commit created: yes/no
- Commit hash: ...
- Working tree clean: yes/no
- Remote configured: yes/no

## Commands Run

```bash
...
```

## Pre-Commit Safety Check

- `.env` committed: no
- Real media committed: no
- Secrets committed: no
- Database committed: no
- Business code created: no

## Notes

- ...

## Issues

- ...
```

如果任何步骤失败，不要自行扩大任务范围。  
请明确说明失败原因，并等待用户或项目经理给出下一步指令。
