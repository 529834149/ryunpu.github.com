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
        }
    };

    // parseTpl demo
    $('#js-demo-1').length && $('#js-demo-1').html(utility.parseTpl('Hello, <strong>$name</strong>, Today is <strong>$date</strong>', {
        name: 'Pym',
        date: new Date().toLocaleString()
    }));
});