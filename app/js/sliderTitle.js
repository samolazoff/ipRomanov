const blockTitle=document.querySelector('.block-title');
const sliderTitle=blockTitle.querySelector('.slider');
const slideTitle=blockTitle.querySelectorAll('.slide');
let i=-1;
const showSlider=setInterval(()=>{
  i!=slideTitle.length-1?i++:i=0;
  slideTitle.forEach(slide=>{
    slide.hidden = true;
  });
  slideTitle[i].hidden = false;
}, 2000);
