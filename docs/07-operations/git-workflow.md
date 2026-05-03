# Git Workflow

## 分支

当前默认分支：

```txt
main
```

## Commit 规范

建议使用：

```txt
docs: add project baseline documentation
feat(backend): add health check
feat(frontend): add base routing
fix(security): prevent path traversal
test(backend): add jm parser tests
chore: update repository structure
```

## Agent 工作方式

每个任务应尽量形成独立 commit。

流程：

1. PM 生成 prompt。
2. 用户将 prompt 交给对应 Agent。
3. Agent 修改文件。
4. Agent 生成 report。
5. Agent 提交 commit。
6. 用户把 report 或 GitHub 链接发给 PM 审查。

## 禁止

- 不要 force push。
- 不要重写已推送历史。
- 不要提交 `.env`。
- 不要提交真实媒体文件。
- 不要提交 token。
