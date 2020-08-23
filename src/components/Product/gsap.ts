import {gsap , ScrollTrigger, TimelineMax} from 'gsap/all'


const gsapStartOne = () => {
    gsap.registerPlugin(ScrollTrigger) 
   
    gsap.to("._separatorLiine",{
      scrollTrigger: {
        trigger: '._separatorLiine',
      },
      scale:1,
      opacity: 1,  
      duration: 2,
      delay: 5
    })
    
  }

export default gsapStartOne
