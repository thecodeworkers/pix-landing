import { gsap, ScrollTrigger } from 'gsap/all'


const gsapStart = () => {
  
  gsap.registerPlugin(ScrollTrigger)

  gsap.to("._separatorLogin", { scrollTrigger: { trigger: '._separatorLogin',},scale: 1, opacity: 1, duration: 0.6, delay: 0.4 }),
  gsap.to(["._loginBtnBlack", "._registerBtnBlue"], { scrollTrigger: { trigger: "._loginBtnBlack",}, y: 0, opacity: 1, duration: 0.6, delay: 0.6 })
  gsap.to(['._footerScrollLogin', '._footerLangLogin'], { scrollTrigger: { trigger: "._loginBtnBlack",}, y: 0, opacity: 1, duration: 0.6, delay: 0.6 }),
  gsap.to("._boxLogin", { scrollTrigger: { trigger: '._boxLogin',}, opacity: 1, y: 0, duration: 0.6, delay: 0.8 }),

   ///////////////////PRODUCT/////////////////////
   
  gsap.to("._separatorProduct", { scrollTrigger: { trigger: '._separatorProduct', }, duration: 0.6, delay: 0.4, width: '100%' }),
  gsap.to("._centerSquare", { scrollTrigger: { trigger: '._centerSquare', }, y: 0, opacity: 1, rotate: 360, duration: 0.6, delay: 0.8 }),
  gsap.to("._productext", { scrollTrigger: { trigger: '._productext', }, y: 0, opacity: 1, duration: 0.6, delay: 0.6 }),
  gsap.to(["._paragraphProduct","_productBtnBlue" ] ,{ scrollTrigger: { trigger: '._paragraphProduct', }, y: 0, opacity: 1, duration: 0.6, delay: 0.6}),
  gsap.to(["._cubeContainer", "._productBtnBlue"], { scrollTrigger: { trigger: '._cubeContainer', }, y: 0, opacity: 1, duration: 0.6, delay: 0.7 }), 
  gsap.to(["._usdtFloatingIcon", "._usdrectangle", "._ethrectangle","._usdcFloatingIcon", "._eurFloatingIcon", "._dashFloatingIcon"], { scrollTrigger: { trigger: '._usdtFloatingIcon',},scale: 1, opacity: 1, duration: 0.6, delay: 0.9 }),

   ///////////////////INSTANT/////////////////////
   gsap.to(["._sendIcon", "._btcRecantgle", "._profile"], { scrollTrigger: { trigger: '._sendIcon',},scale: 1, opacity: 1, duration: 0.6, delay: 0.8 }),
   gsap.to("._pixLeftDescriptionO", { scrollTrigger: { trigger: '._pixLeftDescriptionO', }, y: 0, duration: 0.6, delay: 0.4 }),
   gsap.to("._separatorInstant", { scrollTrigger: { trigger: '._separatorInstant', }, duration: 0.6, delay: 0.4, width: '100%' }),
   gsap.to("._orangePixContainer", { scrollTrigger: { trigger: '._orangePixContainer', }, opacity: 1, y: 0, duration: 0.6, delay: 0.6 })


   ///////////////////BANNER IMAGE/////////////////////

   gsap.to("._separatorBanner", { scrollTrigger: { trigger: '._separatorBanner', }, scale: 1, duration: 0.6, delay: 0.4 }),
   gsap.to("._imageContainerText", { scrollTrigger: { trigger: '._imageContainerText', }, y: 0, duration: 0.6, delay: 0.4, opacity:1 }),
   gsap.to('._minimunCube',{ scrollTrigger: { trigger: '._minimunCube',}, bottom: '70%' , opacity: 1, duration: 0.6, delay: 0.4 }),
   gsap.to('._giantCube  ',{ scrollTrigger: { trigger: '._giantCube',}, bottom: '12%' , opacity: 1, duration: 0.6, delay: 0.4}),
   gsap.to('._mediumDiamond',{ scrollTrigger: { trigger: '._mediumDiamond',}, bottom: '55%' , opacity: 1, duration: 0.6, delay: 0.4 }),

  ///////////////////ABOUT US/////////////////////

  
  gsap.to("._aboutFather", { scrollTrigger: { trigger: '._aboutFather',}, y: 0, opacity: 1, duration: 0.6, delay: 0.4 }),
  gsap.to(["._floatingCoin", "._floatingCoinTwo"], { scrollTrigger: { trigger: '._floatingCoin',}, marginBottom:0, opacity: 1, duration: 0.6, delay: 0.4 }),

  ///////////////////BANNER/////////////////////
  
  
  gsap.to("._childrenTitle", { scrollTrigger: { trigger: '._childrenTitle', }, opacity: 1, duration: 0.6, delay: 0.4 }),
  gsap.to(['._bannerCards', '._bannerButton', '._buttonText', '._buttonGradient'], { scrollTrigger: { trigger: '._bannerCards', }, y: 0, opacity: 1, duration: 0.6, delay: 0.8 }),
  gsap.to("._box", { scrollTrigger: { trigger: '._box', }, opacity: 1, y: 0, duration: 0.6, delay: 0.6 }),

    ///////////////////STORE/////////////////////

  gsap.to("._storeTitle", { scrollTrigger: { trigger: '._storeTitle', }, y: 0, opacity: 1, duration: 0.4, delay: 0.4 }),
  gsap.to("._storeLine", { scrollTrigger: { trigger: '._storeLine', }, scale: 1, duration: 0.4, delay: 0.2 }),
  gsap.to(["._storeText", "._storeButtonContainer", "._footerNetwork"], { scrollTrigger: { trigger: '._storeText', }, y: 0, opacity: 1, duration: 0.4, delay: 0.5 }),

    ///////////////////PHONE/////////////////////

    gsap.to('._tiny',{ scrollTrigger: { trigger: '._tiny',}, marginBottom: 150, opacity: 1, duration: 0.6, delay: 0.6 }),
    gsap.to('._little  ',{ scrollTrigger: { trigger: '._little',}, marginBottom: 190, opacity: 1, duration: 0.6, delay: 0.6}),
    gsap.to('._medium',{ scrollTrigger: { trigger: '._medium',}, marginBottom: 60 , opacity: 1, duration: 0.6, delay: 0.6 })
    gsap.to('._big',{ scrollTrigger: { trigger: '._big',}, marginBottom: 20, opacity: 1, duration: 0.6, delay: 0.6 }),
    gsap.to('._turqueseDiamond  ',{ scrollTrigger: { trigger: '._turqueseDiamond',}, marginBottom: 300, opacity: 1, duration: 0.6, delay: 0.6}),
    gsap.to('._turquesetinyDiamond',{ scrollTrigger: { trigger: '._turquesetinyDiamond',}, marginBottom: 180 , opacity: 1, duration: 0.6, delay: 0.6 })
    gsap.to('._blackDiamond  ',{ scrollTrigger: { trigger: '._blackDiamond',}, marginBottom: 100, opacity: 1, duration: 0.6, delay: 0.6}),
    gsap.to('._usdDiamond',{ scrollTrigger: { trigger: '._usdDiamond',}, marginBottom: 240 , opacity: 1, duration: 0.6, delay: 0.6 })
    gsap.to('._btcDiamond',{ scrollTrigger: { trigger: '._btcDiamond',}, marginBottom: 200 , opacity: 1, duration: 0.6, delay: 0.6 })

}

export default gsapStart
