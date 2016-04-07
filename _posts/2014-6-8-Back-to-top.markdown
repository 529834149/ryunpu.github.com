---
layout: post
title:  "Back to top"
date:   2014-6-8
categories: JavaScript
---

###### js function:

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
    })
    .hover(
        function() {
            $(this).find('i').addClass('fadeInUp');
        },
        function() {
            $(this).find('i').removeClass('fadeInUp');
        }
    );
}
```

###### css:

```css
#backToTop { display: none; width: 36px; height: 36px; text-align: center; line-height: 36px; border-radius: 2px; color: #fff; background: #1A1F25; cursor: pointer;}

@media (max-width: 767px) {
    #backToTop { width: 30px; height: 30px; line-height: 30px;}
}
```

###### extra css:

```css
.animated { animation-duration: .5s; animation-fill-mode: both;}
.animated.infinite { animation-iteration-count: infinite;}
.fadeInUp { animation-name: fadeInUp;}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translate3d(0, 100%, 0);
    }
    to {
        opacity: 1;
        transform: none;
    }
}
```

<div id="backToTop"><i class="glyphicon glyphicon-arrow-up animated"></i></div>
