---
layout: post
title:  "Create dynamic variables"
date:   2014-04-03
categories: JavaScript
---

with eval():

```js
eval('var variable' + i + '= arr[i]');
```

with window[]:

```js
window['variable' + i] = arr[i];
```