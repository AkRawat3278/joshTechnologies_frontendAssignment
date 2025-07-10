// const testimonials = document.querySelectorAll('.testimonial');
// const dots = document.querySelectorAll('.dot');
// let currentIndex = 0;
// let intervalId;

// function showSlide(index) {
//   testimonials.forEach((t, i) => {
//     t.classList.toggle('active', i === index);
//     dots[i].classList.toggle('active', i === index);
//   });
//   currentIndex = index;
// }

// function nextSlide() {
//   currentIndex = (currentIndex + 1) % testimonials.length;
//   showSlide(currentIndex);
// }

// dots.forEach(dot => {
//   dot.addEventListener('click', () => {
//     const index = parseInt(dot.getAttribute('data-index'));
//     showSlide(index);
//     resetInterval();
//   });
// });

// function resetInterval() {
//   clearInterval(intervalId);
//   intervalId = setInterval(nextSlide, 5000);
// }

// // Start auto sliding
// intervalId = setInterval(nextSlide, 5000);


const testimonials = document.querySelectorAll('.testimonial');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
let intervalId;

function showSlide(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.classList.remove('active');
    dots[i].classList.remove('active');
  });
  testimonials[index].classList.add('active');
  dots[index].classList.add('active');
  currentIndex = index;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % testimonials.length;
  showSlide(currentIndex);
}

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    const index = parseInt(dot.getAttribute('data-index'));
    showSlide(index);
    resetInterval();
  });
});

function resetInterval() {
  clearInterval(intervalId);
  intervalId = setInterval(nextSlide, 5000);
}

intervalId = setInterval(nextSlide, 5000);