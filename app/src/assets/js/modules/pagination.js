(function ($) {
    let desktop = window.isMobile == false;

    if (desktop) {
        $(document).ready(function () {
            $(document).on('scroll', onScroll);

            $(document).on('click', '.section-pagination a[href^="#"]', function (event) {
                event.preventDefault();

                $('.section-pagination li a').each(function () {
                    $(this).closest('li').removeClass('active');
                });
                $(this).closest('li').addClass('active');

                let target = this.hash;
                let $target = $(target);

                $('html, body').stop().animate({
                    'scrollTop': $target.offset().top
                }, 500, 'swing', function () {
                    window.location.hash = target;
                    $(document).on('scroll', onScroll);
                });
            });
        });

        function onScroll(event) {
            let scrollPos = $(document).scrollTop();

            $('.section-pagination li a').each(function () {
                let currLink = $(this);
                let refElement = $(currLink.attr('href'));

                if (refElement.offset().top <= scrollPos && refElement.offset().top ) {
                    $('.section-pagination li').removeClass('active');
                    currLink.closest('li').addClass('active');
                } else {
                    currLink.closest('li').removeClass('active');
                }
            });
        }
    }

}(jQuery));