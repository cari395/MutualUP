import React from 'react'

import ProductItem from '../components/ProductItem';

const products = [
  { id: 1, name: 'Producto 1', price: 100 },
  { id: 2, name: 'Producto 2', price: 150 },
  { id: 3, name: 'Producto 3', price: 200 },
];

const ProductList = () => {
  return (
    <div>
      <h3>Productos disponibles</h3>
      <div className="product-list">
        {products.map(product => (
            <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductList;