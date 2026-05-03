# ADR-0001: No Database in MVP

## Status

Accepted

## Context

MView 第一版需要读取用户已有的 JMComic 本地下载目录。

当前数据已经存在于：

```txt
/mnt/hdd/JMDownload/images/{album-id}/album_data.json
/mnt/hdd/JMDownload/images/{album-id}/{chapter-id}/
```

用户后续希望接入 JMComic 下载功能。届时数据模型可能需要覆盖下载任务、下载状态、失败重试、原始元数据、文件路径、完整性检查等信息。

## Decision

第一版 MVP 不使用数据库。

系统通过本地目录扫描和 `album_data.json` 解析生成运行时数据。

## Consequences

优点：

- 减少第一版复杂度。
- 避免过早设计错误数据模型。
- 更快实现可用阅读器。
- 后续可根据真实下载功能再设计数据库。

缺点：

- 无法持久化阅读进度。
- 大目录扫描可能有性能问题。
- 无法做复杂筛选、收藏、标签。

## Follow-up

后续如果引入数据库，应先设计独立 ADR。
