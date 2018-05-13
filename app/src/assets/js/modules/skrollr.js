// source https://www.npmjs.com/package/skrollr
import skrollr from 'skrollr';

let desktop = window.isMobile == false;

function initializeSkrollr() {
    if (desktop) {
        window.myScrollr = skrollr.init({
            constants: {
                hhh: -43 // header half height
            },
            smoothScrolling: false
        });
    } else {
        document.getElementsByTagName('html')[0].setAttribute('class', 'mobile-device');
    }
}

window.addEventListener('load', initializeSkrollr);