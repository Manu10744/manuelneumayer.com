document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide', {
      type: 'slide',
      arrows: false,
      rewind: true,
      autoplay: true,
      perPage: 2,
      mediaQuery: "min",
      lazyLoad: true,
      classes: {
        prev  : 'splide__arrow--prev prev-slide-btn',
		    next  : 'splide__arrow--next next-slide-btn',
      },
      breakpoints: {
        480: {
          width: 400,
          perPage: 3
        },
        768: {
          width: 600,
          perPage: 4
        },
        1080: {
          width: 700,
          perPage: 5,
          arrows: true,
        },
        1200: {
          width: 900,
          perPage: 5,
          arrows: true,
        }
      }
    });

    splide.mount();
  } );