# prompt-ops-006-extract-baseline-docs

# Role: Project Ops Agent

你是本项目的 Project Ops Agent，负责维护项目路径结构、Git 仓库状态、基础工程文件、文档归档、提交规范、GitHub 同步，以及后续非业务开发类的工程管理工作。

本项目名称为：MView  
仓库名 / 根目录名为：mview

---

## 1. 当前任务背景

用户已经将项目基线文档压缩包放到了 `mview/` 根目录下。

压缩包文件名应为：

```txt
mview-docs-baseline.zip
```

该压缩包包含第一批项目基线文档，目标是将其中的 `docs/` 内容安全合并到当前仓库的 `docs/` 目录下。

当前仓库已经存在：

```txt
docs/05-agents/prompts/
docs/05-agents/reports/
```

这些目录中已有历史 Agent prompt 和 report，必须保留，不能覆盖、删除或移动。

---

## 2. 当前任务目标

本轮任务目标是：

> 使用稳妥方式解压 `mview-docs-baseline.zip`，检查内容安全性，将基线文档合并到 `docs/` 目录，然后提交并 push 到 GitHub。

---

## 3. 本轮允许做的事情

本轮允许：

1. 检查当前目录是否为 `mview/`。
2. 检查当前 Git 分支是否为 `main`。
3. 检查工作区状态。
4. 检查压缩包是否存在。
5. 将压缩包解压到临时目录。
6. 查看临时目录内容。
7. 验证压缩包只包含允许的文档路径。
8. 将临时目录中的 `docs/` 内容合并到项目 `docs/`。
9. 保留已有 `docs/05-agents/prompts/` 和 `docs/05-agents/reports/`。
10. 创建本轮 report。
11. 提交新增文档和 report。
12. push 到 GitHub。

---

## 4. 本轮禁止事项

本轮禁止：

- 不要直接在项目根目录盲目解压。
- 不要覆盖已有 prompt 文件。
- 不要覆盖已有 report 文件。
- 不要删除 `docs/05-agents/prompts/`。
- 不要删除 `docs/05-agents/reports/`。
- 不要提交压缩包 `mview-docs-baseline.zip`。
- 不要提交临时解压目录。
- 不要创建后端代码。
- 不要创建前端代码。
- 不要创建数据库。
- 不要创建真实 `.env`。
- 不要提交真实账号、密码、Cookie、Token。
- 不要提交真实漫画、图片、视频。
- 不要提交真实 `album_data.json`。
- 不要创建 `.gitkeep`。
- 不要修改 Git remote。
- 不要 force push。
- 不要改写已有 commit 历史。

---

## 5. 路径要求

压缩包应位于：

```txt
mview/mview-docs-baseline.zip
```

临时解压目录建议使用：

```txt
/tmp/mview-docs-baseline
```

最终合并目标：

```txt
mview/docs/
```

本轮 report 文件：

```txt
docs/05-agents/reports/report-ops-006-extract-baseline-docs.md
```

如果本轮 prompt 文件已经存在于项目中，应位于：

```txt
docs/05-agents/prompts/prompt-ops-006-extract-baseline-docs.md
```

如果该 prompt 文件不存在，不要凭空重写，只在报告中说明。

---

## 6. 前置检查

请在 `mview/` 根目录执行：

```bash
pwd
git branch --show-current
git status --short
git remote -v
ls -la
```

要求：

- 当前目录必须是 `mview/`。
- 当前分支必须是 `main`。
- remote 应指向 `https://github.com/Wxr-26/mview.git` 或等价 SSH URL。
- 如果发现未知未跟踪文件，先判断是否安全。
- 如果发现 `.env`、真实媒体、真实 `album_data.json`、数据库文件，立即停止。

---

## 7. 检查压缩包

执行：

```bash
ls -lh mview-docs-baseline.zip
unzip -l mview-docs-baseline.zip
```

检查要求：

- 压缩包应存在。
- 压缩包内容应主要位于 `docs/` 下。
- 不应包含 `.env`。
- 不应包含真实媒体文件。
- 不应包含真实 `album_data.json`。
- 不应包含数据库文件。
- 不应包含后端业务代码。
- 不应包含前端业务代码。
- 不应包含 `.git/`。

如果压缩包内容不符合要求，立即停止，不要解压到项目目录。

---

## 8. 解压到临时目录

请使用临时目录，不要直接解压到项目根目录：

```bash
rm -rf /tmp/mview-docs-baseline
mkdir -p /tmp/mview-docs-baseline
unzip mview-docs-baseline.zip -d /tmp/mview-docs-baseline
find /tmp/mview-docs-baseline -maxdepth 5 -type f | sort
```

检查临时目录结构。

预期应包含：

```txt
/tmp/mview-docs-baseline/docs/...
```

如果不是这种结构，立即停止并报告。

---

## 9. 合并前冲突检查

在复制之前，检查即将写入的文件是否已经存在。

推荐执行：

```bash
cd /home/wxr/workspace/mview
find /tmp/mview-docs-baseline/docs -type f | sort
```

对每个源文件计算相对路径，例如：

```txt
/tmp/mview-docs-baseline/docs/00-project/project-brief.md
```

对应目标：

```txt
docs/00-project/project-brief.md
```

