import React, { useEffect, useState } from 'react'
import { Navbar, Lang, Footer, Test, ScrollDown, AboutUs, Product, CardCurrency, Separator, Banner, SEO, BannerImage, Instant, Login, Store, Phone, OnBoarding } from '../components';
import { withTrans } from '../i18n/withTrans';
import { connect } from 'react-redux';
import './styles/home.scss';

const Home = (props) => {
  const { t, i18n, scroll, onboarding } = props;

  const [theme, setTheme] = useState(true);

  useEffect(() => {
    document.addEventListener('scroll', scrollPosition);

    return () => {
      document.removeEventListener('scroll', scrollPosition);
    }
  }, [theme]);

  const scrollPosition = () => {
    const position = window.scrollY;

    if (position < 2450) setTheme(true);
    if (position > 2450 && position <= 4200) setTheme(false);
    if (position > 4200) setTheme(true);
  }

  return (
    <div>
      <SEO title='Pix' />
      <Navbar />
      <OnBoarding />
      {
        onboarding.stepThree ?
          <div style={{ marginTop: '100vh' }}>
            <Login childrenTitle={t('digital_wallet')} />
            <Product product='product' />
            <Instant />
            <BannerImage childrenTitle={'PIX OTC'} isDark={theme} product='product' ><span className='_boldText'>{t('personal_service')}</span></BannerImage>
            <AboutUs theme={theme} />
            <Banner />
            <Store childrenTitle={t('have_power')} children={t('anyone')} />
            <Phone phone='phone' />
            <Footer />
          </div>
          : null}
    </div>
  );
}

const mapStateToProps = ({ scroll, onboarding }) => ({
  scroll, onboarding
});

export default connect(mapStateToProps)(withTrans(Home));
