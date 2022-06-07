<template>
  <div>
    <Intro />

    <div class="projects">
      <section class="middle">
        <h1 class="middle-title">Project List</h1>
        <p class="middle-copy">
          It's a list of all <br>the projects I've been working on
        </p>
      </section>
      <section class="bottom">
        <div class="container">
          <!-- list -->
          <div class="list">
            <div class="row">
              <div class="item">
                <a href="#!">
                  <div class="item-img" :ref="itemImage">
                  <img :src="require('@/assets/imgs/hds.png')" alt="">
                </div>
                </a>
                <div class="name">SK하이닉스 디자인시스템 고도화프로젝트</div>
                <p class="copy">프레임 워크 환경에서 스타일 작업 업무를 맡아 진행했습니다.</p>
              </div>
              <div class="item">
                <a target="_blank" href="https://sandbox.fintech.or.kr/">
                  <div class="item-img" :ref="itemImage">
                    <img :src="require('@/assets/imgs/sandbox.png')" alt="">
                  </div>
                </a>
                <div class="name">금융규제 샌드박스</div>
                <p class="copy">모든 ui개발을 담당하여 진행했습니다.</p>
              </div>
              <div class="item">
                <a target="_blank" href="https://uxstudio.sktelecom.com/">
                  <div class="item-img" :ref="itemImage">
                  <img :src="require('@/assets/imgs/studio.png')" alt="">
                </div>
                </a>
                <div class="name">UX Studio</div>
                <p class="copy">부트스트랩을 이용하여 컴포넌트를 제작하는 업무를 진행했습니다.</p>
              </div>
             <div class="item">
                <a target="_blank" href="">
                  <div class="item-img" :ref="itemImage">
                  <img :src="require('@/assets/imgs/sds.png')" alt="">
                </div>
                </a>
                <div class="name">Samsung SDS 다국어 홈페이지 운영</div>
                <p class="copy">웹접근성 갱신 및 다국어 홈페이지 운영 프로젝트를 2년동안 진행했습니다.</p>
              </div>
            </div>
          </div>
          <!-- /list -->
        </div>
      </section>
    </div>
    <section class="resume">
      <div class="container">
        <a href="" class="btn-resume-down">Download resume </a>
      </div>
    </section>
    <footer>
      <div></div>
    </footer>
  </div>
</template>

<script>
  import { onMounted, ref} from 'vue'
  import axios from 'axios'
  import { gsap } from "gsap"
  import { ScrollTrigger, ScrollToPlugin, MotionPathPlugin } from "gsap/all"
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, MotionPathPlugin)
  import Intro from "../src/section/intro.vue"
  




  export default {
    name: 'portFolio',
    components: {
    Intro,

},
    data() {
      return {
       itemRefs : [],
      }
    },

    methods: {
      heightChange(){
      //    const ItemWidth = this.$refs.itemImage.clientWidth
      //  this.$refs.itemImage.clientHeight = ItemWidth * 1.4
      },

      itemImage(el){
        this.itemRefs.push(el)
      },

      //Timline animation
      scrollAnimation(){
        gsap.timeline({
          scrollTrigger: {
            trigger: ".intro",
            start: "top top",
            scrub: true,
          }
        })
        .to(".intro-wrap",{ y:"100%", ease: "none", backgroundColor: '#fff'})


        gsap.timeline({
          scrollTrigger: {
            trigger: ".middle",
            start: "80% center",
            endTrigger: ".bottom",
            end: "+=700px",
            scrub: true,
            pin: true,
            pinSpacing: false
          }
        })
        .to(".middle-title",{ opacity: "0" })
        .to(".middle-copy",{ opacity: "0" })

      },

    },
    beforeUpdate(){
      this.itemRefs = []
    },
    updated(){

    },
    mounted(){
      this.scrollAnimation();
      this. heightChange();

      // gsap.to(
      //   {
         
      //   }
      // )

    // const tl = gsap.TimelineLite();
    // tl.to(".tp3", 2.3, {strokeDashoffset:"0"},"-=1.5");
    // tl.to(".tp3", 0.2, {fillOpacity:1}, "-=2");
    // tl.to(".tp4", 2.3, {strokeDashoffset:"0"}, "-=1.3");
    // tl.to(".tp4", 0.2, {fillOpacity:1}, "-=1.6");


      var containers = gsap.utils.toArray('.container');
      containers.forEach(function (container) {
        gsap.to(
          container.querySelectorAll(".item-img"),
          {
            y: 0,
            stagger: 0.3,
            scrollTrigger: {
              trigger: container,
              scrub: true,
              start: "top bottom",
              end: "bottom center",
              immediateRender: false,
              // markers: true
            }
          }
        );
      });
    
      const sections = document.querySelectorAll('section');
      sections.forEach((section, index) => {
        gsap.to(section, {autoAlpha: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top bottom-=200',
            toggleActions: 'play none none reverse',
            // markers: true
          }
        });

        ScrollTrigger.create({
          trigger: section,
          id: index+1,
          start: 'top center',
          end: () => `+=${section.clientHeight + 50}`,
          toggleActions: 'play reverse none reverse',
          toggleClass: {targets: section, className: "is-active"},
          duration: 2
          // markers: true
        })

      })

      //set refs array 
      // this.itemRefs.forEach(this.addTimeline);
    }
  }
</script>

<style lang="scss">
  body {
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }

  .bin {
    height: 50vh;
  }
</style>