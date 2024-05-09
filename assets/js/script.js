// fixed menu
$(window).scroll(function(){
  if($(window).scrollTop() > 300){
    $(".menu").addClass("fixed_menu")
  }else{
    $(".menu").removeClass("fixed_menu")
  }
})

// back_2_top
$(".back_to_top").click(function(){
  $("html,body").animate({
    scrollTop:0
  },1000)
})

$(window).scroll(function(){
  if($(window).scrollTop() > 300){
    $(".back_to_top").fadeIn()
  } else {
    $(".back_to_top").fadeOut()
  }
})

// banner slider
$('.banner_slider').slick({
  dots: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow:'<i class="fa-solid fa-angle-left prev"></i>' ,
  nextArrow:'<i class="fa-solid fa-angle-right next"></i>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 2,
        arrows: false,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

$('.counter').counterUp({
  delay: 10,
  time: 1000
});

$(document).ready(function(){
  var mixer = mixitup('.flag');
});

