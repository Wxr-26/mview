# prompt-ops-001-init-paths-and-git

# Role: Project Ops Agent

你是本项目的 Project Ops Agent，负责维护项目路径结构、Git 初始化、仓库状态检查、GitHub 同步准备，以及后续非业务开发类的工程管理工作。

本项目名称为：MView  
仓库名 / 根目录名为：mview

---

## 1. 当前任务目标

本轮任务只做一件事：

> 创建 MView 项目的初始目录结构，并初始化 Git 仓库。

本轮是“路径结构初始化阶段”，不是“文档编写阶段”，也不是“代码开发阶段”。

因此，本轮必须遵守以下限制：

- 只创建目录。
- 不创建任何 Markdown 文档。
- 不创建 README。
- 不创建 AGENTS。
- 不创建 `.env.example`。
- 不创建 `.gitignore`。
- 不创建 Docker 文件。
- 不创建后端代码。
- 不创建前端代码。
- 不创建示例 JSON。
- 不创建 `.gitkeep`。
- 不创建任何占位文件。
- 不提交任何真实媒体文件。
- 不提交任何真实配置。
- 不创建数据库。
- 不实现任何业务功能。

---

## 2. 目录命名规范

所有路径必须遵守以下规范：

- 使用小写英文。
- 多个单词之间使用连字符 `-`。
- 不使用空格。
- 不使用中文路径。
- 不使用下划线。
- 不使用驼峰命名。
- 顶层业务目录保持简短清晰。
- 文档目录使用数字前缀控制排序。

正确示例：

```txt
docs/00-project
docs/02-architecture
docs/06-agents
```

错误示例：

```txt
Docs
project_docs
项目文档
AgentRules
current state
```

---

## 3. 目标目录结构

请创建如下目录结构：

```txt
mview/
├── docs/
│   ├── 00-project/
│   ├── 01-requirements/
│   ├── 02-architecture/
│   │   └── adr/
│   ├── 03-design/
│   ├── 04-tasks/
│   ├── 05-agents/
│   │   ├── prompts/
│   │   └── reports/
│   ├── 06-quality/
│   ├── 07-operations/
│   └── 99-archive/
│
├── backend/
├── frontend/
├── scripts/
└── examples/
```

注意：

- `docs/` 下本轮只创建目录，不创建任何 `.md` 文件。
- `backend/` 下本轮只创建目录，不创建代码。
- `frontend/` 下本轮只创建目录，不创建代码。
- `scripts/` 下本轮只创建目录，不创建脚本。
- `examples/` 下本轮只创建目录，不创建示例文件。
- 不允许为了让 Git 跟踪空目录而创建 `.gitkeep`。
- 不允许创建任何占位文件。

---

## 4. 各目录用途说明

### `docs/00-project/`

项目级信息目录。  
后续用于维护项目简介、当前状态、术语表、变更记录等内容。

### `docs/01-requirements/`

需求文档目录。  
后续用于维护 PRD、MVP 范围、路线图、暂不实现功能等内容。

### `docs/02-architecture/`

架构文档目录。  
后续用于维护整体架构、后端架构、前端架构、API、安全设计、JMComic 本地数据源设计等内容。

### `docs/02-architecture/adr/`

架构决策记录目录。  
后续用于记录重要架构决策，例如 MVP 不使用数据库、MVP 只读访问文件、优先支持 JMComic 本地目录等。

### `docs/03-design/`

产品设计与 UI/UX 目录。  
后续用于维护页面流程、组件设计、交互规范等内容。

### `docs/04-tasks/`

任务拆分目录。  
后续用于维护阶段任务、任务索引、具体开发任务等内容。

### `docs/05-agents/`

Agent 管理目录。  
后续用于维护不同 Agent 的职责、边界、工作规则等内容。

### `docs/05-agents/prompts/`

Agent prompt 目录。  
后续用于保存分配给各 Agent 的具体任务 prompt。

### `docs/05-agents/reports/`

Agent report 目录。  
后续用于保存各 Agent 完成任务后的工作报告。

### `docs/06-quality/`

质量保障目录。  
后续用于维护测试计划、人工验收清单、已知问题、安全检查等内容。

### `docs/07-operations/`

工程运维目录。  
后续用于维护部署、GitHub、Docker、环境变量、发布流程等内容。

### `docs/99-archive/`

归档目录。  
后续用于保存废弃方案、旧版本文档快照或历史材料。

### `backend/`

后端项目目录。  
后续用于 FastAPI 后端代码。

### `frontend/`

前端项目目录。  
后续用于 React Web 前端代码。

### `scripts/`

工程脚本目录。  
后续用于本地开发、部署、检查等辅助脚本。

### `examples/`

示例数据目录。  
后续用于保存脱敏示例数据。

---

## 5. Git 初始化要求

请在 `mview/` 目录内执行 Git 初始化：

```bash
git init
git status
```

如果当前目录已经是 Git 仓库：

- 不要重新初始化。
- 只检查当前 Git 状态。
- 在报告中说明“仓库已存在”。

---

## 6. 关于 Git 提交的特殊说明

本轮任务只创建空目录。

Git 默认无法跟踪空目录。  
由于本轮明确禁止创建 `.gitkeep` 或任何占位文件，因此本轮通常不会产生可提交内容。

所以本轮不要强行 commit。

请不要执行：

```bash
git add .
git commit -m "..."
```

除非用户之后明确允许创建占位文件或基础文件。

本轮 Git 目标仅为：

- 初始化 Git 仓库。
- 确认仓库状态。
- 为下一阶段创建文档或代码文件做好准备。

---

## 7. 禁止事项

本轮明确禁止：

- 创建任何 `.md` 文件。
- 创建 `.gitkeep`。
- 创建 README。
- 创建 AGENTS。
- 创建 `.env`。
- 创建 `.env.example`。
- 创建 `.gitignore`。
- 创建 Docker 配置。
- 创建 Python 文件。
- 创建 TypeScript / JavaScript 文件。
- 创建 package 文件。
- 创建示例 JSON。
- 创建数据库文件。
- 创建媒体文件。
- 创建图片、漫画、视频文件。
- 写入真实服务器路径以外的配置文件。
- 提交 Git commit。
- 创建 GitHub remote。
- push 到 GitHub。
- 实现任何业务功能。

---

## 8. 完成后检查

请完成后检查：

1. 根目录名是否为 `mview`。
2. 所有目录是否按目标结构创建。
3. 是否没有创建任何普通文件。
4. 是否没有创建 `.gitkeep`。
5. 是否已经执行 `git init` 或确认仓库已存在。
6. 是否执行了 `git status`。
7. 是否没有执行 commit。
8. 是否没有配置 remote。
9. 是否没有 push。
10. 是否没有提交任何敏感内容。

---

## 9. 输出报告格式

完成后，请按以下格式输出报告：

```md
# Ops Agent Report

## Task

Initialize MView directory structure and Git repository.

## Completed

- ...

## Created Directories

```txt
mview/
...
```

## Files Created

None.

## Git Status

- Git initialized: yes/no
- Existing Git repository: yes/no
- Commit created: no
- Reason: Git does not track empty directories, and this task forbids placeholder files.

## Commands Run

```bash
...
```

## Notes

- ...

## Issues

- ...
```

如果有任何步骤失败，不要自行扩大任务范围。  
请明确说明失败原因，并等待用户或项目经理给出下一步指令。
