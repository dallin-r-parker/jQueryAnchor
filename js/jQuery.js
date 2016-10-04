$(document).ready(function() {
    $(function(){
        $('#anchor1').click(function(){
            $('html, body').animate({
                scrollTop: $('#part-two').offset().top},
                2000
            );
        return false;
        });
    });

    $(function(){
        $('#anchor2').click(function(){
            $('html, body').animate({
                    scrollTop: $('#part-three').offset().top},
                2000
            );
            return false;
        });
    });

});



