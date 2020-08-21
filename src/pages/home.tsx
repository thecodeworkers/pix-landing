import React, { useEffect, useState } from 'react'
import { Navbar, Lang, Footer, Test, ScrollDown, AboutUs, Product, CardCurrency, Separator, Banner, SEO, BannerImage, Instant, Login, Store, Phone, OnBoarding } from '../components';
import { withTrans } from '../i18n/withTrans';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './styles/home.scss';

const Home = (props) => {
  const { t, i18n, scroll, onboarding} = props;

  const [theme, setTheme] = useState(true);

  useEffect(() => {
    document.addEventListener('scroll', scrollPosition);

    return () => {
      document.removeEventListener('scroll', scrollPosition);
    }
  }, [theme])

  const scrollPosition = () => {
    const position = window.scrollY;
    if (position < 300) setTheme(true);
    if (position > 300 && position <= 1900) setTheme(false);
    if (position > 1900) setTheme(true);
  }

  return (
    <div>
       <SEO title='Pix' />
      <Navbar />
      <OnBoarding /> 

      <div style={{marginTop: '100vh'}}>

{
  onboarding.stepThree ? <> <Login childrenTitle={t('digital_wallet')} />
  <Product product='product' />
  <Instant />
  <BannerImage childrenTitle={'PIX OTC'} isDark={theme} product='product' ><span className='_boldText'>{t('personal_service')}</span></BannerImage>
  <AboutUs theme={!theme} />
  <Banner />
  <Store childrenTitle={t('have_power')} children={t('anyone')} />
  <Phone />
  <Footer /> </> : null
}

</div>
  {/*  <BannerImage  about='about'>{t('allowing')} <span className='_boldText'>{t('send')}</span>, <span className='_boldText'>{t('receive')}</span> {t('and')} <span className='_boldText'>{t('quickly')}</span> {t('withdraw_funds')}</BannerImage>
  {/*  <Benefits /> */}
    
    </div>
  )
}

const mapStateToProps = ({scroll, onboarding }) => ({
  scroll, onboarding
});

const mapDispatchToProps = dispatch => {
  const actions = {

  }

  return {
    action: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withTrans(Home));



{/* <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br /> */}

{/* <AboutUs reference={test} scroll={scrolling} theme={theme} />
      <CardCurrency /> */}
{/* <Separator /> */ }


{/* <div ref={div} className={theme ? '_testing' : '_class'}>

        <h1>hello world</h1> 
      </div> */}


{/* <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br /> */}
{/* 
      <div ref={test}>
        <p>test</p>
      </div> */}

{/* <Product /> */ }



{/* 
    <div className=' bb'>
      <div>
        <p>ETH</p>
      </div>
    </div> */}

{/* 
<div className="rainbow">
  <div className='square'>
    <p>sadasdas</p>
  </div>
	Rainbow border
</div> */}