import React, { useState } from 'react';
import { SEO } from '../';
import { useTranslation } from 'react-i18next';
import { withTrans } from '../../i18n/withTrans';
import './style.scss';

const Language = (props) => {
  const { t, i18n } = useTranslation()
  const [lang, setLang ] = useState('en');

  const pickLanguage = (value: any): void => {
    const lang = value.target.id;
    i18n.changeLanguage(lang)
    lang == 'es' ? setLang('en') : setLang('es');
  }

  return (
    <div className='_parent'>
      <div className='_lang'>
        <a onClick={pickLanguage} id={lang} className='_langText'> {lang.toUpperCase()} </a>
      </div>
      <div className='_help'>HELP</div>
    </div>
    
  )
}

export default withTrans(Language)
