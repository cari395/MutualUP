import React, { useState } from 'react';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Products from './pages/Products';
import './App.css';
import Informacion from './pages/AboutUs';
import Cuotas from './pages/Cuotas';

const App = () => {
  const [user, setUser] = useState(null);
  return(
    <Router>
      <div className='App'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/productos" element={<Products />} />
            <Route path="/informacion" element={<Informacion/>}/>
            <Route path="/login" element={<Login setUser={setUser} />} />
            {user && (
            <Route path="/cuotas" element={<Cuotas />} />
          )}
          </Routes>
      </div>
    </Router>
  )
}

export default App;
