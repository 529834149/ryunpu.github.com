---
layout: post
title:  "Get the HTTP headers"
date:   2014-5-23
categories: JavaScript
---

```js
var req = new XMLHttpRequest();
req.open('GET', document.location, false);
req.send(null);
var headers = req.getAllResponseHeaders().toLowerCase();
alert(headers);
```

with jQuery:

```js
$.ajax({
    url: location.href
})
.complete(function(xhr) {
    console.log(xhr.getAllResponseHeaders(), xhr.getResponseHeader('Server'));
});
```
