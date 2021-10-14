document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide', {
      type   : 'slide',
      arrows: false,
      autoplay: true,
      autoheight: true,
      autoheight: true,
      width: 1080,
      perPage: 3,
      gap: "20px",
      mediaQuery: "min",
      breakpoints: {
        768: {
          perPage: 4
        },
        1080: {
          perPage: 5
        }
      }
    });

    splide.mount();
  } );