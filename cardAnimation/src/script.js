import { gsap, ScrollTrigger } from "gsap/all";
import { CustomEase } from "gsap/all";
import Lenis from '@studio-freight/lenis'
gsap.registerPlugin(ScrollTrigger);
const lenis = new Lenis();


//project data
export const projects = [
  {
    title: "Matthias Leidinger",
    description: "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
    src: "hero_01.jpg",
    link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
    color: "#BBACAF"
  },
  {
    title: "Clément Chapillon",
    description: "This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes”—so French photographer Clément Chapillon describes his latest highly captivating project Les rochers fauves (French for ‘The tawny rocks’).",
    src: "hero_02.jpg",
    link: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
    color: "#977F6D"
  },
  {
    title: "Zissou",
    description: "Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal, they’re encoded with an ambiguity—a certain tension—that lets the viewer find their own story within them.",
    src: "hero_03.jpg",
    link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
    color: "#C2491D"
  },
  {
    title: "Mathias Svold and Ulrik Hasemann",
    description: "The coastlines of Denmark are documented in tonal colors in a pensive new series by Danish photographers Ulrik Hasemann and Mathias Svold; an ongoing project investigating how humans interact with and disrupt the Danish coast.",
    src: "hero_01.jpg",
    link: "https://www.ignant.com/2019/03/13/a-photographic-series-depicting-the-uncertain-future-of-denmarks-treasured-coastlines/",
    color: "#B62429"
  },
  {
    title: "Mark Rammers",
    description: "Dutch photographer Mark Rammers has shared with IGNANT the first chapter of his latest photographic project, ‘all over again’—captured while in residency at Hektor, an old farm in Los Valles, Lanzarote. Titled ‘Beginnings’, the mesmerizing collection of images is a visual and meditative journey into the origins of regrets and the uncertainty of stepping into new unknowns.",
    src: "hero_02.jpg",
    link: "https://www.ignant.com/2023/04/12/mark-rammers-all-over-again-is-a-study-of-regret-and-the-willingness-to-move-forward/",
    color: "#88A28D"
  }
];

document.addEventListener("DOMContentLoaded", function() {
  const cardSection = document.querySelector('.cardSection');

  //project 데이터 반복문으로 카드생성
  projects.forEach((project, i) => {

    const card = document.createElement('div');
    card.className = 'card';

    const cardInner = document.createElement('div');
    cardInner.className = 'cardInner';
    cardInner.style.backgroundColor = project.color;

    cardInner.innerHTML = `
      <div class="cardCon">
        <h2>${project.title}</h2>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">See more</a>
      </div>
      <div class="card-img-container">
        <div class="cardInner-img">
          <img src="/assets/img/${project.src}" alt="${project.title}">
        </div>
      </div>
    `;

    card.appendChild(cardInner);

    cardSection.appendChild(card);
  });

  //각 카드 top값 설정
  const Allcards = document.querySelectorAll('.cardInner');
  Allcards.forEach((card, i) => {
    const topValue = `calc(-5vh + ${i * 25}px)`;
    card.style.top = topValue;
  });

  //스크롤에따른 스케일값 조정
  const cards = document.querySelectorAll('.card');

  cards.forEach((card, i) => {
    const cardInner = card.querySelector('.cardInner');
    const cardHeight = cardInner.clientHeight;

    gsap.to(card.querySelector('.cardInner'), {
      scrollTrigger: {
        trigger: card,
        start: 'bottom bottom',
        end: `+=${cardHeight * 6}`,
        scrub: 0.3,
        duration: 0.5,
        // markers: true
      },
      scale: () => 0.8 + i * 0.035 ,
    });
  });

  //내부 이미지 scale
  const cardInnerImages = document.querySelectorAll('.cardInner .cardInner-img');

  cardInnerImages.forEach((image) => {
    gsap.to(image, {
      scrollTrigger: {
        trigger: image, // 각 이미지 자체가 트리거가 됩니다.
        start: 'top 70%',
        end: '80% center',
        scrub: 0.3,
        // markers: true,
        duration: 0.3,
      },
      scale: 1 // 스케일을 1로 설정하여 원래 크기로 되돌립니다.
    });
  });

  //smooth scroll
  const lenis = new Lenis()

  lenis.on('scroll', (e) => {});

  lenis.on('scroll', ScrollTrigger.update)

  //gsap 설정
  gsap.ticker.add((time)=>{
    lenis.raf(time * 1000)
  })
  gsap.ticker.lagSmoothing(0)

});



