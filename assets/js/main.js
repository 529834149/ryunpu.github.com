$(function() {
    // optimize search form
    $(document).on('keyup', function(e) {
        if (e.keyCode === 13) {
            $('#masthead .dosearch').trigger('click');
            $('input.search-field').val('');
        }
    });
});