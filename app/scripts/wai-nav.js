$('.wai-nav-icon').on('click', function() {
  $('.wai-nav-list').slideToggle(300);
});

$(window).scroll(function () {
    var $nav = $('.wai-nav').offset().top;
    var $packOff = $('.party-includes').offset().top - 90;
    if ($nav > $packOff) {
        $('.wai-nav').addClass('nav-hide');
    } else {
        $('.wai-nav').removeClass('nav-hide');
    }
});