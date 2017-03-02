---
layout: post
title:  "Fix Fastclick setSelectionRange bug"
date:   2017-2-24
categories: JavaScript
comments: true
---

###### fastclick.js line 329 change:

```js
if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
    length = targetElement.value.length;
    targetElement.setSelectionRange(length, length);
} else {
    targetElement.focus();
}
```

to

```js
var useSelectionRange = deviceIsIOS;

if(useSelectionRange){
   try{
       length = targetElement.value.length;
       targetElement.setSelectionRange(length, length);
   }catch(error){
       useSelectionRange = false;
   }
}

if (!useSelectionRange) {
   targetElement.focus();
}
```

###### use anothor library [hammer-time](https://github.com/hammerjs/hammer-time)

<br>
see [issue](https://github.com/ftlabs/fastclick/issues/358#issuecomment-250091539)
