---
layout: post
title:  "Center Anything with CSS"
date:   2014-5-26
categories: CSS
---

```css
.centered { position: absolute; left: 0; right: 0; top: 0; bottom: 0; margin: auto;}
```

```css
.centered { position: absolute; left: 50%; top: 50%; transform: translate(-50%,-50%);}
```

```css
.center-container { display: table;}
.center-container > div { display: table-cell; text-align: center; vertical-align: middle;}
.center-container > div .centered { margin: auto;}
```

```css
.center-container { display: flex; -webkit-justify-content: center; justify-content: center; -webkit-align-items: center; align-items: center;}
```

see more: <a href="http://www.smashingmagazine.com/2013/08/absolute-horizontal-vertical-centering-css/" target="_blank">Smashing</a>
