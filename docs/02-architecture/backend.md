# Backend Architecture

## 后端目标

第一版后端负责：

- 单用户登录
- 配置读取
- JMComic 本地目录扫描
- `album_data.json` 宽松解析
- 章节图片扫描
- 图片安全读取
- API 响应

## 推荐目录

```txt
backend/
├── app/
│   ├── api/
│   │   ├── auth.py
│   │   └── jm.py
│   ├── core/
│   │   ├── config.py
│   │   ├── auth.py
│   │   └── security.py
│   ├── schemas/
│   │   ├── auth.py
│   │   └── jm.py
│   ├── services/
│   │   ├── jm-scanner.py
│   │   ├── jm-metadata.py
│   │   ├── image-service.py
│   │   └── path-guard.py
│   └── main.py
└── tests/
```

实际 Python 文件名可使用下划线以符合 Python 习惯，例如 `jm_scanner.py`。文档路径和仓库文档使用连字符，代码内部按语言规范处理。

## 配置

从环境变量读取：

```env
APP_NAME=MView
APP_ENV=development
APP_USERNAME=admin
APP_PASSWORD=change-me
JWT_SECRET=change-me
JM_IMAGE_ROOT=/mnt/hdd/JMDownload/images
BACKEND_HOST=0.0.0.0
BACKEND_PORT=8000
```

## 核心服务

### JMScanner

职责：

- 遍历 `JM_IMAGE_ROOT`
- 找到 album 目录
- 检查 `album_data.json`
- 调用元数据解析
- 扫描章节目录
- 扫描图片文件
- 生成内存索引或响应对象

### JMMetadataParser

职责：

- 读取 JSON
- 宽松解析字段
- 安全解析 `episode_list`
- 保留 raw data
- 提供降级结果

禁止：

- 禁止 `eval`
- 禁止强依赖所有字段存在
- 禁止字段异常导致整个服务崩溃

### ImageService

职责：

- 根据 album、chapter、page 定位图片
- 验证路径安全
- 返回图片响应
- 设置合适的 content type

### PathGuard

职责：

- 将用户请求参数转换为受控路径
- 校验最终路径位于 `JM_IMAGE_ROOT`
- 拒绝路径穿越
- 拒绝访问非允许扩展名

## API 设计

详见：

```txt
docs/02-architecture/api.md
```

## 错误处理

后端需要区分：

- 未登录：401
- 无权限或非法路径：403
- 不存在资源：404
- 元数据损坏：返回部分数据并记录错误，或 422
- 服务内部错误：500，但不泄露服务器绝对路径

## 测试重点

- `episode_list` 解析
- 图片自然排序
- 缺失字段兼容
- 缺失章节目录兼容
- 路径穿越拦截
- 未登录访问拦截
