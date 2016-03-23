$(function() {
    // optimize search form
    $(document).on('keyup', function(e) {
        e.keyCode === 13 && $('#masthead .dosearch').trigger('click');
    });
});