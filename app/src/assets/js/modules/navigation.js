(function ($) {
    let desktop = window.isMobile == false;

    if (desktop) {
        $(document).on('click', 'header li a[href^="#"]', function () {
            $(document).on('scroll', onScroll);

            $('header li a[href^="#"]').each(function () {
                $(this).closest('li').removeClass('active');
            });
            $(this).closest('li').addClass('active');

        });

        $(document).on('scroll', onScroll);

        function onScroll () {
            let scrollPos = $(document).scrollTop();

            $('header li a').each(function () {
                let currLink = $(this);
                let refElement = $(currLink.attr('href'));

                if (refElement.offset().top - 86 <= scrollPos && refElement.offset().top + refElement.height() > scrollPos - 86) { // "- 86" height of navigation in header
                    $('header li').removeClass('active');
                    currLink.closest('li').addClass('active');
                } else {
                    currLink.closest('li').removeClass('active');
                }
            });
        }
    }

}(jQuery));