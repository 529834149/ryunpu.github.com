---
layout: post
title:  "A top alert module with Bootstrap"
date:   2014-8-20
categories: JavaScript
---

```js
export default (msg, { type = 'info', timer } = {}) => {
    if (!msg) return;

    const tpl = `
        <div class="alert alert-${type} alert-dismissible fade in" role="alert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">×</span></button>
            ${msg}
        </div>
    `;

    if (!$('.cus-top-alert').length) {
        $(tpl).appendTo('body').wrap('<div class="cus-top-alert"></div>');
    } else {
        $('.cus-top-alert').html(tpl);
    }

    $('.cus-top-alert .alert').alert();

    if (timer) {
        setTimeout(() => {
            $('.cus-top-alert .alert').alert('close');
        }, timer);
    }
};
```

```css
.cus-top-alert { position: fixed; left: 50%; top: -4px; z-index: 1001; max-width: 600px; transform: translateX(-50%);}
```
