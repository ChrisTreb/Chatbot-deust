$(document).ready(function() {
    console.log('JQUERY OK !');

    // MENU BURGER

    var menuOpen = false;

    // Comportement du menu

    $('#burger-menu').click(function() {
        $('.commands').slideToggle('1000');

        if (menuOpen === false) {
            menuOpen = true;
            $(this).css('transform', 'rotate(360deg)');
        } else {
            menuOpen = false;
            $(this).css('transform', 'rotate(-360deg)');
        }
    });

    // Ferme le menu quand on clique en dehors

    $('.row').click(function() {
        if (menuOpen === true) {
            $('.commands').slideToggle('1000');
            menuOpen = false;
        }
    });


});