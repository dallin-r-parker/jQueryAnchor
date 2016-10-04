$(document).ready(function () {
    $(function (){
        $('#anchor1').click(function () {
            $('html, body').animate({
                scrollTop: $('#part-two').offset().top},
                2000
            );
        return false;
        });
    });

});

angular.module('myApp').controller('//ConrollerName', function($scope, //inject Service) {


});
