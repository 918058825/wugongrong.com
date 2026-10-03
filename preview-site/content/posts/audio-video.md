---
title: "音频与视频"
date: 2026-04-11
description: "学习如何在 Hugo 网站中通过短代码和 HTML 嵌入音频与视频。"
tags: ["Hugo", "音频", "视频", "短代码", "HTML"]
---

本文介绍如何使用短代码和 HTML 在 Hugo 网站中嵌入音频与视频，让文章包含更丰富的多媒体内容。

## 嵌入音频

可以使用内置的 `audio` 短代码嵌入音频，示例如下：

```markdown
{{/*< audio src="/path/to/your/audiofile.mp3" >*/}}
```

{{< audio src="https://upload.wikimedia.org/wikipedia/commons/5/55/Apollo_8_liftoff.ogg" caption="Apollo 8 liftoff.ogg" >}}


请将 `/path/to/your/audiofile.mp3` 替换为音频文件的实际路径。该短代码会生成播放器，访客可以直接在网页中播放音频。

也可以使用 HTML 嵌入音频：

```html
<audio controls>
  <source src="/path/to/your/audiofile.mp3" type="audio/mpeg">
  你的浏览器不支持音频播放。
</audio>
```

同样，请把 `/path/to/your/audiofile.mp3` 替换为音频文件的正确路径。此 HTML 代码会生成与短代码类似的播放器。

## 嵌入视频

可以使用 Hugo 的 `video` 短代码嵌入视频：

```markdown
{{/*< video src="/path/to/your/videofile.mp4" >*/}}
```

{{< video src="https://upload.wikimedia.org/wikipedia/commons/8/8f/Apollo_4_separation_of_interstage_ring.webm" >}}


请将 `/path/to/your/videofile.mp4` 替换为视频文件的实际路径。该短代码会生成播放器，访客可以直接在网页中观看视频。

也可以使用 HTML 嵌入视频：

```html
<video controls>
  <source src="/path/to/your/videofile.mp4" type="video/mp4" />
  你的浏览器不支持视频播放。
</video>
```

请把 `/path/to/your/videofile.mp4` 替换为视频文件的正确路径。此 HTML 代码会生成与短代码类似的播放器。
