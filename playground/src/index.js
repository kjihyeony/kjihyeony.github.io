import barba from '@barba/core';
import barbaCss from '@barba/css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Showcase } from "./js/Showcase"
import { Slides } from './js/Slides';
import { Curtains,
  Plane,

  PingPongPlane,t} from 'curtainsjs';
import * as dat from 'dat.gui';
import './css/style.scss'

gsap.registerPlugin(ScrollTrigger);

import Swup from 'swup';
import SwupOverlayTheme from '@swup/overlay-theme';

import Lenis from '@studio-freight/lenis'


import * as THREE from "three";

import {Renderer, Program, Texture, Mesh, Vec2, Flowmap, Triangle} from 'ogl';


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
          scrub: true,
      }
  })
  .to(el, {
      ease: 'none',
      attr: { d: pathTo }
  });
});

const ogl = document.getElementById('ogl');
if(ogl){
  const vertex = /* glsl */ `
  attribute vec2 uv;
  attribute vec2 position;
  varying vec2 vUv;
  void main() {
      vUv = uv;
      gl_Position = vec4(position, 0, 1);
  }
  `;

  const fragment = /* glsl */ `
  precision highp float;
  uniform sampler2D tWater;
  uniform sampler2D tFlow;
  uniform float uTime;
  varying vec2 vUv;
  void main() {

      // R and G values are velocity in the x and y direction
      // B value is the velocity length
      vec3 flow = texture2D(tFlow, vUv).rgb;
      // Use flow to adjust the uv lookup of a texture
      vec2 uv = gl_FragCoord.xy / 600.0;
      uv += flow.xy * 0.05;
      vec3 tex = texture2D(tWater, uv).rgb;
      // Oscillate between raw values and the affected texture above
      tex = tex, flow * 0.5 + 0.5;
      gl_FragColor.rgb = tex;
      gl_FragColor.a = 1.0;
  }
  `;
  {
    const renderer = new Renderer({ dpr: 2 });
    const gl = renderer.gl;
    document.body.appendChild(gl.canvas).setAttribute("id", "canvas-ogl");;

    // Variable inputs to control flowmap
    let aspect = 1;
    const mouse = new Vec2(-1);
    const velocity = new Vec2();

    const oglEl = document.querySelector('.ogl-box');

    console.log(oglEl);
    const oglElWidth = oglEl.offsetWidth;
    const oglElHiehgt = oglEl.offsetHeight;

    function resize() {
        renderer.setSize(oglElWidth,oglElHiehgt);
        aspect = oglElWidth / oglElHiehgt;
    }

   
    window.addEventListener('resize', resize, false);
    resize();

    const flowmap = new Flowmap(gl);

    // Triangle that includes -1 to 1 range for 'position', and 0 to 1 range for 'uv'.
    const geometry = new Triangle(gl);

    const texture = new Texture(gl, { wrapS: gl.REPEAT, wrapT: gl.REPEAT });
    const img = new Image();
    img.onload = () => (texture.image = img);
    img.src = bg1;

    const program = new Program(gl, {
        vertex,
        fragment,
        uniforms: {
            uTime: { value: 0 },
            tWater: { value: texture },

            // Note that the uniform is applied without using an object and value property
            // This is because the class alternates this texture between two render targets
            // and updates the value property after each render.
            tFlow: flowmap.uniform,
        },
    });

    const mesh = new Mesh(gl, { geometry, program });

    // Create handlers to get mouse position and velocity
    const isTouchCapable = 'ontouchstart' in window;
    if (isTouchCapable) {
        window.addEventListener('touchstart', updateMouse, false);
        window.addEventListener('touchmove', updateMouse, false);
    } else {
        window.addEventListener('mousemove', updateMouse, false);
    }

    let lastTime;
    const lastMouse = new Vec2();
    function updateMouse(e) {
        if (e.changedTouches && e.changedTouches.length) {
            e.x = e.changedTouches[0].pageX;
            e.y = e.changedTouches[0].pageY;
        }
        if (e.x === undefined) {
            e.x = e.pageX;
            e.y = e.pageY;
        }

        // Get mouse value in 0 to 1 range, with y flipped
        mouse.set(e.x / gl.renderer.width, 1.0 - e.y / gl.renderer.height);

        // Calculate velocity
        if (!lastTime) {
            // First frame
            lastTime = performance.now();
            lastMouse.set(e.x, e.y);
        }

        const deltaX = e.x - lastMouse.x;
        const deltaY = e.y - lastMouse.y;

        lastMouse.set(e.x, e.y);

        let time = performance.now();

        // Avoid dividing by 0
        let delta = Math.max(14, time - lastTime);
        lastTime = time;

        velocity.x = deltaX / delta;
        velocity.y = deltaY / delta;

        // Flag update to prevent hanging velocity values when not moving
        velocity.needsUpdate = true;
    }

    requestAnimationFrame(update);
    function update(t) {
        requestAnimationFrame(update);

        // Reset velocity when mouse not moving
        if (!velocity.needsUpdate) {
            mouse.set(-1);
            velocity.set(0);
        }
        velocity.needsUpdate = false;

        // Update flowmap inputs
        flowmap.aspect = aspect;
        flowmap.mouse.copy(mouse);

        // Ease velocity input, slower when fading out
        flowmap.velocity.lerp(velocity, velocity.len() ? 0.5 : 0.1);

        flowmap.update();

        program.uniforms.uTime.value = t * 0.001;

        renderer.render({ scene: mesh });
    }
  }
}

