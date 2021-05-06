'use strict';

let slides_arr = [
  {
    id: 1,
    image:
      "img/slider1.jpg"
  },
  {
    id: 2,
    image:
      "img/slider2.jpg"
  },
  {
    id: 3,
    image:
      "img/slider3.jpg"
  },
];

const prevslide = document.querySelector('.slider_prev');
const nextslide = document.querySelector('.slider_next');
const sliderContainer = document.querySelector('.slider_images');
const sliderDotsContainer = document.querySelector('.slider_dots');


const createSliderItemString = ({id, image}) =>
  `<div class="slider_item">
   <img src="${image}" alt="${id}">
   </div>`;

const createDotsItemString = () =>
  `<a class="slider_dot">
  <svg width="15" height="15" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
  <rect x="0.728516" y="10.6066" width="15" height="15"
  transform="rotate(-45 0.728516 10.6066)"/>
  </svg>
  </a>`;

const sliderRender = () => {
  sliderContainer.innerHTML = '';
  sliderDotsContainer.innerHTML = '';
  const sliderElementsString = slides_arr.map((image) => createSliderItemString(image)).join('');
  const dotsElementsString = slides_arr.map(() => createDotsItemString()).join('');
  sliderContainer.insertAdjacentHTML('beforeend', sliderElementsString);
  sliderDotsContainer.insertAdjacentHTML('beforeend', dotsElementsString);

  let slides = document.getElementsByClassName("slider_item");
  let dots = document.getElementsByClassName("slider_dot");

  let slideIndex = 1;
  showSlides(slideIndex);
  nextslide.classList.add('active');
  prevslide.classList.remove('active');

  prevslide.addEventListener('click', () => {
    previousSlideHandler();
  });

  nextslide.addEventListener('click', () => {
    nextSlideHandler();
  });

  function nextSlideHandler() {
    showSlides(slideIndex++);
  }

  function previousSlideHandler() {
    showSlides(slideIndex--);
  }

  function showSlides(n) {
    console.log(n);
    if (n > slides.length) {
      slideIndex = slides.length;
      nextslide.classList.remove('active');
    } else if (n < 1) {
      slideIndex = 1
    } else if (n < slides.length) {
      prevslide.classList.add('active');
      for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove('active');
      }
      for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
      }
      slides[slideIndex-1].classList.add('active');
      dots[slideIndex-1].classList.add('active');
    }
  }
}

const init = () => {

  document.addEventListener('DOMContentLoaded', () => {
    sliderRender();
  });

};

init();