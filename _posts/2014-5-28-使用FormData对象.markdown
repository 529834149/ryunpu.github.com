---
layout: post
title:  "使用FormData对象"
date:   2014-5-28
categories: JavaScript
---

```js
var formData = new FormData();
formData.append('name', $('#name').val());
formData.append('file', $('#file')[0].files[0]);

$.ajax({
    url: $('#form').attr('action'),
    type: 'POST',
    cache: false,
    data: formData,
    processData: false,
    contentType: false
})
.done(function(data) {
    console.log(data);
})
.fail(function() {
    console.log('请求失败');
});
```

see more: <a href="https://developer.mozilla.org/zh-CN/docs/Web/Guide/Using_FormData_Objects" target="_blank">Using FormData Objects</a>
