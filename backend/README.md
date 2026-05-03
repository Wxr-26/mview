# MView Backend

FastAPI service for the MView local JMComic web reader. This package holds HTTP APIs and server-side file access (JM scanning and image serving will be added in later tasks).

## Install

From the repository root or `backend/`:

```bash
cd backend
python -m venv .venv
source .venv/bin/activate
pip install -e ".[dev]"
```

Using [uv](https://github.com/astral-sh/uv) (optional):

```bash
cd backend
uv venv
source .venv/bin/activate
uv pip install -e ".[dev]"
```

Copy environment defaults from the repo root `.env.example` into `backend/.env` if you need overrides (do not commit `.env`).

## Run

```bash
cd backend
source .venv/bin/activate
uvicorn app.main:app --reload
```

The app listens on host and port from `BACKEND_HOST` and `BACKEND_PORT` (defaults `0.0.0.0:8000`).

## Tests

```bash
cd backend
source .venv/bin/activate
pytest
```

## Not included yet

- Database
- JMComic directory scanning and `album_data.json` parsing
- Image or album APIs
- Authentication and protected routes
- File management or JM download integration
