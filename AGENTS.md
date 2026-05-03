# AGENTS

This file defines global rules for all Cursor agents working on MView.

## Required Reading

Before making changes, every agent must read the task prompt assigned to it.

When project documents become available, agents must also read the relevant files under `docs/`.

## Core Rules

- Do not implement features outside the assigned task.
- Do not add a database unless the task explicitly requires it.
- Do not implement file delete, move, rename, or upload features in the MVP.
- Do not implement JMComic download features in the MVP.
- Do not implement reading progress tracking in the MVP.
- Do not implement video progress tracking in the MVP.
- Do not expose absolute server paths to the frontend.
- Do not commit secrets, credentials, cookies, tokens, or local `.env` files.
- Do not commit real media files.
- Keep changes scoped to the assigned role and task.

## Current MVP Scope

The first MVP is a read-only local JMComic web reader.

The target local source directory is expected to be configurable, with the current intended path:

```txt
/mnt/hdd/JMDownload/images
```

The MVP should read local album directories and `album_data.json` files, but must not call JMComic download APIs.

## Agent Boundaries

### Project Ops Agent

Responsible for:

- Directory structure
- Git repository state
- GitHub preparation
- Basic repository files
- Commit hygiene
- Non-business engineering operations

The Project Ops Agent must not implement backend or frontend business logic.

### Backend Agent

Responsible for backend implementation only when assigned.

### Frontend Agent

Responsible for frontend implementation only when assigned.

### UI/UX Agent

Responsible for design and interaction guidance only when assigned.

### QA Agent

Responsible for review, testing plans, and issue reports only when assigned.
