import React from 'react'
import { SEO } from '../components';
import { Navbar } from '../components';
import './styles/home.scss';
const Home = () => {

  return (
    <div>
       <SEO title='Home' />
       {/* <h1>Pix landing</h1> */}
        <Navbar />
    </div>
  )
}

export default Home
