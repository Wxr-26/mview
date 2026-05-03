# Current State

## 当前阶段

Phase 0：项目初始化与文档基线建立。

## 已完成

- 项目名称确定为 `MView`。
- 仓库名确定为 `mview`。
- 本地 Git 仓库已初始化。
- 默认分支已设置为 `main`。
- GitHub public 仓库已创建并连接。
- `origin` 已指向用户仓库。
- 基础文件已创建：
  - `README.md`
  - `AGENTS.md`
  - `.gitignore`
  - `.env.example`
- Agent prompt / report 归档路径已确定：
  - `docs/05-agents/prompts/`
  - `docs/05-agents/reports/`

## 当前项目方向

第一版 MVP 是一个只读的本地 JMComic Web 阅读器。

后续再扩展为完整个人媒体浏览器。

## 当前关键约束

- 第一版不使用数据库。
- 第一版不接入 JMComic 下载功能。
- 第一版不记录漫画阅读进度。
- 第一版不记录视频播放进度。
- 第一版不实现文件删除、移动、重命名、上传。
- 第一版只支持单用户。
- 第一版面向局域网 / 校园 VPN 访问。
- 所有文件读取必须经过路径安全检查。
- 前端不得接收服务器绝对路径。

## 当前下一步

1. 提交本批项目基线文档。
2. 让 Project Ops Agent 执行文档提交。
3. 进入 Phase 1：项目基础骨架。
4. 分别启动 Backend Agent 与 Frontend Agent 的初始化任务。

## 当前待确认

- 后端具体包管理工具：暂定 `uv` 或 `pip + venv`，待开发前确认。
- 前端 UI 组件库：暂定 React + TypeScript + Vite + Tailwind CSS。
- Web 鉴权方式：暂定单用户 JWT 或 Session，后续架构任务确认。
