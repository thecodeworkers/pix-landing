import React, { createRef } from 'react'
import { SEO } from '../components';
import { Navbar, Lang, Footer, Test, ScrollDown, AboutUs} from '../components';
import { withTrans } from '../i18n/withTrans';
import './styles/home.scss';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';
import axios from 'axios';

const Home = (props) => {
  const { t, i18n } = useTranslation();

  const div = React.useRef();

  const scrolling = (ref: any): void => {
      const target = ref.current;
      window.scrollTo({ top: target.offsetTop - 100, behavior: 'smooth' });
  }

  return (
    <div>
      <SEO title='Home' />
      <Navbar />

  
      <button onClick={ () => scrolling(div.current)} >hey </button>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
       {/* <AboutUs reference={div} scroll={scrolling}/> */}
      {/* <div ref={div}>

        <h1>hello world</h1> 
      </div> */}

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



    </div>

  )
}

export default withTrans(Home)
