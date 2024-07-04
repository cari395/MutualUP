// components/AboutUs.js

import React from 'react';
import aboutUsImage from '../assets/informacion.jpg'
import Mapa from './Map';
const AboutUs = () => {
  return (
    <div className='about-us'>
      <div className='about-us-content'>
        <div className='image-container'>
          <img src={aboutUsImage} alt='Imagen sobre nosotros' />
        </div>
        <div className='text-container'>
          <h2>Información sobre nosotros</h2>
          <p>
          La Mutual Unidad Popular nació en La Plata, en el año 2012. Fue creada por la necesidad puntual de trabajadores y trabajadoras de la economía popular de poder contar con una herramienta que les permitiera lograr beneficios comunes.</p>

          <p>Somos una construcción colectiva inspirada en los valores de la solidaridad y el apoyo mutuo. Creemos que en tiempos de incertidumbre y crisis económica es necesario reconstruir los lazos sociales, culturales y económicos que nos permitan afrontar los desafíos que tenemos por delante.</p>

          <p>Somos una comunidad que busca el bienestar de sus socios y para ello nos enfocamos en la salud, la economía y el esparcimiento.</p>
          
        </div>
      </div>
      <Mapa/>
    </div>
  );
};

export default AboutUs;
