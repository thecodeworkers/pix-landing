import React from 'react'
import { SEO } from '../components';
import { Navbar, Lang, Footer, Cards, Test, ScrollDown } from '../components';
import { withTrans } from '../i18n/withTrans';
import './styles/home.scss';
import { useTranslation } from 'react-i18next';

const Home = (props) => {
  const { t, i18n } = useTranslation()

  const scrolling = (id: string): void => {
      const target = document.getElementById(id);
      window.scrollTo({ top: target.offsetTop - 100, behavior: 'smooth' });
  }

  return (
    <div>
      <SEO title='Home' />
      <Navbar />
      <br></br><br></br><br></br>

      <Lang />
      <h1> {t('helloWorld')}</h1>
      
      <Cards />
      
      <Footer />
      <ScrollDown scrollTo={scrolling} landing='target_div'/>

      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <div id='target_div'>
        <h1>hello</h1>       
      </div>

    </div>
  )
}

export default withTrans(Home)
