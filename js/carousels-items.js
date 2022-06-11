/** =====================================
     SETUP DOS CARROSÉIS E RESPONSIVIDADE 
    =====================================
*/

var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:-240,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        390: {
            items:1,
            margin: -260
        },
        410: {
            items:1,
            margin: -280
        },
        430: {
            items:1,
            margin: -300
        },
        450: {
            items:1,
            margin: -320
        },
        470: {
            items:1,
            margin: -340
        },
        490: {
            items:1,
            margin: -360
        },
        510: {
            items:1,
            margin: -380
        },
        530: {
            items:1,
            margin: -400
        },
        550: {
            items:1,
            margin: -420
        },
        570: {
            items:1,
            margin: -440
        },
        600:{
            items:1,
            margin: -480
        },
        620:{
            items:1,
            margin: -500
        },
        650:{
            items:1,
            margin: -520
        },
        670:{
            items:1,
            margin: -540
        },
        690:{
            items:1,
            margin: -560
        },
        710:{
            items:1,
            margin: -580
        },
        730:{
            items:1,
            margin: -600
        },
        750:{
            items:1,
            margin: -620
        },
        770:{
            items:1,
            margin: -650
        },
        790:{
            items:1,
            margin: -600
        },
        810:{
            items:1,
            margin: -570
        },
        830:{
            items:1,
            margin: -590
        },
        850:{
            items:1,
            margin: -610
        },
        870:{
            items:1,
            margin: -620
        },
        890:{
            items:1,
            margin: -640
        },
        910:{
            items:1,
            margin: -660
        },
        930:{
            items:1,
            margin: -680
        },
        950:{
            items:1,
            margin: -700
        },
        970:{
            items:1,
            margin: -720
        },
        1000:{
            items:1,
            margin: -740,
        },
        1020:{
            items:1,
            margin: -710,
        },
        1040:{
            items:1,
            margin: -720,
        },
        1060:{
            items:1,
            margin: -740,
        },
        1080:{
            items:1,
            margin: -750,
        },
        1100:{
            items:1,
            margin: -760,
        },
        1120:{
            items:1,
            margin: -770,
        },
        1140:{
            items:1,
            margin: -780,
        },
        1160:{
            items:1,
            margin: -790,
        },
        1180:{
            items:1,
            margin: -800,
        },
        1200:{
            items:1,
            margin: -810,
        },
        1220:{
            items:1,
            margin: -820,
        },
        1240:{
            items:1,
            margin: -830,
        },
        1260:{
            items:1,
            margin: -840,
        },
        1280:{
            items:1,
            margin: -850,
        }
    },

});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})