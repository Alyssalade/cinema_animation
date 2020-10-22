$(document).ready(function(){
    $('#carousel').slick({
        dots: true,
        infinite: true,
        // arrows: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        // prevArrow: $('.prev'),
        // nextArrow: $('.next'),
        prevArrow: "<div>ici l'icon font awesome</div>",
        nextArrow: "<div>ici l'icon font awesome</div>",
    });

});