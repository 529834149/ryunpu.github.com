---
layout: post
title:  "Detect a Touch Screen"
date:   2014-5-15
categories: Mobile
---

* reliable way

```js
var hasTouch;
window.addEventListener('touchstart', function setHasTouch () {
    hasTouch = true;
    // Remove event listener once fired, otherwise it'll kill scrolling
    // performance
    window.removeEventListener('touchstart', setHasTouch);
}, false);
```

* another way

```js
var hasTouch = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
```

* not so reliable

```js
var hasTouch = 'ontouchstart' in window;
```
