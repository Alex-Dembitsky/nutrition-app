(function () {
    let container = document.querySelector('.order-list');
    let elem_1 = document.querySelector('#order-matters .order-list li:nth-child(1)');
    let elem_2 = document.querySelector('#order-matters .order-list li:nth-child(2)');
    let elem_3 = document.querySelector('#order-matters .order-list li:nth-child(3)');
    let elem_4 = document.querySelector('#order-matters .order-list li:nth-child(4)');
    let elem_5 = document.querySelector('#order-matters .order-list li:nth-child(5)');
    let elem_6 = document.querySelector('#order-matters .order-list li:nth-child(6)');
    let elem_7 = document.querySelector('#order-matters .order-list li:nth-child(7)');


    function moveLong() {
        let positionLeft = elem_3.offsetLeft;
        let positionTop = 0;
        let id = setInterval(frame, 15);
        // container.style.position = 'relative';

        function frame() {
            if (positionLeft >= 150) {
                clearInterval(id);
            } else {
                positionTop++;
                // positionLeft++;
                elem_1.style.top = positionTop + 'px';
                elem_1.style.left = 50 + '%';
                elem_1.style.position = 'absolute';
                // elem_1.style.display = 'block';
            }
        }
    }
    // moveLong();

}());

(function ($) {
    setTimeout(function () {

        $('#order-matters .order-list').css({position: 'relative'});
        $('#order-matters .order-list li:nth-child(1)')
            .css({position: 'absolute', transform: 'translate(-50%,0)'}).animate({
            fontSize: '80px',
            top: '10px',
            left: '50%'
        }, 2200);

        $('#order-matters .order-list li:nth-child(2)')
            .css({position: 'absolute', transform: 'translate(-50%,0)'}).animate({
            fontSize: '60px',
            top: '100px',
            left: '50%'
        }, 2500);

        $('#order-matters .order-list li:nth-child(3)')
            .css({position: 'absolute', transform: 'translate(-50%,0)'}).animate({
            fontSize: '45px',
            top: '170px',
            left: '50%'
        }, 2600);

        $('#order-matters .order-list li:nth-child(4)')
            .css({position: 'absolute', transform: 'translate(-50%,0)'}).animate({
            fontSize: '30px',
            top: '230px',
            left: '50%'
        }, 2500);

        $('#order-matters .order-list li:nth-child(5)')
            .css({position: 'absolute', transform: 'translate(-50%,0)'}).animate({
            fontSize: '23px',
            top: '275px',
            left: '50%'
        }, 2400);

        $('#order-matters .order-list li:nth-child(6)')
            .css({position: 'absolute', transform: 'translate(-50%,0)'}).animate({
            fontSize: '19px',
            top: '310px',
            left: '50%'
        }, 2800);

        $('#order-matters .order-list li:nth-child(7)')
            .css({position: 'absolute', transform: 'translate(-50%,0)'}).animate({
            fontSize: '17px',
            top: '345px',
            left: '50%'
        }, 3000);

    }, 2000)
}(jQuery));