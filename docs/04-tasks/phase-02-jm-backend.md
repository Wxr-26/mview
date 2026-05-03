# Phase 2: JM Backend

## 目标

实现读取本地 JMComic 目录所需的后端能力。

## BE-002：配置读取

实现从环境变量读取：

- `APP_USERNAME`
- `APP_PASSWORD`
- `JWT_SECRET`
- `JM_IMAGE_ROOT`

## BE-003：单用户鉴权

实现：

- 登录
- 登出
- 当前用户状态
- API 鉴权依赖

不做：

- 注册
- 多用户
- 角色权限

## BE-004：JM 元数据解析器

实现：

- 读取 `album_data.json`
- 宽松解析字段
- 安全解析 `episode_list`
- 保留 raw data

重点：

- 禁止 `eval`
- 使用安全解析方式
- 字段缺失时降级

## BE-005：JM 目录扫描器

实现：

- 扫描 `JM_IMAGE_ROOT`
- 识别 album
- 识别 chapter
- 扫描图片
- 自然排序
- 生成 album summary 和 detail

## BE-006：图片安全读取服务

实现：

- 根据 album/chapter/page 定位图片
- 校验路径位于根目录内
- 拒绝路径穿越
- 返回图片响应

## BE-007：JM API

实现：

- `GET /api/jm/albums`
- `GET /api/jm/albums/{album_id}`
- `GET /api/jm/albums/{album_id}/chapters`
- `GET /api/jm/albums/{album_id}/chapters/{chapter_id}`
- `GET /api/jm/albums/{album_id}/chapters/{chapter_id}/pages/{page_index}/image`
- `GET /api/jm/albums/{album_id}/cover`
- `POST /api/jm/refresh`

## QA-002：后端审查

检查：

- 鉴权是否覆盖图片接口。
- 是否暴露绝对路径。
- 路径穿越是否被拦截。
- `episode_list` 是否安全解析。
- 缺失字段是否兼容。
- 没有数据库。
- 没有下载功能。
