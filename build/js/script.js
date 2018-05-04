$('.slider').slick({
  dots: false,
  prevArrow: $('.slider-prev--main'),
  nextArrow: $('.slider-next--main')
});

$('.brands__carousel').slick({
  dots: false,
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow: $('.slider-prev--brands'),
  nextArrow: $('.slider-next--brands'),
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true
      }
    },
  ]
});

$('.product-carousel').slick({
  dots: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: $('.slider-prev--product'),
  nextArrow: $('.slider-next--product'),
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true
      }
    }
  ]
});

$('.hamburger-box').click(function(event) {
  var menu = $('#mobile-menu')
  if(menu.is(':hidden')){
    $(this).addClass('is-active')
    menu.show()
  }
  else{
    $(this).removeClass('is-active')
    menu.hide()
  }
});