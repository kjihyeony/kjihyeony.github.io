import barba from '@barba/core';
import barbaCss from '@barba/css';
import gsap from 'gsap';
import './css/style.scss'

import WaterTexture from './js/pages/WaterTexture';


//tell Barba to use the css plugin
barba.use(barbaCss);

const body = document.querySelector('body');


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
  },
  {
    y:0,
    stagger:{
      each: 0.1,
      from: 'left'
    }
  }
).fromTo(".ani-logo",{
    y: 190,
    scale: 0
  },{
    y:0,
    scale: 1,
    duration: 0.5
  }
, "-=0.3"
).to(".ani-t",{
    y: 190,
    stagger: {
      each: 0.1,
      from: 'left'
    }
  }
).to(".ani-logo",{
    left: '30%',
  }
)


const bgAnimation = document.getElementById('texture');
if(bgAnimation){
  console.log('dd');
  WaterTexture ();
}



