import React from 'react'
import { SEO } from '../components';
import { Navbar, Lang, Footer, Test, ScrollDown } from '../components';
import { withTrans } from '../i18n/withTrans';
import './styles/home.scss';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

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
    
    </div>
  )
}

export default withTrans(Home)
