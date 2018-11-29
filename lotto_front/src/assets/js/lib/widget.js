'use strict';
 
const widgetNumbers = ($, element) => {
    var $element = element;
    $element.on('widget.sf.change',function(){
        var range = parseInt($(this).data('range'));
        var tmp = '';
        for(var i = 1; i <= range ; i++) {
            tmp += `<a data-num="${i}" href="#">${i}</a>`;
        }
        $element.html(tmp);
    });
    $element.delegate('a','click',function(event){
        event.preventDefault();
        $element.find('a.checked').toggleClass('checked')
        $(this).toggleClass('checked');
        $element.data('checked',$(this).data('num'));
    });
};

export { widgetNumbers }