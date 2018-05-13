(function(){

    let parallaxBackgroundElements = document.querySelectorAll('.parallaxBackground');
    let desktop = window.isMobile == false;

    function mouseMoveParallax(event) {
        let positionMouseVertical = event.clientY;
        let positionMouseHorisontal = event.clientX;

        for (let i = 0; i < parallaxBackgroundElements.length; i++){
            let item = parallaxBackgroundElements[i];
            item.style.top = positionMouseVertical / 35 + 'px';
            item.style.left = positionMouseHorisontal / 35 + 'px';
            item.style.right = - positionMouseHorisontal / 35 + 'px';
            item.style.bottom = - positionMouseVertical / 35 + 'px';
        }

    }

    if(desktop){
        document.addEventListener('mousemove', mouseMoveParallax);
    }

}());
