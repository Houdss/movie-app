$(document).ready(function(){
    $("#movie-carousel").owlCarousel({
        items: 1, 
        loop: true, 
        autoplay: true, 
        autoplayTimeout: 5000, 
        nav: true, 
        dots: true, 
        navText: ["<", ">"], 
        center: true 
    });
});

