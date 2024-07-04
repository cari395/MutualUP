import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AboutUs from '../components/AboutUs'

const Informacion = () => {
  return(
    <div className='info-container'>
      <Header/>
      <AboutUs/>
      <Footer/>
    </div>
  )
}

export default Informacion;