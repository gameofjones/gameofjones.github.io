(function($){

    // document ready
    $(function() {
        // add responsive menu toggle
        $('.hamburger').click(function () {
            $('.menu-container').slideToggle();
        })

        // add responsive dropdown toggle
        $('.dropdown').click(function () {
            if($('.hamburger').is(":visible")) {
                var thisContent = $(this).find('.menu-item-content');
                // hide all other content before toggle
                $('.menu-item-content').not(thisContent).slideUp();
                thisContent.slideToggle();

                // todo: fix dup display none
                if((thisContent).is(':hidden'))
                    thisContent.css('display', '');
            }
        });


    });

})(jQuery);

function refreshVideo() { 
    document.getElementById('tap-video').src = document.getElementById('tap-video').src
}