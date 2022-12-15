import barba from '@barba/core';
import barbaCss from '@barba/css';
import './css/style.scss'

//tell Barba to use the css plugin
barba.use(barbaCss);


//init Barba
barba.init({
  transitions: [{
    name: 'main',
    beforeOnce() {
      console.log("before once");
    },
    once(){
      /* with css plugin, this will not run*/
      /* once hook only used for the css transition  */
      console.log('once');
    },
    afterOnce() {
      console.log('afterOnce');
    } // enter or leave hook here
  },{
      name: 'fade',
      to: {
        namespace: ['fade']
      },
      leave() {},
      //next page when entering when we are goimg fro, the first page to the second page
      enter() {},
    },
    {
      name: 'fade',
      to: {
        namespace: ['main']
      },
      leave() {},
      //next page when entering when we are goimg fro, the first page to the second page
      enter() {},
    }

  ]
});