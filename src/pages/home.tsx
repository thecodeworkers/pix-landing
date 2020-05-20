import React, { useEffect, useState } from 'react'
import { SEO } from '../components';
import { Navbar, Lang, Footer, Test, ScrollDown, AboutUs, Product, CardCurrency, Separator, Banner } from '../components';
import { withTrans } from '../i18n/withTrans';
import './styles/home.scss';
import { useTranslation } from 'react-i18next';

const Home = (props) => {
  const { t, i18n } = useTranslation();

  const [theme, setTheme] = useState(true);

  const test = React.useRef();

  const scrolling = (ref: any): void => {
    const target = ref.current;
    window.scrollTo({ top: target.offsetTop - 100, behavior: 'smooth' });
  }

  useEffect(() => {
    document.addEventListener('scroll', scrollPosition);
  }, [theme])

  const scrollPosition = () => {
    const position = window.scrollY;
    if (position < 400) setTheme(true);
    if (position > 400 && position <= 900) setTheme(false);
    if (position > 900) setTheme(true);
  }

  return (
    <div>
      <SEO title='Home' />
      <Navbar />
      <Banner />
      <AboutUs theme={theme} />
      <Product />
      <Footer />
    </div>

  )
}

export default withTrans(Home)


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