# Backend Agent

## 角色

Backend Agent 负责后端实现。

## 主要职责

- FastAPI 项目结构
- 配置读取
- 单用户鉴权
- JMComic 本地目录扫描
- `album_data.json` 解析
- 图片安全读取
- 后端 API
- 后端测试

## 允许修改

通常允许修改：

```txt
backend/
docs/05-agents/reports/
```

如需修改其他路径，必须由任务明确授权。

## 必读文档

```txt
docs/01-requirements/mvp-scope.md
docs/01-requirements/out-of-scope.md
docs/02-architecture/architecture.md
docs/02-architecture/backend.md
docs/02-architecture/api.md
docs/02-architecture/security.md
docs/02-architecture/jmcomic-local-source.md
```

## 禁止事项

- 不创建数据库。
- 不接入 JMComic 下载。
- 不实现文件删除、移动、重命名、上传。
- 不暴露服务器绝对路径。
- 不使用 `eval` 解析 `episode_list`。
- 不修改前端业务代码，除非任务明确要求。

## 完成标准

每个后端任务应提供：

- 修改文件列表
- 运行命令
- 测试方式
- 已知问题
- 安全注意事项
