---
author: ["Aditya Telange"]
title: "代码语法示例"
date: "2019-03-10"
description: "通过示例展示代码语法和 HTML 元素的格式。"
summary: "通过示例展示代码语法和 HTML 元素的格式。"
tags: ["Markdown", "语法", "代码"]
categories: ["主题", "语法"]
series: ["主题指南"]
ShowToc: true
TocOpen: true
social:
  fediverse_creator: "@adityatelange@mastodon.social"
weight: 3
---

### 行内代码

`这是行内代码`

### 仅使用 `pre` 标签

<pre>
这是预格式文本
</pre>

### 使用反引号标记代码块

```{hl_lines=[2,8]}
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <title>HTML5 文档示例</title>
    <meta
      name="description"
      content="通过示例展示代码语法和 HTML 元素的格式。"
    />
  </head>
  <body>
    <p>示例文字</p>
  </body>
</html>
```

### 指定语言的代码块

```html
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <title>HTML5 文档示例</title>
    <meta
      name="description"
      content="通过示例展示代码语法和 HTML 元素的格式。"
    />
  </head>
  <body>
    <p>示例文字</p>
  </body>
</html>
```

### 指定语言并显示行号的代码块

```html {linenos=true}
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <title>HTML5 文档示例</title>
    <meta
      name="description"
      content="通过示例展示代码语法和 HTML 元素的格式。"
    />
  </head>
  <body>
    <p>示例文字</p>
  </body>
</html>
```

### 显示行号并<mark>高亮</mark>指定行的代码块

- PaperMod 支持 `linenos=true` 和 `linenos=table` 两种行号显示方式。

```html {linenos=true,hl_lines=[2,8]}
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <title>HTML5 文档示例</title>
    <meta
      name="description"
      content="通过示例展示代码语法和 HTML 元素的格式。"
    />
  </head>
  <body>
    <p>示例文字</p>
  </body>
</html>
```

- <del>使用 `linenos=inline` 时，行号和<mark>高亮效果可能无法</mark>正确显示。</del>
- 此问题已在[提交 045c084](https://github.com/adityatelange/hugo-PaperMod/commit/045c08496d61b1b3f9c79e69e7d3d243a526d8f3)中修复。

```html {linenos=inline,hl_lines=[2,8]}
<!DOCTYPE html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8" />
    <title>HTML5 文档示例</title>
    <meta
      name="description"
      content="通过示例展示代码语法和 HTML 元素的格式。"
    />
  </head>
  <body>
    <p>示例文字</p>
  </body>
</html>
```

### 使用四个空格缩进的代码块

    <!doctype html>
    <html lang="zh-CN">
    <head>
      <meta charset="utf-8">
      <title>HTML5 文档示例</title>
    </head>
    <body>
      <p>示例文字</p>
    </body>
    </html>

### 使用 Hugo 内置的代码高亮短代码

{{< highlight html >}}

<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <title>HTML5 文档示例</title>
</head>
<body>
  <p>示例文字</p>
</body>
</html>
{{< /highlight >}}
