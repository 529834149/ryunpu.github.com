---
layout: post
title:  "A simple affix content function"
date:   2014-6-12
categories: JavaScript
---

<div id="affixContent" class="js-demo">affixed content</div>

```js
function affixContent(selector, threshold) {
    var $el = $(selector);
    var position = $el.css('position');
    var top = $el.css('top');
    var offset = threshold ? threshold : $el.offset().top;
    var affixed = false;
    
    function reposition() {
        var scrollTop = $(window).scrollTop();
        
        if (!affixed && scrollTop > offset) {
            $el.addClass('fixed').css({
                position: 'fixed',
                top: 0
            });

            affixed = true;
        } else if (affixed && scrollTop <= offset) {
            $el.removeClass('fixed').css({
                position: position,
                top: top
            });

            affixed = false;
        }
    }

    reposition();
    $(window).on('scroll', reposition);
    $(window).on('resize', function() { !affixed && (offset = threshold ? threshold : $el.offset().top); });
}
```
