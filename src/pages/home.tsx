import React from 'react'
import { SEO } from '../components';
import { Navbar, Lang, Footer, Test} from '../components';
import { withTrans } from '../i18n/withTrans';
import './styles/home.scss';
import { useTranslation } from 'react-i18next';

const Home = (props) => {

  const { t, i18n } = useTranslation()

  const sayHello = () => {
    console.log('hello world!');
  }

  return (

    <div> 
       <SEO title='Home' />
        <Navbar />
        <br></br><br></br><br></br>

         <Lang />
        <h1> {t('helloWorld')}</h1> 

        <Footer /> 
        <br></br><br></br><br></br><br></br><br></br><br></br>
        {/* <Test name='giber' anotherProp={sayHello} /> */}
    </div>
  )
}

export default withTrans(Home)
