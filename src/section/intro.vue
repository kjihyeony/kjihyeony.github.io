<template>


  <section class="intro">
    <div class="intro-wrap">
      <div class="container">
        <div class="sub">UI Development</div>
        <div class="title">
          <div class="title-typo">
            <p class="top">Web publisher hyeony </p>
            </div>
            <div class="title-typo">
              <p class="bottom">Portfolio</p>
            </div>
          </div>
        </div>
        <div class="sub-copy">
          <div class="all">
            <p class="one">안녕하세요 김지현입니다! 주어진 디자인 시안을 단순히 구현하는데 그치는 것이 아니라 </p>
            <p class="two"> UX와 개발에서의 관점까지 의식하며 작업을 진행합니다.</p>
            <span class="three">협업을 중요시하기에 자유롭게 커뮤니케이션하는 분위기가 형성된 팀을 좋아합니다.</span>
          </div>
        </div>
        <!-- <div class="intro-img">
          <img src="@/assets/imgs/retina_large.png" alt=""/>
        </div> -->
      </div>
  </section>


</template>

<script>
  import { gsap } from "gsap"
  import { ScrollTrigger, ScrollToPlugin, MotionPathPlugin  } from "gsap/all"
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, MotionPathPlugin )


  export default {
    name: 'IntroText',
    components: {

    },
    data() {
      return {

      }
    },

    methods: {
      InitIntro(){
          let tl = gsap.timeline({delay: 0.5});

          tl.from('.intro-wrap .container .sub',{
              opacity: 0,
              duration: 1,
          })
          .from('.intro-wrap .title-typo .top',{
              y:100,
              ease: 'power4',
              duration: 1,
              pinspacer:  false,
          }, "-=0.7")
          .from('.intro-wrap .title-typo .bottom',{
              y:100,
              ease: 'power4',
              duration: 1,
              pinspacer:  false,
          }, "-=0.6")
          .from('.intro-wrap .sub-copy .all',{
              y:100,
              opacity: 0,
              ease: 'power4',
              duration: 2,
              pinspacer:  false,
          }, "-=0.8")
          .from('.intro-wrap .sub-copy .all .three',{
              y:100,
              opacity: 0,
              duration: 1,
          }, "-=2")
        }

    },
    mounted() {
     this.InitIntro();


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
    width: 100%;
    height: 80vh;
  }

</style>