
var searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').addEventListener("click",function (){
    searchForm.classList.toggle('active');
});

var loginForm = document.querySelector(".login-form-container");
document.querySelector("#login-btn").addEventListener("click",function(){
    loginForm.classList.toggle("active");
});

document.querySelector("#close-login-btn").addEventListener("click",function(){
    loginForm.classList.remove("active");
});

window.onscroll=() => {
    searchForm.classList.remove('active');
    if(window.scrollY > 80)
    {
        document.querySelector(".header .header-2").classList.add('active');
    }else{
        document.querySelector(".header .header-2").classList.remove('active');
    }
}

window.onload=() => {
    if(window.scrollY > 80)
    {
        document.querySelector(".header .header-2").classList.add('active');
    }else{
        document.querySelector(".header .header-2").classList.remove('active');
    }
}



var swiper = new Swiper(".book-slider", {
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
    
      },
    },
  });

  var swiper = new Swiper(".review-slider", {
    loop: true,

    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 4,
    
      },
    },
  });

  