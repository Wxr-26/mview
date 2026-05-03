# Security

## 安全目标

即使第一版只在局域网 / 校园 VPN 下使用，也必须满足基础安全要求：

- 未登录用户不能访问媒体数据。
- 不能通过 API 读取任意服务器文件。
- 前端不能获得服务器绝对路径。
- 仓库不能提交敏感信息。

## 鉴权

第一版采用单用户鉴权。

配置来源：

```env
APP_USERNAME=admin
APP_PASSWORD=change-me
JWT_SECRET=change-me
```

要求：

- 密码不得写死在代码里。
- 真实 `.env` 不得提交。
- 登录成功后，使用 token 或 session 保护 API。
- 除登录接口外，其他 API 默认需要鉴权。

## 文件访问安全

### 禁止直接暴露路径

错误做法：

```json
{
  "path": "/mnt/hdd/JMDownload/images/1974/1/00001.jpg"
}
```

正确做法：

```json
{
  "image_url": "/api/jm/albums/1974/chapters/1/pages/1/image"
}
```

### 路径穿越防护

后端必须防止以下请求访问根目录外文件：

```txt
../../../../etc/passwd
..%2F..%2F..%2Fetc%2Fpasswd
```

实现原则：

1. 使用受控参数构造路径。
2. 对最终路径执行 resolve。
3. 验证最终路径位于 `JM_IMAGE_ROOT` 内。
4. 拒绝符号链接逃逸风险，或明确处理符号链接策略。
5. 只允许图片扩展名。

## 允许的图片扩展名

MVP 建议：

```txt
.jpg
.jpeg
.png
.webp
.gif
```

## 日志安全

日志中避免输出：

- 密码
- token
- cookie
- 完整绝对路径
- 真实敏感配置

调试时可以输出 album ID、chapter ID、错误类型。

## Git 安全

必须忽略：

- `.env`
- 真实媒体文件
- 数据库文件
- 缓存目录
- 下载目录
- cookie / token

## Public Repo 注意事项

由于仓库是 public：

- 示例数据必须脱敏。
- 不要提交真实 `album_data.json`。
- 不要提交真实漫画图片。
- 不要提交服务器私有路径配置文件。
