---
layout: post
title:  "Hacks for IE8"
date:   2014-5-25
categories: Web
---

```html
<!--[if IE 8 ]><html class="ie8"> <![endif]-->
<!--[if (gte IE 9)|!(IE)]><!--><html> <!--<![endif]-->
```

```css
@media \0screen {} /* IE8 */
@media \0screen\,screen\9 {} /* ≤ IE8 */
.selector { property: value\9;} /* ≤ IE8 */
```

```js
var isIE = !+'\v1'; // ≤ IE8
var isIE = document.all && !document.addEventListener; // ≤ IE8
var isIE = document.all && document.querySelector && !document.addEventListener; // IE8
```

see more: <a href="http://browserhacks.com/" target="_blank">browserhacks</a>
