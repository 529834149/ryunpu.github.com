---
layout: post
title:  "Remove HTML tags"
date:   2014-6-4
categories: JavaScript
---

###### a way:

```js
function strip(html) {
    var tmp = document.createElement('DIV');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
}
```

###### use RegEx:

```js
function strip(html) {
    return html.replace(/(<([^>]+)>)/ig, '');
}
```

###### with jQuery:

```js
function strip(html) {
    return $(html).text();
}
```
