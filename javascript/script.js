const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  //Animate Links
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });

  //Hamburger Animation
  hamburger.classList.toggle("toggle");
});

// ARTICLE CAROUSEL

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("main-article");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}
//
//
//
//
//
//
//
//
//
//
const home_page = document.querySelector(".home-page");
const about_me = document.querySelector(".about-me");
const portofolio = document.querySelector(".portofolio");

document.getElementById("home").addEventListener("click", highlight1);
document.getElementById("about-me").addEventListener("click", highlight2);
document.getElementById("portofolio").addEventListener("click", highlight3);
document.querySelector(".landing-button").addEventListener("click", highlight2);
document.querySelector(".logo").addEventListener("click", highlight1);

function highlight1() {
  home_page.style.display = "block";
  about_me.style.display = "none";
  portofolio.style.display = "none";
}

function highlight2() {
  home_page.style.display = "none";
  about_me.style.display = "flex";
  portofolio.style.display = "none";
}

function highlight3() {
  home_page.style.display = "none";
  about_me.style.display = "none";
  portofolio.style.display = "block";
}
