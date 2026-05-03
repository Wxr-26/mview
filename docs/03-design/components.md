# Components

## 通用组件

### LoadingState

用途：

- 页面加载
- 列表加载
- 刷新中

### EmptyState

用途：

- 没有漫画
- 搜索无结果
- 章节无图片

### ErrorState

用途：

- API 错误
- 登录过期
- 图片加载失败

### AppLayout

用途：

- 提供基础页面框架
- 顶部栏
- 内容区域

## 漫画组件

### AlbumCard

展示：

- 封面
- 标题
- 作者
- 标签
- 页数
- Album ID

点击进入详情页。

### AlbumGrid

展示漫画卡片网格。

要求：

- 支持响应式列数。
- 支持空状态。
- 支持加载状态。

### AlbumMeta

展示漫画详情元数据：

- 作者
- 标签
- 页数
- 发布时间
- 更新时间
- 点赞数
- 浏览数
- 评论数

### ChapterList

展示章节列表。

每个章节展示：

- 章节标题
- 章节 ID
- 页数
- 阅读按钮

### ReaderToolbar

阅读器顶部工具栏。

包含：

- 返回详情页
- 当前标题
- 章节切换，可选

### ReaderImage

单张阅读图片。

要求：

- 懒加载
- 加载失败显示占位
- 不拉伸变形
- 宽度适配屏幕

## 表单组件

### LoginForm

包含：

- 用户名
- 密码
- 登录按钮
- 错误提示

## 后续组件

以下不进入 MVP：

- FavoriteButton
- TagEditor
- RatingControl
- ReadingProgressBar
- VideoPlayer
- FileManager
