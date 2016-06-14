---
layout: post
title:  "Remove a specified element from an Array and get the rest"
date:   2014-7-7
categories: JavaScript
---

```js
function getRest(arr, value, prop) {
    var rest = arr.slice();

    for (var i = 0; i < rest.length; i++) {
        if (prop && rest[i][prop] === value || !prop && rest[i] === value) {
            rest.splice(i, 1);
            break;
        }
    }

    return rest;
}
```

```js
getRest([1, 2, { x: 3}], 2); // [1, { x: 3}]
getRest([1, 2, { x: 3}], 3, 'x'); // [1, 2]
```
