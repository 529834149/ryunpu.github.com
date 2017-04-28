---
layout: post
title:  "A simple stick footer function"
date:   2014-6-10
categories: JavaScript
---

```js
function stickFooter(selector, placeholder) {
    var $el = $(selector);
    var position = $el.css('position');
    var bottom = $el.css('bottom');

    function reposition() {
        var bodyHeight = $('body').outerHeight();
        var winHeight = $(window).height();

        $(placeholder).hide();
        $el.removeClass('fixed').css({
            position: position,
            bottom: bottom
        });

        if (bodyHeight <= winHeight) {
            $el.addClass('fixed').css({
                position: 'fixed',
                bottom: bottom
            });

            $(placeholder).height($el.outerHeight()).show();
        }

        $el.show();
    }

    reposition();
    $(window).on('resize', reposition);
}
```
