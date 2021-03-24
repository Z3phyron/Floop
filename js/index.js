const menu = document.querySelector('.toggle');
const close = document.querySelector('.close-toggle');
const open = document.querySelector('.category');


menu.addEventListener('click', function() {
  open.classList.add('open');
});

close.addEventListener('click', () => {
  open.classList.remove('open');
});

window.addEventListener('scroll', function() {
	var header = document.queryselector('header');
	header.classList.toggle('sticky', window.scrollY > 0);
});





const jumbotron = new Swiper('.jumbotron', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });



  var topSales = new Swiper('.top-sales', {
    slidesPerView: 2,
    spaceBetween: 10,
    // init: false,
    loop:true,
    breakpoints: {
    500: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      900: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
      960: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    }
  });

  var topDeals = new Swiper('.top-deals', {
    slidesPerView: 2,
    spaceBetween: 10,
    // init: false,
    loop: true,
    breakpoints: {
      500: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      900: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
      960: {
        slidesPerView: 4,
        spaceBetween: 50,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    }
  });