$('.slider__wrapper').slick({
  dots: false,
  arrows: false,
  infinite: true,

  fade: true,
  asNavFor: ".slider__wrapper_small",
  responsive:[
    {
      breakpoint: 550,
      settings: {
        dots: true,
        arrows: true
      }

    }
  ]
});

$('.slider__wrapper_small').slick({
  dots: true,
  infinite: true,
  adaptiveHeight:true,
  centreMode: true,
  slidesToShow:3,
  asNavFor: ".slider__wrapper",
  responsive:[
    {
      breakpoint: 650,
      settings: {
        slidesToShow:2
      }

    }
  ]

});
