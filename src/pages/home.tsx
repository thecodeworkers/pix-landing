import React, { useEffect, useState } from 'react'
import { Navbar, Lang, Footer, Test, ScrollDown, AboutUs, Product, CardCurrency, Separator, Banner, SEO, BannerImage} from '../components';
import { withTrans } from '../i18n/withTrans';
import './styles/home.scss';
import { useTranslation } from 'react-i18next';

const Home = (props) => {
  const { t, i18n } = props;

  const [theme, setTheme] = useState(true);

  useEffect(() => {
    document.addEventListener('scroll', scrollPosition);
  }, [theme])

  const scrollPosition = () => {
    const position = window.scrollY;    
    if (position < 300) setTheme(true);
    if (position > 300 && position <= 1900) setTheme(false);
    if (position > 1900) setTheme(true);
  }

  return (
    <div>
      <SEO title='Home' />
      <Navbar />      
      <Banner />
      <BannerImage isDark={!theme} about='about'>Our mission is to accelerate the adoption of virtual assets with the smoothest user experience.</BannerImage>
      <AboutUs theme={theme}/>
      <BannerImage product='product'>Our mission is to accelerate the adoption of virtual assets with the smoothest user experience.</BannerImage>
      <Product />
      <Footer />
    </div>
  )
}

export default withTrans(Home);


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
      {/* <Separator /> */}


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
      
      {/* <Product /> */}



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