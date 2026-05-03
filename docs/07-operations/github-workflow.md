# GitHub Workflow

## 仓库

```txt
https://github.com/Wxr-26/mview
```

## 可见性

Public

## Remote

```txt
origin https://github.com/Wxr-26/mview.git
```

## 推送

默认推送：

```bash
git push
```

首次设置 upstream：

```bash
git push -u origin main
```

## 注意事项

由于仓库是 public：

- 不提交真实媒体。
- 不提交真实 `album_data.json`。
- 不提交 `.env`。
- 不提交 cookie、token、密码。
- 示例数据必须脱敏。

## 后续建议

当开发任务变多后，可以考虑：

- 每个 Agent 任务一个分支。
- 每个阶段一个 Pull Request。
- 使用 GitHub Issues 记录任务。
- 使用 GitHub Releases 标记版本。
