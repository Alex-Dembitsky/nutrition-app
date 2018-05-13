(function($) {
    $(document).on('touchstart click', '.facts-tabs .tabset a[href^="#"]', function (event) {
        event.preventDefault();

        if(event.type == 'thouchstrat') return false;

        let target = this.hash,
            $target = $(target),
            targetElementID = $target.attr('id');
        $('.facts-tabs .tabset li').removeClass('active');
        $(this).parent('li').addClass('active');

        $target.show().siblings().hide();
        $('.facts-tabs').attr('data-tab-active', targetElementID);

        window.myScrollr && window.myScrollr.refresh();
    });

    $(document).on('click', '.nutriotion-facts-block .filters a[href^="#"]', function (event) {
        event.preventDefault();
        let target = this.hash,
            $target = $(target);
        $('.nutriotion-facts-block .filters li').removeClass('active');
        $(this).parent('li').addClass('active');

        $target.show()
            .siblings().hide();

        window.myScrollr && window.myScrollr.refresh();
    });

    $('.nutriotion-facts-block .tab-container .tab').hide();
    $('.nutriotion-facts-block .tab-container .tab:first-child').show();
}(jQuery));