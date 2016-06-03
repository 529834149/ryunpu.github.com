---
layout: post
title:  "Show jQuery validation error width bootstrap popover"
date:   2014-7-4
categories: JavaScript
---

```js
$('form').validate({
    rules: {
        email: {
            required: true,
            email: true
        }
    },

    messages: {
        email: {
            required: '邮箱不能为空',
            email: '邮箱格式不正确'
        }
    },

    showErrors: function(errorMap, errorList) {
        $.each(this.successList, function(index, value) {
            $(value).popover('hide');
        });

        $.each(errorList, function(index, value) {
            var popover = $(value.element).popover({
                trigger: 'manual',
                placement: 'bottom',
                content: value.message,
                template: '<div class="popover"><div class="arrow"></div><div class="popover-inner"><div class="popover-content"><p></p></div></div></div>'
            });

            popover.data('bs.popover').options.content = value.message;
            $(value.element).popover('show');
        });
    }
});
```
