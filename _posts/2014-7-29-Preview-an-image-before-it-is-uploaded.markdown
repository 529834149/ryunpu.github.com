---
layout: post
title:  "Preview an image before it is uploaded"
date:   2014-7-29
categories: JavaScript
---

###### Use URL.createObjectURL

```js
function preview(input, callback) {
    if (input.files && input.files[0] && typeof callback === 'function') {
        callback(URL.createObjectURL(input.files[0]));
    }
}
```

###### Use FileReader

```js
function preview(input, callback) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function(e) {
            if (typeof callback === 'function') {
                callback(e.target.result);
            }
        };

        reader.readAsDataURL(input.files[0]);
    }
}
```
