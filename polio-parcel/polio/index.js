import './css/style.scss'
import gsap from 'gsap';

/**
 * 터스텀 커서
 */

// const figure = document.querySelector('.h9figureVideo');
// const mainCursor = (el) => {
//   const cursor = document.getElementById('cursor');
//   const sizer = document.querySelector('.sizer');


//   el.addEventListener('mouseenter', (e) => {
//     sizer.classList.add('active');
//     const x = e.pageX - 10;
//     const y = e.pageY - 10;

//     cursor.style.left = x + "px";
//     cursor.style.top = y + "px";
//   });

//   el.addEventListener('mousemove', (e) => {
//     const x = e.pageX - 10;
//     const y = e.pageY - 10;

//     cursor.style.left = x + "px";
//     cursor.style.top = y + "px";

//   });

//   el.addEventListener('mouseleave', (e) => {
//     sizer.classList.remove('active');
//   });

// };


// mainCursor(figure);
const gMove = () => {
  const moveG = document.getElementById("moveG");

  document.addEventListener("mousemove", function (e) {
    const x = e.clientX;
    const y = e.clientY;
    moveG.setAttribute("transform", "translate(" + x + "," + y + ")");
  });
  
}

const playClick = () => {
  const videoClip = document.querySelector('#video-clip');
  const circle= document.querySelector('.video-clip .clippy circle')

  videoClip.addEventListener('click', () => {
    if (videoClip.classList.contains('video-playing')) {
      videoClip.classList.remove('video-playing');
      circle.style.transform = 'scale(3.2)';
    } else {
      videoClip.classList.add('video-playing');
      circle.style.transform = 'scale(50)';
    }
  });

}

gMove();
playClick();