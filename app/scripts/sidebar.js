$(window).scroll(function () {
    var $packOff = $('.party-includes').offset().top;
    var $windowTop = $(window).scrollTop();
    if ($windowTop > $packOff) {
        $('.party-includes').addClass('party-includes-hide');
        $('.party-includes-sticky').addClass('party-includes-sticky-show');
    } else {
        $('.party-includes').removeClass('party-includes-hide');
        $('.party-includes-sticky').removeClass('party-includes-sticky-show');
    }
});
