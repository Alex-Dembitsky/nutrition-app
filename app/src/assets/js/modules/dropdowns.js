(function ($) {
    $(document).on('click', '.facts-section.personal-cal .slide-opener', function (event) {
        event.preventDefault();

        $(this).toggleClass('open');
        $('.facts-section.personal-cal .slider').toggleClass('open');
    });
}(jQuery));