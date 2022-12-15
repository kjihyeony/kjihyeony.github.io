import barba from '@barba/core';
import barbaCss from '@barba/css';
import './css/style.scss'

//tell Barba to use the css plugin
barba.use(barbaCss);



//init Barba
barba.init({
  transitions: [{
    once() {},
    leave() {} // enter or leave hook here
  }]
});