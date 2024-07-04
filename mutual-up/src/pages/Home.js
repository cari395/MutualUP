import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductList from '../components/ProductList';
import Cover from '../components/Cover';
import AboutUs from '../components/AboutUs';


const Home = () => {
  return(
    <div className='home'>
      
      <Header/>
      <Cover/>
      
      <h2>Bienvenidos a la tienda</h2>
      <ProductList/>
      <AboutUs/>
      <Footer className='footer'/> 
      
    </div>
  )
}
export default Home;