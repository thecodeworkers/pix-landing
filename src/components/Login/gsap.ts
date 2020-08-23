import {gsap , ScrollTrigger, TimelineMax} from 'gsap/all'


/* export const GSAP = () => {  */ 


const gsapStart = () => {
    gsap.registerPlugin(ScrollTrigger) 
  
   
     gsap.to("._separatorLogin",{
      scrollTrigger: {
        trigger: '._separatorLogin',
      },
      scale:1,
     opacity: 1,  
     duration: 2,
     delay: 0.2
   }),
 

   gsap.to(["._loginBtnBlack","._registerBtnBlue"],{
    scrollTrigger: {
      trigger: "._loginBtnBlack",
    },
    y:0,
    opacity: 1,  
    duration: 0.6,
    delay: 0.4
  })

  
  gsap.to(['._footerScrollLogin', '._footerLangLogin'],{
    scrollTrigger: {
      trigger: "._loginBtnBlack",
    },
    y:0,
    opacity: 1,  
    duration: 0.6,
    delay: 0.6
  }),

  //PRODUCT

  gsap.to("._separatorProduct",{
    scrollTrigger: {
      trigger: '._separatorProduct',
    },
    duration: 1,
    delay: 0.1,
    width:'100%'
  }),

  gsap.to("._centerSquare",{
    scrollTrigger: {
      trigger: '._centerSquare',
    },
    y:0,
    opacity: 1,
    rotate:360,  
    duration: 1.1,
    delay: 0.3
  }),

  gsap.to("._productext",{
    scrollTrigger: {
      trigger: '._productext',
    },
    y:0,
    opacity: 1,
    duration: 1,
    delay: 0.3
  }),

  gsap.to("._paragraphProduct",{
    scrollTrigger: {
      trigger: '._paragraphProduct',
    },
    y:0,
    opacity: 1,
    duration: 1,
    delay: 0.4
  }),

  gsap.to("._cubeContainer",{
    scrollTrigger: {
      trigger: '._cubeContainer',
    },
    y:0,
    opacity: 1,
    duration: 1,
    delay: 0.5
  }),

  ////INSTANT

  gsap.to("._pixLeftDescriptionO",{
    scrollTrigger: {
      trigger: '._pixLeftDescriptionO',
    },
    y:0,
    duration: 1,
    delay: 0.2
  }),

  gsap.to("._separatorInstant",{
    scrollTrigger: {
      trigger: '._separatorInstant',
    },
    scaleX:1,  
    duration: 1,
    delay: 0.3
  }),

  gsap.to("._orangePixContainer",{
    scrollTrigger: {
      trigger: '._orangePixContainer',
    },
    opacity:1,
    duration: 1.5,
    delay: 0.2
  })

  ////BannerImage

  gsap.to("._separatorBanner",{
    scrollTrigger: {
      trigger: '._separatorInstant',
    },
    scaleX:1,  
    duration: 1,
    delay: 0.3
  })

 
 
  }

export default gsapStart

/* } */