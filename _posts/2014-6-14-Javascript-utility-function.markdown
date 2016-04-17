---
layout: post
title:  "Javascript utility function"
date:   2014-6-14
categories: JavaScript
---

```js
window.util = {
    /**
     * parseTpl('Hello, <strong>$name</strong>, Today is <strong>$date</strong>', { name: 'Pym', date: new Date().toLocaleString() })
     * Hello, Pym, Today is 2014/6/14 下午6:16:18
     */
    parseTpl: function(tpl, obj) {
        var tpl;

        for (var property in obj) {
            if (obj.hasOwnProperty(property)) {
                tpl = tpl.replace(new RegExp('\\$' + property, 'ig'), obj[property]);
            }
        }

        return tpl;
    },
    /**
     * auto jump after countdown completed
     */
    countdown: function(selector) {
        var $el = $(selector);
        var num = parseInt($el.html());
        var link;

        if ($el.closest('a').length) {
            link = $el.closest('a');
        } else if ($el.parent().find('a').length) {
            link = $el.parent().find('a');
        }

        if (isNaN(num) || !link) return;

        var counter = setInterval(function() {
            num--;
            $el.html(num);

            if (num <= 1) {
                clearInterval(counter);
                link[0].click();
            }
        }, 1000);
    },
    setCookie: function(name, value, hours, path, domain) {
        var newDate = new Date();
        var hours = isNaN(hours) ? 1 : hours;
        var expires;
        var cookie;

        newDate.setTime(newDate.getTime() + (hours * 60 * 60 * 1000));
        expires = 'expires=' + newDate.toUTCString();
        cookie = name + '=' + value + ';' + expires + ';';
        if (path) cookie += 'path=' + path + ';';
        if (domain) cookie += 'domain=' + domain + ';';
        document.cookie = cookie;
    },
    getCookie: function(name) {
        var name = name + '=';
        var cookies = document.cookie.split(';');
        var cookie;

        for(var i = 0; i < cookies.length; i++) {
            cookie = cookies[i];
            while (cookie.charAt(0) == ' ') cookie = cookie.substring(1);
            if (cookie.indexOf(name) == 0) return cookie.substring(name.length, cookie.length);
        }

        return '';
    },
    backToTop: function(selector, threshold, speed) {
        var $el = $(selector);

        $(window).on('scroll', function() {
            if ($(this).scrollTop() > (threshold ? threshold: $(this).height() / 2)) {
                $el.fadeIn();
            } else {
                $el.fadeOut();
            }
        });

        $el.on('click', function(e) {
            $('html, body').animate({
                scrollTop: 0
            }, speed ? speed : 300);

            e.preventDefault();
        });
    },
    stickFooter: function(selector) {
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
    },
    affixContent: function(selector, target, offset) {
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
};
```
