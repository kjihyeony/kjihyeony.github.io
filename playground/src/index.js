import barba from '@barba/core';
import barbaCss from '@barba/css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Showcase } from "./js/Showcase"
import { Slides } from './js/Slides';
import { Curtains,
  Plane,
  Vec2,
  PingPongPlane,t} from 'curtainsjs';
import * as dat from 'dat.gui';
import './css/style.scss'

gsap.registerPlugin(ScrollTrigger);

import Swup from 'swup';
import SwupOverlayTheme from '@swup/overlay-theme';

import Lenis from '@studio-freight/lenis'


import * as THREE from "three";


import bg1 from './images/img-effect-1.jpg';
import bg2 from './images/img-effect-2.jpg';
import bg3 from './images/img-effect-3.jpg';


//tell Barba to use the css plugin
// barba.use(barbaCss);

//init Barba
// barba.init({

// });

const swup = new Swup();


let tl = gsap.timeline(); //create the timeline

// gsap.fromTo('.ani-t1',{y:50},{y:0, duration:1});
// gsap.fromTo('.ani-t2',{y:50},{y:0, duration:1});

// tl.fromTo('.ani-t1',{y:80},{y:0, duration:0.5})
// .fromTo('.ani-t2',{y:80},{y:0, duration:0.5})
// .fromTo('.ani-t3',{y:80},{y:0, duration:0.5})
// .to('.ani-t1',{y:80, duration:0.5})
// .to('.ani-t2',{y:80, duration:0.5})
// .to('.ani-t3',{y:80, duration:0.5})

// tl.fromTo(".ani-t", {
//   y: 190,
// }, {
//   y: 0,
//   stagger: {
//     each: 0.1,
//     from: 'left'
//   }
// }).fromTo(".ani-logo", {
//   y: 190,
//   scale: 0
// }, {
//   y: 0,
//   scale: 1,
//   duration: 0.5
// }, "-=0.3").to(".ani-t", {
//   y: 190,
//   stagger: {
//     each: 0.1,
//     from: 'left'
//   }
// }).to(".ani-logo", {
//   left: '30%',
// })


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

const rippleTest = document.getElementById('ripple');
if(rippleTest) {
  //  set up webGl contetxt or set up curtiansjs
  const curtains = new Curtains({
    container: "canvas",
    pixelRatio: Math.min(1.5, window.devicePixelRatio),
  });

   // mouse/touch move
   const ww = window.innerWidth;
   const wh = window.innerHeight;

   const mouse = new Vec2(ww / 5, wh / 8);
   const lastMouse = mouse.clone();
   const velocity = new Vec2();

}



const lenis = new Lenis({
  lerp: 0.1,
  smooth: true,
});
const scrollFn = (time) => {
  lenis.raf(time);
  requestAnimationFrame(scrollFn);
};
requestAnimationFrame(scrollFn);

const paths = [...document.querySelectorAll('path.path-anim')];



// Animate the d attribute (path initial ) tothe value in data-path-to;
// start when the top of its SVG reaches the bottom of the viewport and
// end when the bottom of its SVG reaches the top of the viewport
paths.forEach(el => {
  const svgEl = el.closest('svg');
  const pathTo = el.dataset.pathTo;

  gsap.timeline({
      scrollTrigger: {
          trigger: svgEl,
          start: "top bottom",
          end: "bottom top",
          scrub: true
      }
  })
  .to(el, {
      ease: 'none',
      attr: { d: pathTo }
  });
});

