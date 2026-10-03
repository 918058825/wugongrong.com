---
author: Hugo 作者
title: 数学公式排版
date: 2019-03-08
description: 使用 KaTeX 显示数学公式的简要指南
math: true
ShowBreadCrumbs: false
---

在 Hugo 项目中，可以借助第三方 JavaScript 库显示数学公式。

<!--more-->

本示例使用 [KaTeX](https://katex.org/)。

-   在 `/layouts/partials/math.html` 下创建一个局部模板。
-   在该模板中引用 [自动渲染扩展](https://katex.org/docs/autorender.html)，也可以将脚本放在自己的网站上。
-   按照以下示例，在模板中引入该局部模板（例如 [`extend_head.html`](../papermod/papermod-faq/#custom-head--footer)）。
-   更多背景信息请参阅 [问题 #236](https://github.com/adityatelange/hugo-PaperMod/issues/236)。

```bash
{{ if or .Params.math .Site.Params.math }}
{{ partial "math.html" . }}
{{ end }}
```

-   若要全站启用 KaTeX，请在项目配置中将 `math` 设为 `true`。
-   若只在个别页面启用，请在对应内容文件中添加 `math: true`。

**注意：**支持的 TeX 函数请参阅 [KaTeX 文档](https://katex.org/docs/supported.html)。

{{< math.inline >}}
{{ if or .Page.Params.math .Site.Params.math }}

<!-- KaTeX -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css" integrity="sha384-zB1R0rpPzHqg7Kpt0Aljp8JPLqbXI3bhnPWROx27a9N0Ll6ZP/+DiW/UqRcLbRjq" crossorigin="anonymous">
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.js" integrity="sha384-y23I5Q6l+B6vatafAwxRu/0oK/79VlbSz7Q9aiSZUvyWYIYsd+qj+o24G5ZU2zJz" crossorigin="anonymous"></script>
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/contrib/auto-render.min.js" integrity="sha384-kWPLUVMOks5AQFrykwIup5lo0m3iMkkHrD0uJ4H5cjeGihAutqP0yW0J6dpFiVkI" crossorigin="anonymous" onload="renderMathInElement(document.body);"></script>
{{ end }}
{{</ math.inline >}}

### 示例

{{< math.inline >}}

<p>
行内公式：\(\varphi = \dfrac{1+\sqrt5}{2}= 1.6180339887…\)
</p>
{{</ math.inline >}}

块级公式：

$$
 \varphi = 1+\frac{1} {1+\frac{1} {1+\frac{1} {1+\cdots} } }
$$
