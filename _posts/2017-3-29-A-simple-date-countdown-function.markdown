---
layout: post
title:  "A simple date countdown function"
date:   2017-03-29
categories: JavaScript
---

```js
function countdown(options) {
    var defaults = {
        selector: '.countdown-date span',
        startTime: new Date(),
        endTime: new Date() - (-864000000),
        onCount: undefined,
        callback: function() {}
    };

    var cfgs = $.extend(defaults, options);
    var startTime = cfgs.startTime;
    var endTime = cfgs.endTime;
    var timer = setInterval(start, 1000);

    function start() {
        var timeDiff = endTime - startTime;
        var date = addZero(parseInt(timeDiff / 1000 / 60 / 60 / 24, 10));
        var hours = addZero(parseInt(timeDiff / 1000 / 60 / 60 % 24, 10));
        var minutes = addZero(parseInt(timeDiff / 1000 / 60 % 60, 10));
        var seconds = addZero(parseInt(timeDiff / 1000 % 60, 10));

        if (typeof cfgs.onCount === 'function') {
            cfgs.onCount({
                date: date,
                hours: hours,
                minutes: minutes,
                seconds: seconds
            });
        } else {
            showTimer(date + '' + hours + minutes + seconds);
        }

        startTime -= -1000;

        if (timeDiff <= 0) {
            if (timer) clearInterval(timer);
            cfgs.callback();
        }
    }

    function addZero(num) {
        return num < 10 ? '0' + num : '' + num;
    }

    function showTimer(data) {
        $(cfgs.selector).each(function(i) {
            $(this).html(data[i]);
        });
    }
}
```

```html
<div class="countdown-date">
    <span>0</span><span>0</span>天
    <span>0</span><span>0</span>时
    <span>0</span><span>0</span>分
    <span>0</span><span>0</span>秒
</div>
```
