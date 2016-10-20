$(document).ready(function() {
    $(function(){
        $('#anchor-one').click(function(){
            $('html, body').animate({
                scrollTop: $('#step1-color-container').offset().top},
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
