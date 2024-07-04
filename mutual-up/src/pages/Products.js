// Products.js

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Products = () => {
  // Ejemplo de lista de productos (puedes ajustar según tus datos reales)
  const products = [
    { id: 1, name: 'Producto 1', price: 100 },
    { id: 2, name: 'Producto 2', price: 150 },
    { id: 3, name: 'Producto 3', price: 200 },
    { id: 4, name: 'Producto 1', price: 1000 },
    { id: 5, name: 'Producto 2', price: 1500 },
    { id: 6, name: 'Producto 3', price: 2000 },

  ];

  return (
    <div>
        <Header/>
      
      <div className="products-container">
        <h2>Nuestros Productos</h2>
        <div className="product-list">
          {products.map(product => (
            <div key={product.id} className="product-item">
              <h3>{product.name}</h3>
              <p>Precio: ${product.price}</p>
              <button>Agregar al carrito</button>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Products;