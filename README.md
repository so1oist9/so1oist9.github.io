# 杨珺的个人主页

这是杨珺的个人主页，部署地址为 <https://so1oist9.github.io/>。

页面采用静态 HTML、CSS 和 JavaScript，视觉风格参考了现代编辑式个人主页，但未复制参考站点的个人简介、照片、经历、论文或联系方式。

## 上传到 GitHub Pages

1. 在 `so1oist9/so1oist9.github.io` 仓库选择 **Add file → Upload files**。
2. 上传 `index.html`、`_config.yml`、`README.md` 和整个 `assets` 文件夹。
3. 提交到 `main` 分支。
4. 在 **Settings → Pages** 中选择 **Deploy from a branch**、`main`、`/(root)`。
5. 等待 Actions 部署完成后访问 <https://so1oist9.github.io/>。

## 本地预览

在项目目录中启动任意静态文件服务器，例如：

```bash
python -m http.server 8000
```

然后访问 `http://localhost:8000/`。

## 后续填写

- `index.html`：替换“内容待补充”占位文字。
- `#about`：个人介绍。
- `#focus`：研究方向或关注领域。
- `#notes`：近期动态与项目。
- `#contact`：联系方式或个人链接。
- `assets/css/style.css`：颜色、字号和版式。
