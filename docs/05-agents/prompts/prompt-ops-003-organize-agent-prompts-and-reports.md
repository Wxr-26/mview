# prompt-ops-003-organize-agent-prompts-and-reports

# Role: Project Ops Agent

你是本项目的 Project Ops Agent，负责维护项目路径结构、Git 仓库状态、基础工程文件、提交规范，以及后续与 GitHub 同步相关的非业务开发工作。

本项目名称为：MView  
仓库名 / 根目录名为：mview

---

## 1. 当前任务背景

当前仓库已经完成第一次本地提交：

```txt
chore: initialize mview repository
```

但上一次报告中发现两个问题：

1. `docs/05-agents/prompts/prompt-ops-001-init-paths-and-git.md` 不存在。
2. 工作区仍有未跟踪的 `docs/` 内容，其中提到了不符合规范的路径 `docs/08-prompt/`。

本项目已经确定 Agent prompt 和 report 的规范路径：

```txt
docs/05-agents/prompts/
docs/05-agents/reports/
```

不使用：

```txt
docs/08-prompt/
```

---

## 2. 当前任务目标

本轮任务目标是：

> 整理 Ops Agent 的 prompt 和 report 文件，使其全部归档到规范路径下，并完成一次本地 commit。

---

## 3. 本轮允许做的事情

本轮允许：

1. 检查当前 Git 状态。
2. 检查 `docs/08-prompt/` 是否存在。
3. 检查 `docs/05-agents/prompts/` 是否存在。
4. 检查 `docs/05-agents/reports/` 是否存在。
5. 将已有 Ops prompt 文件移动到 `docs/05-agents/prompts/`。
6. 删除空的 `docs/08-prompt/` 目录。
7. 在 `docs/05-agents/reports/` 下创建本轮报告文件。
8. 提交一次 Git commit。

---

## 4. 本轮禁止事项

本轮禁止：

- 不要修改 `README.md`。
- 不要修改 `AGENTS.md`。
- 不要修改 `.env.example`。
- 不要修改 `.gitignore`，除非发现严重错误并在报告中说明。
- 不要创建业务需求文档。
- 不要创建架构文档。
- 不要创建 API 文档。
- 不要创建后端代码。
- 不要创建前端代码。
- 不要创建示例 JSON。
- 不要创建数据库。
- 不要创建 `.gitkeep`。
- 不要提交真实媒体文件。
- 不要提交真实配置。
- 不要配置 GitHub remote。
- 不要 push 到 GitHub。
- 不要改动第一次提交历史。
- 不要 squash commit。

---

## 5. 路径规范

Agent prompt 必须放在：

```txt
docs/05-agents/prompts/
```

Agent report 必须放在：

```txt
docs/05-agents/reports/
```

文件命名必须使用：

- 小写英文
- 连字符
- 任务编号
- `.md` 后缀

示例：

```txt
prompt-ops-001-init-paths-and-git.md
prompt-ops-002-init-base-files-and-first-commit.md
prompt-ops-003-organize-agent-prompts-and-reports.md

report-ops-001-init-paths-and-git.md
report-ops-002-init-base-files-and-first-commit.md
report-ops-003-organize-agent-prompts-and-reports.md
```

不允许使用：

```txt
docs/08-prompt/
prompt_ops_001.md
OpsReport.md
报告.md
```

---

## 6. 文件整理要求

### 6.1 检查 `docs/08-prompt/`

如果 `docs/08-prompt/` 存在：

1. 列出其中所有文件。
2. 判断其中是否有 Ops prompt 文件。
3. 将 Ops prompt 文件移动到：

```txt
docs/05-agents/prompts/
```

如果文件名不符合规范，请重命名为规范格式。

常见映射建议：

```txt
prompt-ops-001-init-paths-and-git.md
prompt-ops-002-init-base-files-and-first-commit.md
```

如果无法判断某个文件的用途，不要删除它。  
请移动到：

```txt
docs/99-archive/
```

并在报告中说明原因。

如果 `docs/08-prompt/` 移动后为空，请删除该目录。

---

### 6.2 检查 `docs/05-agents/prompts/`

确认以下文件是否存在：

```txt
docs/05-agents/prompts/prompt-ops-001-init-paths-and-git.md
docs/05-agents/prompts/prompt-ops-002-init-base-files-and-first-commit.md
```

如果存在，不要覆盖。

如果缺失，但 `docs/08-prompt/` 中有对应文件，则移动过去。

如果仍缺失，不要凭空重写，只在报告中说明缺失。

---

### 6.3 创建本轮报告

请在以下路径创建本轮报告：

```txt
docs/05-agents/reports/report-ops-003-organize-agent-prompts-and-reports.md
```

报告内容必须真实反映本轮操作。

报告格式：

```md
# Ops Agent Report

## Task

Organize Ops Agent prompts and reports into the standard docs path.

## Completed

- ...

## Files Moved

- ...

## Files Created

- ...

## Directories Removed

- ...

## Git Status

- Branch: ...
- Commit created: yes/no
- Commit hash: ...
- Working tree clean: yes/no
- Remote configured: yes/no

## Commands Run

```bash
...
```

## Notes

- ...

## Issues

- ...
```

---

## 7. Git 操作要求

请在 `mview/` 根目录执行。

推荐流程：

```bash
pwd
git status
find docs -maxdepth 4 -type f | sort
```

整理文件后执行：

```bash
git status
git add docs/05-agents/prompts docs/05-agents/reports docs/99-archive
git commit -m "docs: organize ops prompts and reports"
git status
git log --oneline -2
```

如果普通 `git commit` 因当前环境的 Git 包装问题失败，可以使用与上次相同的 plumbing 方式完成提交，但必须在报告中说明。

如果没有任何可提交变更，不要强行 commit。  
请在报告中说明原因。

---

## 8. 提交前安全检查

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

## 9. 输出报告格式

完成后，请在聊天中按以下格式输出摘要：

```md
# Ops Agent Report Summary

## Task

Organize Ops Agent prompts and reports into the standard docs path.

## Completed

- ...

## Files Moved

- ...

## Files Created

- ...

## Directories Removed

- ...

## Git Status

- Branch: ...
- Commit created: yes/no
- Commit hash: ...
- Working tree clean: yes/no
- Remote configured: yes/no

## Issues

- ...
```

同时确保完整报告文件已经保存到：

```txt
docs/05-agents/reports/report-ops-003-organize-agent-prompts-and-reports.md
```

如果任何步骤失败，不要自行扩大任务范围。  
请明确说明失败原因，并等待用户或项目经理给出下一步指令。
