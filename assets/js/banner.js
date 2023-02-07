let slides = document.querySelector('.slides');
let indicator = document.querySelectorAll('.indicator');
let slideIndex = 0;

setInterval(function() {
  slideIndex = (slideIndex + 1) % 4;
  slides.style.transform = 'translateX(-' + (25 * slideIndex) + '%)';
  
  for (let i = 0; i < indicator.length; i++) {
    indicator[i].classList.remove('active');
  }
  
  indicator[slideIndex].classList.add('active');
  updateIndicator()
}, 5000);

function updateIndicator() {
let indicator = document.querySelectorAll('.indicator');
for (let i = 0; i < indicator.length; i++) {
indicator[i].style.color = i === slideIndex ? 'aqua' : 'lightgray';
}
}
updateIndicator()

document.querySelector('#next').addEventListener('click', function() {
  slideIndex = (slideIndex + 1) % 4;
  slides.style.transform = 'translateX(-' + (25 * slideIndex) + '%)';
  
  for (let i = 0; i < indicator.length; i++) {
    indicator[i].classList.remove('active');
  }
  
  indicator[slideIndex].classList.add('active');
});

document.querySelector('#back').addEventListener('click', function() {
  slideIndex = (slideIndex - 1 + 4) % 4;
  slides.style.transform = 'translateX(-' + (25 * slideIndex) + '%)';
  
  for (let i = 0; i < indicator.length; i++) {
    indicator[i].classList.remove('active');
  }
  
  indicator[slideIndex].classList.add('active');
});  
