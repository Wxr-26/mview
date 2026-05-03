# Agent Rules

## 总原则

所有 Agent 必须遵守：

- 只做被明确分配的任务。
- 不实现任务外功能。
- 修改前阅读相关文档。
- 输出完成报告。
- 保持变更范围可审查。

## 必读文件

所有 Agent 开始任务前至少阅读：

```txt
AGENTS.md
docs/00-project/current-state.md
docs/01-requirements/mvp-scope.md
docs/01-requirements/out-of-scope.md
```

与角色相关时还需阅读：

```txt
docs/02-architecture/
docs/03-design/
docs/04-tasks/
docs/05-agents/
```

## 禁止事项

MVP 阶段禁止：

- 添加数据库
- 添加 JMComic 下载
- 添加阅读进度
- 添加视频进度
- 添加文件删除 / 移动 / 重命名 / 上传
- 暴露服务器绝对路径
- 提交真实媒体文件
- 提交密钥、Cookie、Token
- 私自引入复杂依赖
- 私自改动其他 Agent 负责范围

## 输出报告

每次任务完成后，Agent 应输出：

```md
# Agent Report

## Task
...

## Completed
...

## Files Changed
...

## How To Run
...

## Notes
...

## Issues
...
```

报告应保存到：

```txt
docs/05-agents/reports/
```

## Prompt 归档

所有正式 prompt 保存到：

```txt
docs/05-agents/prompts/
```

文件名格式：

```txt
prompt-{role}-{number}-{short-description}.md
```

示例：

```txt
prompt-be-001-init-backend.md
prompt-fe-001-init-frontend.md
prompt-qa-001-review-foundation.md
```
