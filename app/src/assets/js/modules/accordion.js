(function ($) {

    $(document).on('click', '.accordion > li > .opener', function (event) {
        event.preventDefault();

        $('.accordion li').removeClass('active');

        if ($(this).siblings('.slide').is(':hidden')) {
            $('.accordion li .slide').slideUp(300);
            $(this).closest('li').addClass('active');
        }
        $(this).siblings('.slide').slideToggle(300);

        window.myScrollr && window.myScrollr.refresh();

    });

}(jQuery));

