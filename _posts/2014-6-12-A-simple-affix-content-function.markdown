---
layout: post
title:  "A simple affix content function"
date:   2014-6-12
categories: JavaScript
---

<div id="affixContent" class="js-demo">affixed content</div>

```js
function affixContent(selector, target, offset) {
    var $el = $(selector);
    var position = $el.css('position');
    var top = $el.css('top');
    var $target = $(target);
    var hasTarget = $target.length;
    var affixed = false;
    var threshold;

    function getThreshold() {
        var offsetTop = hasTarget ? $target.offset().top : $el.offset().top
        if (!isNaN(offset)) offsetTop += offset;
        return offsetTop;
    }

    function reposition() {
        var scrollTop = $(window).scrollTop();
        var finalThreshold = hasTarget ? getThreshold() : threshold;
        
        if (!affixed && scrollTop > finalThreshold) {
            $el.addClass('fixed').css({
                position: 'fixed',
                top: 0
            });

            affixed = true;
        } else if (affixed && scrollTop <= finalThreshold) {
            $el.removeClass('fixed').css({
                position: position,
                top: top
            });

            affixed = false;
        }
    }

    threshold = getThreshold();
    reposition();
    $(window).on('scroll', reposition);
    $(window).on('resize', function() {
        if (!hasTarget) {
            $el.removeClass('fixed').css({ position: position, top: top});
            threshold = getThreshold();
            affixed = false;
            reposition();
        }
    });
}
```
