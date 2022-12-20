import barba from '@barba/core';
import barbaCss from '@barba/css';
import gsap from 'gsap';
import './css/style.scss'

//tell Barba to use the css plugin
barba.use(barbaCss);

const body = document.querySelector('body');


//init Barba
barba.init({

});
let tl = gsap.timeline(); //create the timeline

// gsap.fromTo('.ani-t1',{y:50},{y:0, duration:1});
// gsap.fromTo('.ani-t2',{y:50},{y:0, duration:1});

tl.fromTo('.ani-t1',{y:80},{y:0, duration:0.5})
.fromTo('.ani-t2',{y:80},{y:0, duration:0.5})
.fromTo('.ani-t3',{y:80},{y:0, duration:0.5})
.to('.ani-t1',{y:80, duration:0.5})
.to('.ani-t2',{y:80, duration:0.5})
.to('.ani-t3',{y:80, duration:0.5})



