import {gsap , ScrollTrigger, TimelineMax} from 'gsap/all'


/* export const GSAP = () => {  */ 


const hola = () => {
    gsap.registerPlugin(ScrollTrigger) 
  
  
    gsap.to("._boxLogin",{
     scrollTrigger: {
       trigger: '._boxLogin',
      /*  markers: false, */
     },
     bottom:'0%',
     opacity: 1,  
     duration: 2,
     start: "center center",
     delay: 0.1 
   })
   
   
  }

export default hola

/* } */