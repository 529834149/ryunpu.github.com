---
layout: post
title:  "Update URL query string"
date:   2014-7-3
categories: JavaScript
---

```js
function updateQueryString(name, value) {
    var href = location.href;
    var search = location.search;
    var hash = location.hash;
    var query = getQueryString(name);
    var hasQuery = typeof query !== 'object';

    if (hasQuery) {
        return href.replace(name + '=' + query, name + '=' + value);
    } else {
        if (search) {
            return href.replace(search, search + '&' + name + '=' + value);
        } else {
            if (hash) {
                return href.replace(hash, '?' + name + '=' + value + hash);
            } else {
                return href + '?' + name + '=' + value;
            }
        }
    }
}
```

```js
function getQueryString(name, url) {
    var href = url ? url : window.location.href;
    var reg = new RegExp('[?&]' + name + '=([^&#]*)', 'i');
    var string = reg.exec(href);
    return string ? string[1] : null;
}
```
