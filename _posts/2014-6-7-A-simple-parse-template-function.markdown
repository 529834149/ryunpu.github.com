---
layout: post
title:  "A simple parse template function"
date:   2014-6-7
categories: JavaScript
---

<div id="js-demo-1"></div>

```js
function parseTpl(tpl, obj) {
    var tpl;

    for (var property in obj) {
        if (obj.hasOwnProperty(property)) {
            tpl = tpl.replace(new RegExp('\\$' + property, 'ig'), obj[property]);
        }
    }

    return tpl;
}

$('#js-demo-1').html(parseTpl('Hello, <strong>$name</strong>, Today is <strong>$date</strong>', {
    name: 'Pym',
    date: new Date().toLocaleString()
}));
```
