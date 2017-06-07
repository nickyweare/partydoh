$('.cart').click(function () {
    $('.party-includes').animate({right: '0px'}, 200);
    $('.cart').hide();
});

$('.exit').click(function () {
    $('.party-includes').animate({right: '-300px'}, 200)
    $('.cart').show();
});