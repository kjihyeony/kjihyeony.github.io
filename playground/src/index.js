import barba from '@barba/core';
import barbaCss from '@barba/css';
import gsap from 'gsap';
import { Showcase } from "./js/Showcase"
import { Slides } from './js/Slides';
import './css/style.scss'



import * as THREE from "three";


import bg1 from './images/img-effect-1.jpg';
import bg2 from './images/img-effect-2.jpg';
import bg3 from './images/img-effect-3.jpg';


//tell Barba to use the css plugin
barba.use(barbaCss);

//init Barba
// barba.init({

// });
let tl = gsap.timeline(); //create the timeline

// gsap.fromTo('.ani-t1',{y:50},{y:0, duration:1});
// gsap.fromTo('.ani-t2',{y:50},{y:0, duration:1});

// tl.fromTo('.ani-t1',{y:80},{y:0, duration:0.5})
// .fromTo('.ani-t2',{y:80},{y:0, duration:0.5})
// .fromTo('.ani-t3',{y:80},{y:0, duration:0.5})
// .to('.ani-t1',{y:80, duration:0.5})
// .to('.ani-t2',{y:80, duration:0.5})
// .to('.ani-t3',{y:80, duration:0.5})

tl.fromTo(".ani-t", {
  y: 190,
}, {
  y: 0,
  stagger: {
    each: 0.1,
    from: 'left'
  }
}).fromTo(".ani-logo", {
  y: 190,
  scale: 0
}, {
  y: 0,
  scale: 1,
  duration: 0.5
}, "-=0.3").to(".ani-t", {
  y: 190,
  stagger: {
    each: 0.1,
    from: 'left'
  }
}).to(".ani-logo", {
  left: '30%',
})


const image1 = bg1;
const image2 = bg2;
const image3 = bg3;

let images = [image1, image2, image3];

const slidesData = [
  {
    image: bg1,
    title: "Segovia",
    meta: "Spain / Castile and León"
  }
];


const bgAnimation = document.getElementById('texture');
const container = document.getElementById("app");
const slides = new Slides(slidesData);
const showcase = new Showcase(slidesData);
if (bgAnimation) {
  showcase.mount(container);
  slides.mount(container);
  showcase.render();

  window.addEventListener("resize", function() {
    showcase.onResize();
  });

  window.addEventListener("mousemove", function(ev) {
    showcase.onMouseMove(ev);
  });

}





