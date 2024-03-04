import { gsap, ScrollTrigger } from "gsap/all";
import { CustomEase } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

// scripts.js
export const projects = [
  {
    title: "Matthias Leidinger",
    description: "Originally hailing from Austria, Berlin-based photographer Matthias Leindinger is a young creative brimming with talent and ideas.",
    src: "rock.jpg",
    link: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
    color: "#BBACAF"
  },
  {
    title: "Clément Chapillon",
    description: "This is a story on the border between reality and imaginary, about the contradictory feelings that the insularity of a rocky, arid, and wild territory provokes”—so French photographer Clément Chapillon describes his latest highly captivating project Les rochers fauves (French for ‘The tawny rocks’).",
    src: "tree.jpg",
    link: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
    color: "#977F6D"
  },
  {
    title: "Zissou",
    description: "Though he views photography as a medium for storytelling, Zissou’s images don’t insist on a narrative. Both crisp and ethereal, they’re encoded with an ambiguity—a certain tension—that lets the viewer find their own story within them.",
    src: "water.jpg",
    link: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
    color: "#C2491D"
  },
  {
    title: "Mathias Svold and Ulrik Hasemann",
    description: "The coastlines of Denmark are documented in tonal colors in a pensive new series by Danish photographers Ulrik Hasemann and Mathias Svold; an ongoing project investigating how humans interact with and disrupt the Danish coast.",
    src: "house.jpg",
    link: "https://www.ignant.com/2019/03/13/a-photographic-series-depicting-the-uncertain-future-of-denmarks-treasured-coastlines/",
    color: "#B62429"
  },
  {
    title: "Mark Rammers",
    description: "Dutch photographer Mark Rammers has shared with IGNANT the first chapter of his latest photographic project, ‘all over again’—captured while in residency at Hektor, an old farm in Los Valles, Lanzarote. Titled ‘Beginnings’, the mesmerizing collection of images is a visual and meditative journey into the origins of regrets and the uncertainty of stepping into new unknowns.",
    src: "cactus.jpg",
    link: "https://www.ignant.com/2023/04/12/mark-rammers-all-over-again-is-a-study-of-regret-and-the-willingness-to-move-forward/",
    color: "#88A28D"
  }
];

// DOM이 로드된 후 실행될 함수
document.addEventListener("DOMContentLoaded", function() {
  const cardSection = document.querySelector('.cardSection');

  // 프로젝트 데이터를 반복하여 카드를 생성합니다.
  projects.forEach((project, i) => {
    // 카드 요소 생성
    const card = document.createElement('div');
    card.className = 'card';

    // 카드 내부 요소 생성
    const cardInner = document.createElement('div');
    cardInner.className = 'cardInner';
    cardInner.style.backgroundColor = project.color; // 배경색 적용

    // 카드 내부 HTML 작성
    cardInner.innerHTML = `
      <h2>${project.title}</h2>
      <p>${project.description}</p>
      <a href="${project.link}" target="_blank">See more</a>
      <img src="/images/${project.src}" alt="${project.title}">
    `;

    // 카드 내부 요소를 카드에 추가
    card.appendChild(cardInner);

    // 카드 섹션에 카드 추가
    cardSection.appendChild(card);
  });

  // 카드 각각의 top 값을 계산하여 설정하는 코드
  const Allcards = document.querySelectorAll('.cardInner');
  Allcards.forEach((card, i) => {
    const topValue = `calc(-5vh + ${i * 25}px)`;
    card.style.top = topValue;
 
  });

  const cards = document.querySelectorAll('.card');

  cards.forEach((card, i) => {
    const cardInner = card.querySelector('.cardInner');
    const cardHeight = cardInner.clientHeight; // 카드 내부의 높이를 가져옵니다

    gsap.to(card.querySelector('.cardInner'), {
      scrollTrigger: {
        trigger: card,
        start: 'bottom bottom',
        end: `+=${cardHeight * 6}`,
        scrub: 0.3,
        duration: 0.5,
        markers: true
      },
      scale: () => 0.8 + i * 0.035 // 각 카드의 인덱스에 따라 스케일 값을 계산합니다.
    });
  });
  

});



