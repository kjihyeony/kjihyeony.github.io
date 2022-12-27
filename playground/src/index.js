import barba from '@barba/core';
import barbaCss from '@barba/css';
import gsap from 'gsap';
import { Showcase } from "./js/Showcase"
import { Slides } from './js/Slides';
import { Curtains,
  Plane,
  Vec2,
  PingPongPlane,t} from 'curtainsjs';
import * as dat from 'dat.gui';
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

   function onMouseMove(e) {
     lastMouse.copy(mouse);

     // touch event
     if (e.targetTouches) {
       mouse.set(e.targetTouches[0].clientX, e.targetTouches[0].clientY);
     } else {
       mouse.set(e.clientX, e.clientY);
     }

     velocity.set((mouse.x - lastMouse.x) / 16, (mouse.y - lastMouse.y) / 16);

     updateVelocity = true;
   }

   window.addEventListener("mousemove", onMouseMove);
   window.addEventListener("touchmove", onMouseMove, {
     passive: true,
   });

   const planeElement = document.getElementById("flowmap");

   // parameters
   const flowMapParams = {
     sampler: "uFlowMap",
     vertexShader: flowmapVs,
     fragmentShader: flowmapFs,
     texturesOptions: {
       floatingPoint: "half-float",
     },
     uniforms: {
       mousePosition: {
         name: "uMousePosition",
         type: "2f",
         value: mouse,
       },
       fallOff: {
         name: "uFalloff",
         type: "1f",
         value: ww > wh ? ww / 10000 : wh / 10000,
 
         // we can change what i want here
       },
       cursorGrow: {
         name: "uCursorGrow",
         type: "1f",
         value: 1.15,
       },
       // alpha of the cursor
       alpha: {
         name: "uAlpha",
         type: "1f",
         value: 1.14,
       },
       dissipation: {
         name: "uDissipation",
         type: "1f",
         value: 0.925,
       },
       velocity: {
         name: "uVelocity",
         type: "2f",
         value: velocity,
       },
       aspect: {
         name: "uAspect",
         type: "1f",
         value: ww / wh,
       },
     },
   };
   const flowMap = new PingPongPlane(curtains, planeElement, flowMapParams);

   flowMap.onRender(() => {
     // update mouse position
     flowMap.uniforms.mousePosition.value = flowMap.mouseToPlaneCoords(mouse);
 
     flowMap.uniforms.velocity.value = new Vec2(
       curtains.lerp(velocity.x, 0.5, 1.5),
       curtains.lerp(velocity.y, 0.5, 1.5)
     );
   });
   // add displacements shader
   const params = {
     vertexShader: displacementVs,
     fragmentShader: displacementFs,
   };
   // create plane
   const plane = new Plane(curtains, planeElement, params);
 
   // create a texture that will hold our flowmap
   const flowTexture = plane.createTexture({
     sampler: "uFlowTexture",
     fromTexture: flowMap.getTexture(), // set it based on our PingPongPlane flowmap plane's texture
   });

}




