---
title: "PaperMod 安装指南"
summary: "在 Hugo 网站中安装和更新 PaperMod 主题的步骤说明。"
date: 2021-01-20
weight: 1
series: ["PaperMod 主题"]
aliases: ["/papermod-installation"]
tags: ["PaperMod", "文档"]
author: ["Aditya Telange"]
social:
  fediverse_creator: "@adityatelange@mastodon.social"
---

> 本指南使用 `yaml` 配置格式。与 `toml` 相比，`yaml` 更容易阅读；需要转换格式时，可以使用 [YAML 转 TOML 工具](https://www.google.com/search?q=yml+to+toml)。

## 开始之前 🚀

先按照 [Hugo 快速入门指南](https://gohugo.io/getting-started/quick-start/)安装 Hugo。PaperMod 使用了较新的 Hugo 功能，请安装 [Hugo v0.146.0 或更新版本](https://github.com/gohugoio/hugo/releases)。在终端运行 `hugo version` 可以查看当前版本。

## 创建 Hugo 网站

```bash
hugo new site MyFreshWebsite --format yaml
```

将 `MyFreshWebsite` 换成你的网站名称。较旧版本的 Hugo 可能不支持 `--format yaml`，详情请参阅 [hugo new site 命令文档](https://gohugo.io/commands/hugo_new_site/#synopsis)。

## 安装 PaperMod

### 方法一：使用 Git 克隆

在网站目录中运行：

```bash
git clone https://github.com/adityatelange/hugo-PaperMod themes/PaperMod --depth=1
```

如果要固定使用某个版本，可以在命令末尾添加 `--branch v7.0`。更新主题时进入 `themes/PaperMod` 并运行 `git pull`。

### 方法二：使用 Git 子模块

```bash
git submodule add --depth=1 https://github.com/adityatelange/hugo-PaperMod.git themes/PaperMod
git submodule update --init --recursive
```

更新主题时运行：

```bash
git submodule update --remote --merge
```

了解更多请参阅 [Git 子模块指南](https://www.atlassian.com/git/tutorials/git-submodule)。

### 方法三：下载压缩包

从 [GitHub Releases](https://github.com/adityatelange/hugo-PaperMod/releases)下载主题压缩包，解压到网站的 `themes` 目录中。

### 方法四：使用 Hugo 模块

先安装 [Go](https://go.dev/doc/install)，然后在网站目录中初始化模块：

```bash
hugo mod init YOUR_OWN_GIT_REPOSITORY
```

在 `hugo.yaml` 中添加主题模块：

```yaml
module:
  imports:
    - path: github.com/adityatelange/hugo-PaperMod
```

运行 `hugo mod get -u` 更新主题。更多说明请参阅 [Hugo 模块文档](https://gohugo.io/hugo-modules/use-modules/)。

## 在网站中启用主题

在 `hugo.yaml` 中设置：

```yaml
theme: ["PaperMod"]
```

首次安装后，网站内容还是空白的。你可以查看 [PaperMod 示例站源码](https://github.com/adityatelange/hugo-PaperMod/tree/exampleSite)，并阅读[安装文档](https://github.com/adityatelange/hugo-PaperMod/wiki/Installation)、[功能说明](https://github.com/adityatelange/hugo-PaperMod/wiki/Features)、[常见问题](https://github.com/adityatelange/hugo-PaperMod/wiki/FAQs)、[图标说明](https://github.com/adityatelange/hugo-PaperMod/wiki/Icons)、[配置变量](https://github.com/adityatelange/hugo-PaperMod/wiki/Variables)和[模板自定义指南](https://github.com/adityatelange/hugo-PaperMod/wiki/Template_Overrides)。

## 支持项目 🫶

- 在 [GitHub 仓库](https://github.com/adityatelange/hugo-PaperMod)为 PaperMod 点亮星标。
- 在[社交媒体](https://x.com/intent/tweet/?text=Checkout%20Hugo%20PaperMod)分享主题。
- 通过 [GitHub Sponsors](https://github.com/sponsors/adityatelange)或 [Ko-fi](https://ko-fi.com/adityatelange)支持维护者。

## 相关视频

在 [YouTube 播放列表](https://youtube.com/playlist?list=PLeiDFxcsdhUrzkK5Jg9IZyiTsIMvXxKZP)中观看 PaperMod 介绍和配置教程。
