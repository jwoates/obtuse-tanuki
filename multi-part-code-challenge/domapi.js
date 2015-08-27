
$(document).ready(function(){
    $('p').replaceWith(function(){
        return $('<blockquote>', {html: $(this).html()})
    })
});