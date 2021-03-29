"use strict";

const slides = document.querySelectorAll(".slide");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const rBtn = document.getElementById("rs");

// add translation to slides
const goToSlide = function (slide) {
  slides.forEach((s, i) => {
    s.style = `transform:translateX(${(i - slide) * 100}%)`;
  });
};
goToSlide(0);

const numSlides = slides.length;
let curSlide = 0;

const nextSlide = function (e) {
  e.preventDefault();
  if (curSlide < numSlides - 1) curSlide++;
  else curSlide = 0;

  goToSlide(curSlide);
};
const prevSlide = function (e) {
  e.preventDefault();
  if (curSlide > 0) curSlide--;
  else curSlide = numSlides - 1;

  goToSlide(curSlide);
};
const randomSlide = function () {
  const rn = Math.floor(Math.random() * numSlides);
  // console.log(rn);
  curSlide = rn;
  goToSlide(rn);
};

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);
rBtn.addEventListener("click", randomSlide);
