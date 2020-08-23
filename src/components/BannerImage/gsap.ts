import {gsap , ScrollTrigger, TimelineMax} from 'gsap/all'


const gsapStartOne = () => {
    gsap.registerPlugin(ScrollTrigger) 
   
    gsap.to("._liine",{
      scrollTrigger: {
        trigger: '._liine',
      },
      scale:1,
      opacity: 1,  
      duration: 2,
      delay: 0.5
    })
    
    
  }

export default gsapStartOne
