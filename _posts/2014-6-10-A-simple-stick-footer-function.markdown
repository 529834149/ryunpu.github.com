---
layout: post
title:  "A simple stick footer function"
date:   2014-6-10
categories: JavaScript
---

```js
function stickFooter(selector) {
    var $el = $(selector);
    var position = $el.css('position');
    var bottom = $el.css('bottom');
    
    function reposition() {
        $el.removeClass('fixed').css({
            position: position,
            bottom: bottom
        });
        
        var bodyHeight = $('body').height();
        var winHeight = $(window).height();
        
        if (bodyHeight < winHeight) {
            $el.addClass('fixed').css({
                position: 'fixed',
                bottom: 0
            });
        }
    }

    reposition();
    $(window).on('resize', reposition);
}
```