如果目标文件已经存在：

- 如果内容完全相同，可以跳过。
- 如果内容不同，不要覆盖，立即停止并报告冲突文件。
- 特别注意不要覆盖：
  - `docs/05-agents/prompts/*`
  - `docs/05-agents/reports/*`

如果目标文件不存在，可以复制。

可以使用如下方式检查冲突：

```bash
python3 - <<'PY'
from pathlib import Path
import filecmp
src_root = Path('/tmp/mview-docs-baseline/docs')
dst_root = Path('docs')
conflicts = []
for src in src_root.rglob('*'):
    if not src.is_file():
        continue
    rel = src.relative_to(src_root)
    dst = dst_root / rel
    if dst.exists() and not filecmp.cmp(src, dst, shallow=False):
        conflicts.append(str(dst))
if conflicts:
    print('CONFLICTS:')
    for item in conflicts:
        print(item)
    raise SystemExit(1)
print('No conflicting existing files.')
PY
```

如果出现冲突，不要继续复制。

---

## 10. 合并文档

如果冲突检查通过，执行复制。

推荐使用：

```bash
cp -rn /tmp/mview-docs-baseline/docs/* docs/
```

说明：

- `-r` 递归复制。
- `-n` 不覆盖已有文件。
- 这样可以保护已有 prompt/report。

复制后检查：

```bash
find docs -maxdepth 4 -type f | sort
git status --short
```

---

## 11. 创建本轮 report

请创建：

```txt
docs/05-agents/reports/report-ops-006-extract-baseline-docs.md
```

报告内容建议：

```md
# Ops Agent Report

## Task

Safely extract and merge baseline project documentation.

## Completed

- ...

## Archive

- Archive path: ...
- Archive existed: yes/no
- Extracted to: ...

## Conflict Check

- Conflicts found: yes/no
- Conflict files:
  - ...

## Files Added

- ...

## Files Preserved

- Existing prompts preserved: yes/no
- Existing reports preserved: yes/no

## Git Status

- Branch: ...
- Commit created: yes/no
- Commit hash: ...
- Push completed: yes/no
- Working tree clean: yes/no

## Commands Run

```bash
...
```

## Safety Check

- `.env` committed: no
- Archive committed: no
- Temp directory committed: no
- Real media committed: no
- Secrets committed: no
- Database committed: no
- Business code created: no
- Existing prompts overwritten: no
- Existing reports overwritten: no

## Notes

- ...

## Issues

- ...
```

---

## 12. Git 提交

提交前检查：

```bash
git status --short
```

确认：

- 新增内容主要是 `docs/` 下的文档。
- 不包含 `mview-docs-baseline.zip`。
- 不包含 `/tmp/`。
- 不包含 `.env`。
- 不包含媒体文件。
- 不包含数据库。
- 不包含代码。

建议添加：

```bash
git add docs
```

提交信息：

```bash
git commit -m "docs: add project baseline documentation"
```

如果当前环境的普通 `git commit` 因 Git 包装器问题失败，可以使用与前几次相同的 plumbing 方式：

```bash
tree=$(git write-tree)
parent=$(git rev-parse HEAD)
commit=$(git commit-tree "$tree" -p "$parent" -m "docs: add project baseline documentation")
git update-ref refs/heads/main "$commit"
git reset --hard HEAD
```

必须在报告中说明使用 plumbing 的原因。

注意：

- 不要 `git add .`，避免误提交压缩包或其他文件。
- 只使用 `git add docs`。
- 如果本轮 prompt 文件位于 `docs/05-agents/prompts/`，也会随 `git add docs` 一起提交。

---

## 13. Push

提交成功后执行：

```bash
git push
```

如果 push 失败，停止并报告原因。  
不要 force push。

最终检查：

```bash
git status --short
git log --oneline --decorate -5
git branch -vv
```

---

## 14. 提交和 push 前安全检查

提交和 push 前必须确认：

1. 没有 `.env`。
2. 没有真实密码。
3. 没有真实 Cookie。
4. 没有真实 token。
5. 没有真实漫画图片。
6. 没有真实视频文件。
7. 没有真实 `album_data.json`。
8. 没有数据库文件。
9. 没有后端业务代码。
10. 没有前端业务代码。
11. 没有 `.gitkeep`。
12. 没有提交 `mview-docs-baseline.zip`。
13. 没有提交临时目录。
14. 没有覆盖已有 prompt。
15. 没有覆盖已有 report。
16. 没有 force push。
17. 没有改写历史。

---

## 15. 输出报告摘要

完成后，请在聊天中输出摘要：

```md
# Ops Agent Report Summary

## Task

Safely extract and merge baseline project documentation.

## Completed

- ...

## Archive

- Archive path: ...
- Extracted to: ...

## Conflict Check

- Conflicts found: yes/no

## Files Added

- ...

## Git Status

- Branch: ...
- Commit created: yes/no
- Commit hash: ...
- Push completed: yes/no
- Working tree clean: yes/no

## Issues

- ...
```

同时确保完整报告已经保存到：

```txt
docs/05-agents/reports/report-ops-006-extract-baseline-docs.md
```

如果任何步骤失败，不要自行扩大任务范围。  
请明确说明失败原因，并等待用户或项目经理给出下一步指令。
