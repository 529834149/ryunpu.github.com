---
layout: post
title:  "Get URL query string"
date:   2014-6-5
categories: JavaScript
---

###### method 1:

```js
function getQueryString(name, url) {
    var href = url ? url : window.location.href;
    var reg = new RegExp('[?&]' + name + '=([^&#]*)', 'i');
    var string = reg.exec(href);
    return string ? string[1] : null;
}
```

###### method 2:

```js
function getQueryString(name, url) {
    var search = url ? url : window.location.search;
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(search)||[,""])[1].replace(/\+/g, '%20'))||null;
}
```

###### get the anchor:

```js
function getAnchor(url) {
    return url ? url.split('#')[1] : window.location.hash.substring(1);
}
```
