import React, { useState, useEffect } from 'react';
import { SEO } from '../';
import { useTranslation } from 'react-i18next';
import { withTrans } from '../../i18n/withTrans';
import './style.scss';

const Language = (props) => {
  const { t, i18n } = useTranslation()
  const [lang, setLang] = useState('en');
  const [float, setFloat] = useState(false);
  useEffect(() => {
    document.addEventListener('scroll', floatButton);

  }, [])

  const floatButton = () => {
    const position = window.scrollY;
    if (position == 0) setFloat(false);
    if (position > 0) setFloat(true);
  }

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
      <a className='_link' href='https://api.whatsapp.com/send?phone=584242012127&text=%20!' target='_blankspace'>
     
        <div className={!float ? '_help' : '_float'} >
          <span className="material-icons">chat</span>
        </div>
        </a>

      
    </div>
  )
}

export default withTrans(Language)
