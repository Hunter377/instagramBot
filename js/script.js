$(document).ready(function() {

    $('#fullpage').fullpage({
        //Navigation
        menu: '#menu',
        lockAnchors: false,
        navigation: false
    });

    $('.slick-track').slick({
        dots: true,
        infinite: true
    });

    $('.slick-prev, .slick-next').addClass('fa');

});