import React from 'react'
import coverImage from '../assets/portada.png';

const Cover = () => {
  return(
    <div className='cover'>
      <img src={coverImage} alt="Portada de la obra social" />
    </div>
  )
}

export default Cover;