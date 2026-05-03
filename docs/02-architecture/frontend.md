# Frontend Architecture

## 前端目标

第一版前端负责：

- 登录
- 展示 JM 漫画库
- 展示漫画详情
- 提供章节阅读器
- 调用后端 API
- 提供基础错误和加载状态

## 推荐技术栈

- React
- TypeScript
- Vite
- React Router
- Tailwind CSS
- TanStack Query，可选

## 推荐目录

```txt
frontend/src/
├── api/
│   ├── client.ts
│   ├── auth.ts
│   └── jm.ts
├── components/
│   ├── empty-state.tsx
│   ├── error-state.tsx
│   └── loading-state.tsx
├── features/
│   └── jm/
│       ├── components/
│       ├── hooks/
│       └── types.ts
├── layouts/
│   └── app-layout.tsx
├── pages/
│   ├── login-page.tsx
│   ├── jm-album-list-page.tsx
│   ├── jm-album-detail-page.tsx
│   └── jm-reader-page.tsx
├── router/
│   └── index.tsx
└── main.tsx
```

实际文件命名可按前端团队习惯，但应保持一致。

## 路由

建议：

```txt
/login
/
  redirect to /jm
/jm
/jm/:albumId
/jm/:albumId/read/:chapterId
```

后续扩展：

```txt
/images
/videos
/settings
```

## 页面职责

### LoginPage

- 用户名输入
- 密码输入
- 登录按钮
- 错误提示

### JMAlbumListPage

- 获取漫画列表
- 搜索
- 漫画卡片网格
- 手动刷新按钮
- 空状态
- 加载状态

### JMAlbumDetailPage

- 展示漫画详情
- 展示章节列表
- 进入阅读器

### JMReaderPage

- 展示当前章节图片
- 纵向滚动
- 懒加载
- 顶部工具栏
- 返回详情页
- 上一章 / 下一章，可选

## API 客户端

前端应统一通过 API client 访问后端。

要求：

- 自动附带登录 token 或 cookie。
- 统一处理 401。
- 不拼接服务器绝对路径。
- 图片 URL 使用后端返回的 API URL。

## UI 原则

- 优先深色主题。
- 保持媒体内容优先。
- 卡片布局适合大量漫画。
- 阅读器尽量减少干扰。
- 移动端至少能正常阅读。

## 不做

- 不做复杂全局状态管理。
- 不做阅读进度。
- 不做收藏。
- 不做文件管理。
- 不直接访问本地文件路径。
