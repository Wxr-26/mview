# Environment

## MVP 环境变量

```env
APP_NAME=MView
APP_ENV=development

APP_USERNAME=admin
APP_PASSWORD=change-me
JWT_SECRET=change-me

JM_IMAGE_ROOT=/mnt/hdd/JMDownload/images

BACKEND_HOST=0.0.0.0
BACKEND_PORT=8000
FRONTEND_PORT=5173
```

## 文件

仓库只提交：

```txt
.env.example
```

不得提交：

```txt
.env
.env.local
.env.production
```

## JM_IMAGE_ROOT

默认：

```txt
/mnt/hdd/JMDownload/images
```

后端必须允许通过环境变量修改。

## 密码

第一版可以用环境变量中的单用户密码。

后续如接入数据库或多用户，再重新设计用户系统。

## JWT_SECRET

开发环境可以使用占位值。

真实部署必须修改为随机长字符串。

不得提交真实值。

## Conda 开发环境（推荐）

项目推荐使用 **Conda**（或 Mamba）环境 **`mview`**，由仓库根目录的 **`environment.yml`** 定义。

- 该文件仅声明基础工具链：**Python 3.11**、**Node.js 22**、`pip`。
- 后端 Python 依赖仍以 **`backend/pyproject.toml`** 为准，通过 `pip install -e ".[dev]"` 安装。
- 前端依赖仍以 **`frontend/package-lock.json`** 为准，通过 `npm install` 安装。

创建、激活与验证步骤见 **`docs/07-operations/development-environment.md`**。

`.env` 仍不允许提交；真实部署配置继续通过本地 `.env` 或环境变量提供。
