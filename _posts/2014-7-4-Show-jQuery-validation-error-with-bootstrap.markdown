---
layout: post
title:  "Show jQuery validation error with bootstrap"
date:   2014-7-4
categories: JavaScript
---

```js
$('form').validate({
    // set this to false if you don't what to set focus on the first invalid input
    // focusInvalid: false,
    
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

    highlight: function(element) {
        $(element).closest('.form-group').addClass('has-error');
    },

    unhighlight: function(element) {
        $(element).closest('.form-group').removeClass('has-error');
    },

    errorElement: 'span',

    errorClass: 'help-block',

    errorPlacement: function(error, element) {
        if(element.parent('.input-group').length) {
            error.insertAfter(element.parent());
        } else {
            error.insertAfter(element);
        }
    }
});
```

###### With popover

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
