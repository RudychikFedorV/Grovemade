$(".owl-carousel").owlCarousel({
  lazyLoad: true,
  loop: true,
  margin: 25,
  dots: true,

  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2.7,
    },
    992: {
      items: 3.7,
    },
    1405: {
      items: 4.2,
    },
  },
});
