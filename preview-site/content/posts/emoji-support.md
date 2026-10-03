---
author: "Hugo 作者"
title: "表情符号支持"
date: "2019-03-05"
description: "在 Hugo 网站中使用表情符号的方法"
tags: ["表情符号"]
ShowToc: false
ShowBreadCrumbs: false
---

在 Hugo 项目中启用表情符号有几种方法。

<!--more-->

可以在模板或[内联短代码](https://gohugo.io/templates/shortcode-templates/#inline-shortcodes)中直接调用 [`emojify`](https://gohugo.io/functions/emojify/) 函数。

若要全站启用表情符号，请在[站点配置](https://gohugo.io/getting-started/configuration/)中将 `enableEmoji` 设为 `true`。之后便可在内容文件中直接输入表情符号简码，例如：

<p><span class="nowrap"><span class="emojify">🙈</span> <code>:see_no_evil:</code></span>  <span class="nowrap"><span class="emojify">🙉</span> <code>:hear_no_evil:</code></span>  <span class="nowrap"><span class="emojify">🙊</span> <code>:speak_no_evil:</code></span></p>
<br>

可以查阅[表情符号速查表](http://www.emoji-cheat-sheet.com/)了解更多简码。

---

**注意：**上述步骤会在 Hugo 中启用 Unicode 标准表情符号，但具体显示效果取决于浏览器和设备平台。若要设置表情符号的样式，可以使用第三方表情字体或字体列表，例如：

{{< highlight html >}}
.emoji {
font-family: Apple Color Emoji, Segoe UI Emoji, NotoColorEmoji, Segoe UI Symbol, Android Emoji, EmojiSymbols;
}
{{< /highlight >}}

{{< css.inline >}}

<style>
.emojify {
	font-family: Apple Color Emoji, Segoe UI Emoji, NotoColorEmoji, Segoe UI Symbol, Android Emoji, EmojiSymbols;
	font-size: 2rem;
	vertical-align: middle;
}
@media screen and (max-width:650px) {
  .nowrap {
    display: block;
    margin: 25px 0;
  }
}
</style>

{{< /css.inline >}}
