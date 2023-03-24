import './css/style.scss'
import gsap from 'gsap';

/**
 * 터스텀 커서
 */

const figure = document.querySelector('.h9figureVideo');
const mainCursor = (el) => {
  const cursor = document.getElementById('cursor');
  const sizer = document.querySelector('.sizer');


  el.addEventListener('mouseenter', (e) => {
    sizer.classList.add('active');
    const x = e.pageX - 10;
    const y = e.pageY - 10;

    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
  });

  el.addEventListener('mousemove', (e) => {
    const x = e.pageX - 10;
    const y = e.pageY - 10;

    cursor.style.left = x + "px";
    cursor.style.top = y + "px";

  });

  el.addEventListener('mouseleave', (e) => {
    sizer.classList.remove('active');
  });
};


mainCursor(figure);


const mainClip = () => {
  const container = document.querySelector('.left-line');
  const containerCursor = document.querySelector('.h9figure-cursor-area');

  container.addEventListener('mousemove', updateCoords, false);

  function updateCoords(e) {

    const { offsetX, offsetY } = e;

    // Update coordinates
    container.style.setProperty('--x', offsetX + 'px');
    container.style.setProperty('--y', offsetY + 'px');

    // Animate clip-path
    gsap.to('.child', {
      duration: 0.5,
      clipPath: `ellipse(19rem 19rem at ${offsetX}px ${offsetY}px)`
    });
  }
};

mainClip();