import React from 'react'
import { SEO } from '../components';
import { Navbar, Lang, Footer } from '../components';
import { withTrans } from '../i18n/withTrans';
import './styles/home.scss';
import { useTranslation } from 'react-i18next';

const Home = (props) => {
  
  const { t, i18n } = useTranslation()

  return (
    <div>
       <SEO title='Home' />
        <Navbar />
        <br></br><br></br><br></br>

         <Lang />
        <h1> {t('helloWorld')}</h1> 

        <Footer />
    </div>
  )
}

export default withTrans(Home)
