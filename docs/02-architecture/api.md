# API Design

## API 原则

- 所有业务 API 统一以 `/api` 开头。
- 除登录接口外，所有接口都需要鉴权。
- 前端不得依赖服务器绝对路径。
- 图片访问也必须通过受保护 API。
- 错误响应应稳定，不泄露服务器路径。

## Auth API

### POST `/api/auth/login`

请求：

```json
{
  "username": "admin",
  "password": "change-me"
}
```

响应：

```json
{
  "authenticated": true,
  "token": "..."
}
```

实现可以选择 token 或 cookie，但前后端必须保持一致。

### POST `/api/auth/logout`

登出。

响应：

```json
{
  "ok": true
}
```

### GET `/api/auth/me`

检查当前登录状态。

响应：

```json
{
  "authenticated": true,
  "username": "admin"
}
```

## JM API

### GET `/api/jm/albums`

获取漫画列表。

查询参数，可选：

```txt
q=keyword
```

响应：

```json
{
  "items": [
    {
      "album_id": "1974",
      "title": "Sample Album Title",
      "authors": ["Sample Author"],
      "tags": ["sample"],
      "page_count": 23,
      "chapter_count": 1,
      "cover_url": "/api/jm/albums/1974/cover",
      "updated_at": "2025-11-22T22:22:43.370395"
    }
  ],
  "total": 1
}
```

### GET `/api/jm/albums/{album_id}`

获取漫画详情。

响应：

```json
{
  "album_id": "1974",
  "title": "Sample Album Title",
  "authors": ["Sample Author"],
  "tags": ["sample"],
  "page_count": 23,
  "pub_date": "2018-03-13",
  "update_date": "2023-05-02",
  "likes": "708",
  "views": "69K",
  "comment_count": 9,
  "description": "",
  "chapters": [
    {
      "chapter_id": "1",
      "title": "Sample Chapter Title",
      "page_count": 23
    }
  ]
}
```

### GET `/api/jm/albums/{album_id}/chapters`

获取章节列表。

响应：

```json
{
  "items": [
    {
      "album_id": "1974",
      "chapter_id": "1",
      "title": "Sample Chapter Title",
      "page_count": 23
    }
  ]
}
```

### GET `/api/jm/albums/{album_id}/chapters/{chapter_id}`

获取章节页面信息。

响应：

```json
{
  "album_id": "1974",
  "chapter_id": "1",
  "title": "Sample Chapter Title",
  "pages": [
    {
      "page_index": 1,
      "image_url": "/api/jm/albums/1974/chapters/1/pages/1/image"
    }
  ]
}
```

### GET `/api/jm/albums/{album_id}/chapters/{chapter_id}/pages/{page_index}/image`

获取页面图片。

要求：

- 必须鉴权。
- 必须校验路径位于 `JM_IMAGE_ROOT` 内。
- 返回图片二进制。
- 不返回服务器绝对路径。

### GET `/api/jm/albums/{album_id}/cover`

获取封面图片。

默认可取第一章第一张图。

### POST `/api/jm/refresh`

手动刷新本地 JM 索引。

响应：

```json
{
  "ok": true,
  "album_count": 10,
  "errors": []
}
```

## 错误响应

建议统一格式：

```json
{
  "error": {
    "code": "not_found",
    "message": "Album not found"
  }
}
```

禁止在错误响应中暴露：

- 服务器绝对路径
- 环境变量
- token
- stack trace
