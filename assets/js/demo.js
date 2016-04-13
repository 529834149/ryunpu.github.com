$(function() {
    window.util = {
        parseTpl: function(tpl, obj) {
            var tpl;

            for (var property in obj) {
                if (obj.hasOwnProperty(property)) {
                    tpl = tpl.replace(new RegExp('\\$' + property, 'ig'), obj[property]);
                }
            }

            return tpl;
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
            })
            .hover(
                function() {
                    $(this).find('i').addClass('fadeInUp');
                },
                function() {
                    $(this).find('i').removeClass('fadeInUp');
                }
            );
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

    // parseTpl demo
    $('#js-demo-1').length && $('#js-demo-1').html(util.parseTpl('Hello, <strong>$name</strong>, Today is <strong>$date</strong>', {
        name: 'Pym',
        date: new Date().toLocaleString()
    }));

    // backToTop demo
    $('#backToTop').length && util.backToTop('#backToTop');

    // affixContent demo
    $('#affixContent').length && util.affixContent('#affixContent');
});