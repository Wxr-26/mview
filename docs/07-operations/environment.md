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
