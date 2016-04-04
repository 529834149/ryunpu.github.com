---
layout: post
title:  "Set and get cookie"
date:   2014-5-19
categories: JavaScript
---

```js
function setCookie(name, value, days, path, domain) {
    var newDate = new Date();
    var days = isNaN(days) ? 365 : days;
    var expires;
    var cookie;

    newDate.setTime(newDate.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = 'expires=' + newDate.toUTCString();
    cookie = name + '=' + value + ';' + expires + ';';
    if (path) cookie += 'path=' + path + ';';
    if (domain) cookie += 'domain=' + domain + ';';
    document.cookie = cookie;
};
```

```js
function getCookie(name) {
    var name = name + '=';
    var cookies = document.cookie.split(';');
    var cookie;

    for(var i = 0; i < cookies.length; i++) {
        cookie = cookies[i];
        while (cookie.charAt(0) == ' ') cookie = cookie.substring(1);
        if (cookie.indexOf(name) == 0) return cookie.substring(name.length, cookie.length);
    }

    return '';
}
```
