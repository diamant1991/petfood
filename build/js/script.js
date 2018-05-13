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

$('.card__thumb').slick({
  dots: false, 
  speed:500,
  slidesToShow:4, 
  slidesToScroll:1,
  prevArrow: $('.thumb-prev'),
  nextArrow: $('.thumb-next'),
  responsive: [
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
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

if(window.matchMedia('(max-width: 767px)').matches){
  $('.filter-title ').click(function(event) {
    var sideContent = $(this).next()
    if(sideContent.is(':hidden')){
      $(this).addClass('active')
      sideContent.slideDown(250)
    }
    else{
      $(this).removeClass('active')
      sideContent.slideUp(250)
    }
  });
}

$("#slider-range").slider({
  min: 0,
  max: 1000,
  values: [0,1000],
  range: true,
  stop: function(event, ui) {
    $(".sliderValue_left").val($("#slider-range").slider("values",0));
    $(".sliderValue_right").val($("#slider-range").slider("values",1));
    },
    slide: function(event, ui){
    $(".sliderValue_left").val($("#slider-range").slider("values",0));
    $(".sliderValue_right").val($("#slider-range").slider("values",1));
    }
});
$(".sliderValue_left").change(function(){
  var value1=$(".sliderValue_left").val();
  var value2=$(".sliderValue_right").val();

    if(parseInt(value1) > parseInt(value2)){
    value1 = value2;
    $(".sliderValue_left").val(value1);
  }
  $("#slider-range").slider("values",0,value1);  
});

  
$(".sliderValue_right").change(function(){
  var value1=$(".sliderValue_left").val();
  var value2=$(".sliderValue_right").val();
  
  if (value2 > 1000) { value2 = 1000; $(".sliderValue_right").val(1000)}

  if(parseInt(value1) > parseInt(value2)){
    value2 = value1;
    $(".sliderValue_right").val(value2);
  }
  $("#slider-range").slider("values",1,value2);
});

var clock;
    
$(document).ready(function() {
  var clock;

  clock = $('.clock').FlipClock({
        clockFace: 'DailyCounter',
        autoStart: false
    });
        
    clock.setTime(110880);
    clock.setCountdown(true);
    clock.start();

});

$('.text-scrollbar').scrollbar();