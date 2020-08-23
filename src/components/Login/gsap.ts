import {gsap , ScrollTrigger, TimelineMax} from 'gsap/all'


/* export const GSAP = () => {  */ 


const gsapStart = () => {
    gsap.registerPlugin(ScrollTrigger) 
  
   
     gsap.to("._separatorLine",{
      scrollTrigger: {
        trigger: '._separatorLine',
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
  })
  
 /*  gsap.to('._footerScrollLogin',{
    scrollTrigger: {
      trigger: "._footerScrollLogin",
    },
    y:-200,
    opacity: 1,  
    duration: 0.6,
    delay: 0.4
  })
    */
  }

export default gsapStart

/* } */