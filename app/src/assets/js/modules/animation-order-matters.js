(function ($) {
    let desktop = window.isMobile == false;

    if (desktop) {
        $(document).ready(function () {
            let fnExecutionFlag = true;
            let containerElement = $('#order-matters .order-list');
            let positionContainerElems = containerElement.offset().top - 500; // 500 - about half of desktop screen

            containerElement.css({position: 'relative', height: '400px'});

            $(document).on('scroll', onScroll);

            function onScroll() {
                let scrollPos = $(document).scrollTop();

                if ($('#Ingredients').offset().top - 86 <= scrollPos && $('#Ingredients').offset().top + $('#Ingredients').height() > scrollPos - 86) { // "- 86" height of navigation in header
                    if (positionContainerElems <= scrollPos && positionContainerElems) {
                        if (fnExecutionFlag == true) {
                            containerElement.addClass('animation-activated');
                            catchPositionElements();
                            addAnimationToElements();
                            fnExecutionFlag = false;
                        }
                    }
                }
            }

            function catchPositionElements() {

                $('#order-matters .order-list li').each(function () {

                    let positionTop = $(this).offset().top - $('#order-matters .order-list').offset().top;
                    let positionLeft = $(this).offset().left - $('#order-matters .order-list').offset().left;

                    $(this).css({top: positionTop - 20, left: positionLeft});

                });
            }

            function addAnimationToElements() {

                $('#order-matters .order-list li').css({position: 'absolute'});

                $('#order-matters .order-list li:nth-child(1)').animate({
                    fontSize: '80px',
                    top: '10px',
                    left: '50%'
                }, 2000);

                $('#order-matters .order-list li:nth-child(2)').animate({
                    fontSize: '60px',
                    top: '100px',
                    left: '50%'
                }, 2000);

                $('#order-matters .order-list li:nth-child(3)').animate({
                    fontSize: '45px',
                    top: '170px',
                    left: '50%'
                }, 2000);

                $('#order-matters .order-list li:nth-child(4)').animate({
                    fontSize: '30px',
                    top: '230px',
                    left: '50%'
                }, 2000);

                $('#order-matters .order-list li:nth-child(5)').animate({
                    fontSize: '23px',
                    top: '275px',
                    left: '50%'
                }, 2000);

                $('#order-matters .order-list li:nth-child(6)').animate({
                    fontSize: '19px',
                    top: '310px',
                    left: '50%'
                }, 2000);

                $('#order-matters .order-list li:nth-child(7)').animate({
                    fontSize: '17px',
                    top: '345px',
                    left: '50%'
                }, 2000);
            }
        });
    }
}(jQuery));