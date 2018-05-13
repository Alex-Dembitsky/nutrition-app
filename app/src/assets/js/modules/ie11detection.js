(function(){

    let ie11 = !!navigator.userAgent.match(/Trident\/7\./);

    if(ie11) {
        document.documentElement.classList.add('ie11');
        console.log('ie11');
    }

}());