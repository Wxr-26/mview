# JMComic Local Source

## 目标

第一版通过读取本地 JMComic 下载目录来生成漫画库。

默认根目录：

```txt
/mnt/hdd/JMDownload/images
```

通过环境变量配置：

```env
JM_IMAGE_ROOT=/mnt/hdd/JMDownload/images
```

## 目录结构

预期结构：

```txt
images/
└── {album-id}/
    ├── album_data.json
    └── {chapter-id}/
        ├── page image files
        └── ...
```

示例：

```txt
images/
└── 1974/
    ├── album_data.json
    └── 1/
        ├── 00001.jpg
        ├── 00002.jpg
        └── ...
```

## album_data.json 字段

已知可能包含：

```txt
id
name
authors
tags
page_count
scramble_id
pub_date
update_date
likes
views
comment_count
works
actors
description
episode_list
related_list
source
updated_at
```

解析要求：

- `id`：字符串处理。
- `name`：作为标题。
- `authors`：数组，缺失时为空数组。
- `tags`：数组，缺失时为空数组。
- `page_count`：可尝试作为数字处理，但不要因异常失败。
- `likes`：可能是字符串。
- `views`：可能带 `K` 等字符，不强制转数字。
- `description`：可能为空字符串。
- `related_list`：可能为 null。
- 未知字段应保留在 raw data 中。

## episode_list

当前已知 `episode_list` 可能不是标准对象数组，而是字符串形式的 Python tuple，例如：

```json
[
  "('1974', '1', 'Sample Chapter Title')"
]
```

解析规则：

- 使用安全解析方式，例如 Python `ast.literal_eval`。
- 禁止使用 `eval`。
- 解析成功后提取：
  - album_id
  - chapter_id
  - title
- 解析失败时降级为：
  - chapter_id：从实际目录推断
  - title：使用原始字符串或目录名

## 章节识别

优先策略：

1. 从 `episode_list` 解析章节。
2. 根据章节 ID 查找同名目录。
3. 如果 `episode_list` 缺失或损坏，扫描 album 目录下的子目录作为章节。
4. 子目录按自然顺序排序。

## 图片排序

必须使用自然排序。

正确顺序：

```txt
1.jpg
2.jpg
10.jpg
```

错误顺序：

```txt
1.jpg
10.jpg
2.jpg
```

## 封面策略

MVP 默认封面：

> 第一章第一张图片。

如果找不到图片：

- 返回空封面 URL，或
- 前端显示占位封面。

## 容错策略

以下情况不应导致整个服务崩溃：

- 单个 album JSON 损坏
- 单个 album 缺失章节目录
- 单张图片读取失败
- 部分字段缺失
- `episode_list` 解析失败

系统应尽可能返回可用数据，并在错误列表或日志中记录问题。
