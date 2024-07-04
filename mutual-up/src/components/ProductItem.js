import React from 'react'

const ProductItem = ({product}) => {
    return(
      <div className='product-item'>
        <h4>{product.name}</h4>
        <p>Precio: {product.price}</p>
        <button>Agregar al carrito</button>
      </div>
    )
}

export default ProductItem;