$(document).ready(function () {
    $('.check').click(function () {
        $('.formsection').show(3000);
        $('.check').removeClass('clicked');
        $(this).addClass('clicked');

    });

});
