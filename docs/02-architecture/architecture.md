# Architecture

## 总体架构

MView 第一版采用前后端分离架构：

```txt
Browser
  ↓
Frontend Web App
  ↓ HTTP API
Backend API Server
  ↓
Linux File System
  ↓
JMComic Local Directory
```

## 技术栈暂定

### 后端

- Python
- FastAPI
- Pydantic
- Uvicorn
- Pillow，可选，用于图片信息读取
- 不使用数据库

### 前端

- React
- TypeScript
- Vite
- React Router
- Tailwind CSS，可选
- TanStack Query，可选

### 部署

- 第一阶段支持本地开发运行
- 后续支持 Docker Compose
- 运行在 Linux 服务器
- 局域网 / 校园 VPN 访问

## 第一版数据流

### 漫画列表

```txt
Frontend requests /api/jm/albums
Backend scans or reads in-memory index
Backend returns album summaries
Frontend renders grid/list
```

### 漫画详情

```txt
Frontend requests /api/jm/albums/{album_id}
Backend reads album metadata and chapters
Frontend renders metadata and chapter list
```

### 漫画阅读

```txt
Frontend requests chapter pages
Backend returns page descriptors with image URLs
Frontend lazy-loads images
Image requests go through backend secured image endpoint
```

## 后端分层

建议：

```txt
backend/app/
├── api/
├── core/
├── schemas/
├── services/
└── main.py
```

职责：

- `api/`：HTTP 路由
- `core/`：配置、鉴权、安全基础设施
- `schemas/`：响应模型
- `services/`：业务服务，例如扫描、元数据解析、图片读取、路径防护
- `main.py`：FastAPI 应用入口

## 前端分层

建议：

```txt
frontend/src/
├── api/
├── components/
├── features/
├── layouts/
├── pages/
├── router/
└── main.tsx
```

职责：

- `api/`：后端 API 封装
- `components/`：通用组件
- `features/`：按业务模块组织，例如 `jm`
- `layouts/`：页面布局
- `pages/`：路由页面
- `router/`：路由配置

## 状态管理

第一版前端状态应保持简单：

- 登录状态
- 当前页面数据
- 搜索条件
- 阅读器当前章节显示

不需要全局复杂状态管理库。

## 扫描策略

第一版可以采用以下两种方式之一：

### 方式 A：启动时扫描 + 手动刷新

优点：

- 列表响应快
- 实现简单

缺点：

- 启动时目录大可能较慢

### 方式 B：按请求扫描

优点：

- 启动快
- 不需要缓存

缺点：

- 每次请求可能较慢

建议 MVP 初期采用：

> 启动时扫描 + 手动刷新。

如果实现成本需要降低，可以先采用按请求扫描，再优化。

## 安全边界

核心原则：

- 后端是唯一能访问服务器文件系统的组件。
- 前端只能请求 API URL。
- 前端不得接收服务器绝对路径。
- 图片读取必须鉴权。
- 所有文件路径必须限制在配置的根目录内。

## 后续扩展点

第一版不实现，但架构上应预留：

- 数据库存储
- JMComic 下载服务
- 普通图片源
- 视频源
- 缩略图缓存
- 文件管理能力
