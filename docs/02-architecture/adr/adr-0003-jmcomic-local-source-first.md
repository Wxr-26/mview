# ADR-0003: JMComic Local Source First

## Status

Accepted

## Context

用户已经维护了一批通过 JMComic 下载的本地漫画。

当前最有价值的第一版功能不是做通用媒体浏览器，而是优先让已有 JM 漫画库可以通过 Web 舒适阅读。

## Decision

第一版 MVP 优先支持 JMComic 本地下载目录。

默认数据源：

```txt
/mnt/hdd/JMDownload/images
```

第一版不优先支持：

- CBZ
- CBR
- ZIP
- RAR
- PDF
- EPUB
- 通用图片库
- 视频库

## Consequences

优点：

- 第一版目标更清晰。
- 直接解决用户现有需求。
- 后端扫描逻辑可以围绕 JMComic 目录结构优化。
- 前端可以优先打磨漫画阅读体验。

缺点：

- 第一版不是通用媒体浏览器。
- 后续扩展普通图片和视频时需要增加新的 source adapter。

## Follow-up

后续可增加统一媒体源抽象，例如：

- JMComicLocalSource
- ImageFolderSource
- VideoFolderSource
