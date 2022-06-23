/** =====================================
     SETUP DOS CARROSÉIS E RESPONSIVIDADE 
    =====================================
*/

var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    margin: -150,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        390: {
            items:1,
            margin: -180
        },
        430: {
            items:1,
            margin: -200
        },
        470: {
            items:1,
            margin: -250
        },
        510: {
            items:1,
            margin: -280
        },
        650:{
            items:1,
            margin: -350
        },
        710:{
            items:1,
            margin: -380
        },
        830:{
            items:1,
            margin: -440
        },
        910:{
            items:1,
            margin: -480
        },
        1000:{
            items:1,
            margin: -525
        },
        1080:{
            items:1,
            margin: -565
        },
        1120:{
            items:1,
            margin: -585,
        },
        1160:{
            items:1,
            margin: -610
        },
        1200:{
            items:1,
            margin: -630
        },
        1240:{
            items:1,
            margin: -675
        }
    }

});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})
