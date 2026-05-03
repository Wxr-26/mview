# Glossary

## MView

本项目名称。第一版是本地 JMComic Web 阅读器，长期目标是个人媒体浏览系统。

## MVP

Minimum Viable Product，最小可用版本。本项目第一版 MVP 优先保证“能安全、稳定地浏览已有本地 JM 漫画”。

## JMComic

用户此前用于下载 JM 漫画的 Python 工具生态。本项目第一版只读取已下载结果，不调用下载功能。

## JM Image Root

JMComic 本地图片根目录。当前预期：

```txt
/mnt/hdd/JMDownload/images
```

## Album

一本 JM 漫画，对应目录：

```txt
images/{album-id}/
```

## Chapter

漫画章节，对应目录：

```txt
images/{album-id}/{chapter-id}/
```

## Page

漫画章节中的单张图片。

## album_data.json

JMComic 下载后保存的漫画元数据文件。第一版后端需要宽松解析该文件。

## Local Source

本地数据源。第一版的 Local Source 指服务器文件系统中的 JMComic 下载目录。

## Read-only

只读模式。系统可以读取、展示媒体，但不能删除、移动、重命名、上传或修改原始文件。

## Path Traversal

路径穿越攻击。例如通过 `../../../../etc/passwd` 访问服务器非媒体目录。后端必须防御。

## Agent

Cursor 中承担某类职责的开发代理，例如 Backend Agent、Frontend Agent、QA Agent、Project Ops Agent。

## Prompt

分配给 Agent 的任务说明文件，统一放在：

```txt
docs/05-agents/prompts/
```

## Report

Agent 完成任务后的报告文件，统一放在：

```txt
docs/05-agents/reports/
```

## ADR

Architecture Decision Record，架构决策记录，统一放在：

```txt
docs/02-architecture/adr/
```
