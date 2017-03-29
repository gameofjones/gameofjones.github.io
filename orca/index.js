(function($){

    // document ready
    $(function() {
        // add responsive menu toggle
        $('.hamburger').click(function () {
            $('.menu-container').slideToggle();
        })

        // add responsive dropdown toggle
        $('.dropdown').click(function () {
            var thisContent = $(this).find('.menu-item-content');
            // hide all other content before toggle
            $('.menu-item-content').not(thisContent).slideUp();
            thisContent.slideToggle();
        });
    });

})(jQuery);