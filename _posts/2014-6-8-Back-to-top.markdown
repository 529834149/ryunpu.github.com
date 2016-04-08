---
layout: post
title:  "Back to top"
date:   2014-6-8
categories: JavaScript
---

```js
function backToTop(selector, threshold, speed) {
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > (threshold ? threshold: $(this).height() / 2)) {
            $(selector).fadeIn();
        } else {
            $(selector).fadeOut();
        }
    });

    $(selector).on('click', function(e) {
        $('html, body').animate({
            scrollTop: 0
        }, speed ? speed : 300);

        e.preventDefault();
    });
}
```

<div id="backToTop"><i class="glyphicon glyphicon-arrow-up"></i></div>
