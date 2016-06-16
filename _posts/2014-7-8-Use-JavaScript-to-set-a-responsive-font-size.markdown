---
layout: post
title:  "Use JavaScript to set a responsive font-size"
date:   2014-7-8
categories: JavaScript
---

```js
(function(doc, win) {
    var docEl = doc.documentElement;
    var resizeEvt = 'orientationchange' in win ? 'orientationchange' : 'resize';
    var recalc = function() {
        var clientWidth = docEl.clientWidth;

        if (!clientWidth) return;
        if (clientWidth >= 750) {
            clientWidth = 750;
        }
        docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
    };

    recalc();
    win.addEventListener(resizeEvt, recalc, false);
})(document, window);
```
