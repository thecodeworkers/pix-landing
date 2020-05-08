import React from 'react'
import { SEO } from '../components';
import { Navbar } from '../components';
import { withTrans } from '../i18n/withTrans';
import './styles/home.scss';
import { useTranslation } from 'react-i18next';

import {
  Label,
  Input
} from 'reactstrap';
const Home = (props) => {
  
  const { t, i18n } = useTranslation()

  const changeValue = (value) => {
  i18n.changeLanguage(value.target.value)
  console.log(value.target.value);
  
  }
  return (
    <div>
       <SEO title='Home' />
        <Navbar />
        <br></br><br></br><br></br>
       <h1> {t('helloWorld')}</h1>

       <Label for="exampleSelectMulti" sm={2}>Select Multiple</Label>
          <Input type="select" name="selectMulti" id="exampleSelectMulti" className='w-200' onChange={(value) => changeValue(value)}>
            <option value='es'>ES </option>
            <option value='en'>EN </option>
          </Input>
    </div>
  )
}

export default withTrans(Home)
