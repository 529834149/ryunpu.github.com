$(function() {
    window.utility = {
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
        }
    };

    // parseTpl demo
    $('#js-demo-1').length && $('#js-demo-1').html(utility.parseTpl('Hello, <strong>$name</strong>, Today is <strong>$date</strong>', {
        name: 'Pym',
        date: new Date().toLocaleString()
    }));

    // backToTop demo
    $('#backToTop').length && utility.backToTop('#backToTop');
});