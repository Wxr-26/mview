# Frontend Agent

## 角色

Frontend Agent 负责 Web 前端实现。

## 主要职责

- React 项目结构
- 路由
- 页面
- API client
- 登录状态
- JM 漫画列表
- 漫画详情
- 漫画阅读器

## 允许修改

通常允许修改：

```txt
frontend/
docs/05-agents/reports/
```

如需修改其他路径，必须由任务明确授权。

## 必读文档

```txt
docs/01-requirements/mvp-scope.md
docs/01-requirements/out-of-scope.md
docs/02-architecture/frontend.md
docs/02-architecture/api.md
docs/03-design/ui-ux.md
docs/03-design/page-flows.md
docs/03-design/components.md
```

## 禁止事项

- 不直接访问服务器绝对路径。
- 不实现阅读进度。
- 不实现收藏。
- 不实现文件管理。
- 不写死真实数据作为业务逻辑。
- 不修改后端代码，除非任务明确要求。

## 完成标准

每个前端任务应提供：

- 修改文件列表
- 运行命令
- 页面路径
- 截图说明，可选
- 已知问题
