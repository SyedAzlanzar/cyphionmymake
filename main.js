const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const slides = document.querySelectorAll(".slide");
let index = 0;
display(index);
function display(index) {
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  slides[index].style.display = "flex";
}

function nextSlide() {
  index++;
  if (index > slides.length - 1) {
    index = 0;
  }
  display(index);
}
function prevSlide() {
  index--;
  if (index < 0) {
    index = slides.length - 1;
  }
  display(index);
}

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    // console.log(revealtop)
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    }
    // else{
    //   reveals[i].classList.remove('active');
    // }
  }
}

function revealheader() {
  var video = document.getElementById("myVideo");
  var header = document.getElementById("header");

  var windowheight = window.pageYOffset;
  var rtop = video.getBoundingClientRect().top + 300;
  if (rtop < windowheight) {
    document.getElementById("logo-image").src = "./images/favicon.png";
    header.classList.add("active");

  } else {
    document.getElementById("logo-image").src = "./images/logo-cyphion.png";
    header.classList.remove("active");
  }


}
window.addEventListener("scroll", revealheader);

const content = document.querySelectorAll(".content");
const btn = document.querySelectorAll(".btn");

btn.forEach((value, index) => {
  btn[index].addEventListener("click", () => {
    if (
      content[index].style.height == "" &&
      content[index].style.overflow == ""
    ) {
      content[index].style.height = "180px";
      content[index].style.overflow = "none";
      btn[index].querySelector('button').innerHTML = 'Show Less';

    }

    else {
      content[index].style.height = "";
      content[index].style.overflow = "";
      btn[index].querySelector('button').innerHTML = 'Show More'

    }
  });
});


const loader = document.getElementById('loader')
const container = document.getElementById('container')

window.addEventListener('load', () => {
  loader.style.display = 'none'
  container.style.display = "block"

})




// awards


$(document).ready(function () {

  $('.items').slick({
    dots: true,
    infinite: true,
    speed: 800,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }

    ]
  });
});

// mobile hamburger controller
const navbar= document.getElementById("nav");
const a_tag= document.querySelectorAll(".anchor");

for(var i = 0; i < a_tag.length;i++ ){
  a_tag[i].addEventListener('click' , () =>{
    navbar.classList.remove('active')
  })
}

