# Page Flows

## 1. 登录流程

```txt
用户打开 /
↓
未登录
↓
跳转 /login
↓
输入用户名密码
↓
POST /api/auth/login
↓
成功
↓
跳转 /jm
```

失败：

```txt
POST /api/auth/login
↓
401
↓
显示登录失败提示
```

## 2. 漫画库浏览流程

```txt
用户进入 /jm
↓
GET /api/jm/albums
↓
展示漫画列表
↓
用户输入关键词
↓
GET /api/jm/albums?q=keyword
↓
展示搜索结果
```

## 3. 手动刷新流程

```txt
用户点击刷新
↓
POST /api/jm/refresh
↓
后端重新扫描
↓
返回扫描结果
↓
前端刷新漫画列表
```

## 4. 漫画详情流程

```txt
用户点击漫画卡片
↓
进入 /jm/:albumId
↓
GET /api/jm/albums/:albumId
↓
展示详情和章节列表
```

## 5. 阅读流程

```txt
用户点击章节
↓
进入 /jm/:albumId/read/:chapterId
↓
GET /api/jm/albums/:albumId/chapters/:chapterId
↓
获得页面 image_url 列表
↓
前端懒加载图片
```

## 6. 未登录访问流程

```txt
用户访问 /jm
↓
GET /api/auth/me
↓
未登录
↓
跳转 /login
```

或：

```txt
用户请求受保护 API
↓
后端返回 401
↓
前端清除登录状态
↓
跳转 /login
```

## 7. 路径非法流程

```txt
用户构造非法 album/chapter/page 参数
↓
后端 PathGuard 校验失败
↓
返回 403 或 404
↓
前端显示资源不可访问
```
