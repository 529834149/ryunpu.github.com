---
layout: post
title:  "Use infinite scrolling"
date:   2014-7-22
categories: JavaScript
---

###### Use [Infinite Scroll plugin](http://www.infinite-scroll.com/)

```html
<ul>
    <li>
        <blockquote>
            <p>Analyzing humor is like dissecting a frog. Few people are interested and the frog dies of it.</p>
            <footer>E.B. White</footer>
        </blockquote>
    </li>
    ...
</ul>

<div class="navigation hide">
    <a href="http://mysafeinfo.com/api/data?list=humor_quotes&format=json&random=true&rows=3&page=2">next</a>
</div>
```

```js
var list = $('ul');
var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';

list.infinitescroll({
    bufferPx: $('#footer').height(),
    dataType: 'json',
    appendCallback: false,
    loading: {
        finishedMsg: '没有更多了',
        msgText: '<i class="glyphicon glyphicon-refresh animated infinite rotate"></i><br>加载中',
    },
    errorCallback: function() {
        console.log('error');
    }
}, function(data, opts) {
    if (data.length) {
        $.each(data, function(i, val) {
            var tpl =  '<li>';
                tpl +=     '<blockquote>';
                tpl +=         '<p>' + val.qt + '</p>';
                tpl +=         '<footer>' + val.nm + '</footer>';
                tpl +=     '</blockquote>';
                tpl += '</li>';

            $(tpl).hide().appendTo(list).slideDown();
        });
    }

    if (opts.state.currPage > 5) {
        opts.state.isDone = true;
    }
});

$(window).on(resizeEvt, function() {
    list.infinitescroll('update', {
        bufferPx: $('#footer').height()
    });
});
```

###### Use a simple function

```js
function infiniteScroll(callback, offset) {
    var state = {};
    var onScroll = function() {
        var winHeight = $(window).height();
        var offset = offset || winHeight * 0.9;
        var reachedBottom = $(window).scrollTop() + winHeight >= $(document).height() - offset;

        if (typeof callback === 'function' && !state.loading && reachedBottom) {
            callback(state);
        }

        if (state.finished) {
            $(window).off('scroll.infinite');
        }
    };

    $(window).on('scroll.infinite', onScroll);
}
```

```html
<ul>
    <li>
        <blockquote>
            <p>Analyzing humor is like dissecting a frog. Few people are interested and the frog dies of it.</p>
            <footer>E.B. White</footer>
        </blockquote>
    </li>
    ...
</ul>

<script type="text/javascript">
    var list = $('ul');
    var loading = $('<div class="infscr-loading text-center"><i class="glyphicon glyphicon-refresh animated infinite rotate"></i><br>加载中</div>');

    infiniteScroll(function(state) {
        state.loading = true;
        loading.appendTo(list).show();

        $.getJSON('http://mysafeinfo.com/api/data?list=humor_quotes&format=json&random=true&rows=3', function(data) {
            if (data.length) {
                $.each(data, function(i, val) {
                    var tpl =  '<li>';
                        tpl +=     '<blockquote>';
                        tpl +=         '<p>' + val.qt + '</p>';
                        tpl +=         '<footer>' + val.nm + '</footer>';
                        tpl +=     '</blockquote>';
                        tpl += '</li>';

                    $(tpl).hide().appendTo(list).slideDown();
                });
            }

            loading.hide();
            state.loading = false;

            if (list.find('li').length > 10) {
                state.finished = true;
            }
        });
    }, $('#footer').height());
</script>
```
