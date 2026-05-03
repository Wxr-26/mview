# Development environment

## Why Conda

The repository targets a consistent toolchain across machines and agents. A single Conda environment named `mview` pins **Python 3.11** and **Node.js 22** so backend tests and frontend builds behave the same regardless of the system Node version (older distros often ship Node 10–18).

Application dependencies are **not** fully declared in Conda:

- Backend Python packages come from `backend/pyproject.toml` (install with `pip`).
- Frontend npm packages come from `frontend/package-lock.json` (install with `npm`).

`environment.yml` only defines the base interpreters and `pip`.

## What is in the environment

| Component | Version | Role |
|-----------|---------|------|
| Python | 3.11.x | Backend runtime, pytest |
| Node.js | 22.x | Vite 5 / TypeScript 5 frontend |
| npm | bundled with Node | Install and build frontend |
| pip | via conda | Install editable backend and dev extras |

## Create the environment

From the repository root (`mview/`):

```bash
conda env create -f environment.yml
```

If the environment already exists and you only need to sync with `environment.yml`:

```bash
conda env update -f environment.yml --prune
```

## Activate the environment

```bash
conda activate mview
```

## Check versions

Interactive (after `conda activate mview`):

```bash
python --version
node --version
npm --version
```

Non-interactive (no activation):

```bash
conda run -n mview python --version
conda run -n mview node --version
conda run -n mview npm --version
```

Expect **Python 3.11.x**, **Node v22.x.y**, and a working **npm**.

## Backend dependencies

```bash
cd backend
pip install -e ".[dev]"
```

Or one shot:

```bash
conda run -n mview bash -lc 'cd backend && pip install -e ".[dev]"'
```

## Run backend tests

```bash
cd backend
pytest
```

Or:

```bash
conda run -n mview bash -lc 'cd backend && pip install -e ".[dev]" && pytest'
```

## Frontend dependencies

```bash
cd frontend
npm install
```

## Frontend production build

```bash
cd frontend
npm run build
```

Or:

```bash
conda run -n mview bash -lc 'cd frontend && npm install && npm run build'
```

## Common issues

1. **`conda: command not found`** — Install [Miniconda](https://docs.conda.io/en/latest/miniconda.html) or [Mambaforge](https://github.com/conda-forge/miniforge), restart the shell, then retry.

2. **Wrong Node after activate** — Ensure `conda activate mview` ran successfully and `which node` points inside the env (e.g. `.../envs/mview/bin/node`).

3. **`pip install -e ".[dev]"` fails** — Run from `backend/` with the env active; check errors for missing system libraries (report to Backend Agent if code changes are needed).

4. **`npm run build` fails** — Confirm Node is **22.x** (`node --version`). Older Node versions are unsupported for this frontend stack.

5. **Slow solves** — Prefer updating an existing env with `conda env update -f environment.yml --prune` instead of repeatedly creating from scratch.

6. **Secrets** — Never put passwords or tokens in `environment.yml`. Use `.env` locally (not committed); see `docs/07-operations/environment.md`.
