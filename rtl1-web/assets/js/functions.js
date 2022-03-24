// swiper slider
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  centeredSlidesBounds: true,
  slidesPerView: 4,
  breakpoints: {
  640: {
    centeredSlides: false,
    centeredSlidesBounds: false,
    slidesPerView: 4,
  },
  768: {
    centeredSlides: false,
    centeredSlidesBounds: false,
    slidesPerView: 6,
  },
  1024: {
    centeredSlides: false,
    centeredSlidesBounds: false,
    slidesPerView: 8,
  },
},
  autoplay: {
   delay: 50000,
 },
});


$('.navbar-toggler').on('click', function(e) {
  $('.site-header').toggleClass("menu-open");
  e.preventDefault();
});


// show more text on filter
$('.show-more').on('click', function(e) {
  $(this).toggleClass("change-icon");
  $('.filter-result').toggleClass("full-height");
  e.preventDefault();
});


// Filter item show/hide in mobile
// $(".area-in-country").click(function(){
//   $(this).toggleClass("change-icon");
//   $('ul.filter-item1 li:not(:first-child)').toggle('0');
// });

$(function () {
    var index = 0;
    $(".area-in-country").click(function () {
      $(this).toggleClass("change-icon");
        var effectType = $("#effectTypes").val();
        $("ul.filter-item1 li:not(:first-child").toggle(effectType, 600);
    });
});
