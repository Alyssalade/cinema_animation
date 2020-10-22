$(document).ready(function() {
    $('#carousel').slick({
        dots: true,
        infinite: true,
        // arrows: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        // prevArrow: $('.prev'),
        // nextArrow: $('.next'),
        prevArrow: "<i class='fas fa-angle-left'></i>",
        nextArrow: "<i class='fas fa-angle-right'></i>",
    });

});