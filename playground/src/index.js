import barba from '@barba/core';
import barbaCss from '@barba/css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { Showcase } from "./js/Showcase"
import { Slides } from './js/Slides';
import { Curtains,
  Plane,

  PingPongPlane,t} from 'curtainsjs';
import * as dat from 'dat.gui';
import './css/style.scss'

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

import Swup from 'swup';
import SwupOverlayTheme from '@swup/overlay-theme';

import Lenis from '@studio-freight/lenis'


import * as THREE from "three";

import {Renderer, Program, Texture, Mesh, Vec2, Flowmap, Triangle} from 'ogl';


import bg1 from './images/img-effect-1.jpg';
import bg2 from './images/img-effect-2.jpg';
import bg3 from './images/img-effect-3.jpg';
import { Wave } from './js/func/wave';
import { WaveGroup } from './js/func/wavegroup';


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
      attr: {
        d: pathTo
      }
    });
});

const ogl = document.getElementById('ogl');
if (ogl) {
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
      //이미지의 비율이 변함
      vec2 uv = gl_FragCoord.xy / 1600.0;
      uv += flow.xy * 0.05;
      vec3 tex = texture2D(tWater, uv).rgb;
      // Oscillate between raw values and the affected texture above
      tex = tex, flow * 0.5 + 0.5;
      gl_FragColor.rgb = tex;
      gl_FragColor.a = 1.0;
  }
  `; {
    const renderer = new Renderer({
      dpr: 2
    });
    const gl = renderer.gl;
    const oglEl = document.querySelector('.ogl-box');
    document.querySelector('.ogl-box').appendChild(gl.canvas).setAttribute("id", "canvas-ogl");;

    // Variable inputs to control flowmap
    let aspect = 1;
    const mouse = new Vec2(-1);
    const velocity = new Vec2();


    const oglElWidth = oglEl.offsetWidth;
    const oglElHiehgt = oglEl.offsetHeight;

    function resize() {
      renderer.setSize(oglElWidth, oglElHiehgt);
      aspect = oglElWidth / oglElHiehgt;
    }


    window.addEventListener('resize', resize, false);
    resize();

    const flowmap = new Flowmap(gl);

    // Triangle that includes -1 to 1 range for 'position', and 0 to 1 range for 'uv'.
    const geometry = new Triangle(gl);

    const texture = new Texture(gl, {
      wrapS: gl.REPEAT,
      wrapT: gl.REPEAT
    });
    const img = new Image();
    img.onload = () => (texture.image = img);
    img.src = bg1;

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms: {
        uTime: {
          value: 0
        },
        tWater: {
          value: texture
        },

        // Note that the uniform is applied without using an object and value property
        // This is because the class alternates this texture between two render targets
        // and updates the value property after each render.
        tFlow: flowmap.uniform,
      },
    });

    const mesh = new Mesh(gl, {
      geometry,
      program
    });

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

      renderer.render({
        scene: mesh
      });
    }
  }
}

class waveWrap {
  /* 생성자 */
  constructor() {
    /* 캔버스 엘리먼트 생성 */
    this.canvas = document.createElement('canvas');
    this.canvasParent = document.getElementById('wave');

    /*
    Canvas는 getContext() 메소드를 이용해서 렌더링 컨텍스트와
    렌더링 컨텍스트의 그리기 함수들을 사용할 수 있습니다.

    getContext() 메소드는 렌더링 컨텍스트 타입을 지정하는
    하나의 파라메터를 가집니다.

    여기서는 `CanvasRenderingContext2D`를 얻기 위해 '2d'로 지정합니다.
    https://developer.mozilla.org/ko/docs/Web/HTML/Canvas/Tutorial/Basic_usage
    */
    this.ctx = this.canvas.getContext('2d');

    /* 현재 html 문서의 body에 캔버스 엘리먼트 추가하기 */

    this.canvasParent.appendChild(this.canvas);

    /*
    사이즈가 변할 때 대응하기 위한 이벤트 리스너

    추가 : once, passive, capture 등에 대한 설명
    http://sculove.github.io/blog/2016/12/29/addEventListener-passive/
    https://joshua1988.github.io/web-development/javascript/event-propagation-delegation/
    */
    window.addEventListener('resize', this.resize.bind(this), {
      once: false,
      passive: false,
      capture: false,
    });

    /* 웨이브 객체 생성 */
    // this.wave = new Wave();
    this.WaveGroup = new WaveGroup();

    /* 초기 사이즈를 기준으로 resize 함수 실행 */
    this.resize();

    /*
    requestAnimationFrame은 css로 처리하기 어려운 애니메이션이나
    Canvas, SVG 등의 애니메이션 구현에 이용하는 함수
    setInterval과 흡사한데, 재귀적으로 자신을 호출한다는 점이 다름
    1초당 디스플레이 주사율에 따라 정해진 프레임을 렌더링해줌
    https://blog.eunsatio.io/develop/JavaScript-window.requestAnimationFrame-%ED%8A%9C%ED%86%A0%EB%A6%AC%EC%96%BC
    https://css-tricks.com/using-requestanimationframe/
    */
    requestAnimationFrame(this.animate.bind(this));
  }

  /* 사이즈가 변했을 때 실행될 콜백 */
  resize() {
    /* 레티나 디스플레이에서 올바른 화면을 보여주기 위해 설정 */
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    /* 캔버스의 크기를 스테이지의 2배로 잡음 */
    this.canvas.width = this.stageWidth * 2;
    this.canvas.height = this.stageHeight * 2;

    /*
    캔버스에서 1개의 픽셀이 차지할 크기를 정함
    크기를 2배로 늘렸으므로 각 픽셀이 2개씩 차지하도록 함
    https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/scale
    */
    this.ctx.scale(2, 2);

    /* 웨이브에도 리사이즈가 적용 되도록 설정 */
    this.WaveGroup.resize(this.stageWidth, this.stageHeight);
  }

  /* 애니메이션 관련 루틴 정의 */
  animate(t) {
    /* 지정된 사각 영역을 rgba(0, 0, 0, 0)의 색상으로 만듦 */
    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);
    /* 애니메이션이 실행되면 웨이브가 그려지도록 설정 */
    this.WaveGroup.draw(this.ctx);
    /* this를 바인드한 채로 애니메이션 프레임 요청 */
    requestAnimationFrame(this.animate.bind(this));
  }
}

// new waveWrap();

const wave = document.getElementById('wave');
  if(wave){
    window.onload = () => {
      new waveWrap();
  }

  const animateIn = gsap.timeline({
    scrollTrigger: {
      scrollTrigger: ".waveWrap",
      start:"center center",
      markers: "true",
      toggleActions: "play none none reverse",
    }
  });

  animateIn.fromTo(".waveWrap",{
      yPercent: 120,
    },{
      yPercent: -40,
      ease: "power4",
      duration: 0.4
    }
  )
}

const create = document.getElementById('create');

if(create) {
  const panelEls = Array.from(document.querySelectorAll('.panels'))

  ScrollTrigger.create({
    trigger: create,
    start: "top top",
    pin: true,
    // end: '+=5000',
    end: "+=550%",
    pinSpacing: false,
    markers: {
      startColor: 'yellow',
      endColor: 'yellow'
    }
  });

  let createAni = gsap.timeline({
    scrollTrigger: {
      scrollTrigger: create,
      scrub: 1,
      start: "center-=800 center+=150",
      end: "+=150%",
      markers: 'true',
      smooth: 1,
    }
  }).to('.create-title-1', {
    y: -10,
    opacity: 1,
    duration: 5,
  }).to('.create-title-2', {
    y: -10,
    opacity: 1,
    duration: 5,
  }, "<+=2").to('.create-title-3', {
    y: -10,
    opacity: 1,
    duration: 5,
  }, "<+=3.5").to('.create-more-link', {
    y: 50,
    opacity: 1,
    duration: 2,
  }, "<+=4");

  gsap.to(".create-card-1", {
    rotation: "30deg",
    y: "-10%",
    x: "100%",
    ease: "none",
    scrollTrigger: {
      trigger: ".create-card-1",
      start: "top bottom",
      end: "+=" + 2 * window.innerHeight + "px",
      scrub: !0
    }
  })

  gsap.to(".create-card-2", {
    rotation: "-30deg",
    y: "50%",
    x: "20%",
    ease: "none",
    scrollTrigger: {
      trigger: ".create-card-2",
      start: "top bottom",
      end: "+=" + 2.6 * window.innerHeight + "px",
      scrub: !0
    }
  });

  gsap.to(".create-card-3", {
    rotation: "40deg",
    y: "30%",
    x: "-90%",
    ease: "none",
    scrollTrigger: {
      trigger: ".create-card-2",
      start: "top 50%",
      end: "+=" + 2.4 * window.innerHeight + "px",
      scrub: !0
    }
  });


  var f = document.querySelector(".culture-wrap").clientWidth - window.innerWidth;
  gsap.to(".culture-wrap", {
      x: -1 * f + "px",
      ease: "none",
      scrollTrigger: {
          trigger: ".culture-wrap",
          top: "top top",
          end: "+=" + f + "px",
          scrub: true,
          pin: true
      }
  });

    document.querySelectorAll(".culture-card-box").forEach((function(t) {
      var e = {};
      e.x = (Math.floor(21 * Math.random()) + 30) * (2 * Math.round(Math.random()) - 1),
      e.y = (Math.floor(7 * Math.random()) + 10) * (2 * Math.round(Math.random()) - 1),
      e.rota = (Math.floor(11 * Math.random()) + 10) * (2 * Math.round(Math.random()) - 1),
      gsap.fromTo(t, {
          xPercent: e.x,
          yPercent: e.y,
          rotate: e.rota
      }, {
          xPercent: -e.x,
          yPercent: -e.y,
          rotate: -e.rota,
          ease: "none",
          scrollTrigger: {
              trigger: ".culture",
              start: "top top-=" + (t.getBoundingClientRect().left - t.clientWidth - window.innerWidth),
              end: "+=" + (window.innerWidth + 3 * t.clientWidth) + "px",
              scrub: !0
          }
      })
    }
  ));
}
