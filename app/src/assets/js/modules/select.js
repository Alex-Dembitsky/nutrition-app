import jcf from 'jcf';
import 'jcf/js/jcf.select';
import 'jcf/js/jcf.scrollable';

(function($) {
    jcf.setOptions('Select', {
        wrapNative: false,
        maxVisibleItems: 4,
        useCustomScroll: true
    });
    jcf.replace('select');

    $(document).on('DOMNodeInserted', function (event) {
        if($( event.target ).is('.jcf-select-drop.jcf-select-jcf-hidden.jcf-unselectable')) {
            if($( event.target ).find('.jcf-option-default-value').length == 1) {
                let elemPosition = $( event.target ).find('.jcf-option-default-value').position().top;
                $('.jcf-select-drop .jcf-list-content').animate({scrollTop:elemPosition}, 10);
            }
        }
    });
}(jQuery));