(function($) {
    //----- OPEN
    $(document).on('click', '[data-popup-open]', function(event)  {
        event.preventDefault();

        let targeted_popup_class = $(this).attr('data-popup-open');
        let popup = $('[data-popup="' + targeted_popup_class + '"]');
        popup.fadeIn(200);

        $('body').addClass('opened-popup');
    });

    //----- CLOSE
    $(document).on('click', '[data-popup-close]', function(event)  {
        event.preventDefault();

        let targeted_popup_class = $(this).attr('data-popup-close');
        let popup = $('[data-popup="' + targeted_popup_class + '"]');
        popup.fadeOut(200);

        $('body').removeClass('opened-popup');
    });

    $(document).on('click', '[data-popup]', function (event) {
        if (!$('[data-popup] .popup-inner').is(event.target) && $('[data-popup] .popup-inner').has(event.target).length === 0) {
            $('[data-popup]').fadeOut(200);
            $('body').removeClass('opened-popup');
        }
    });
}(jQuery));
