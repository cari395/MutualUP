import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Login = ({setUser}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useNavigate();
    const handleLogin = (e) => {
      e.preventDefault();
      if (username === 'usuario' && password === 'password') {
        setUser({ username });
        history.push('/cuotas'); // Redirige a la página de cuotas
      } else {
        alert('Credenciales incorrectas');
      }
      console.log("Usuario autenticado");
    }
  return(
    <div>
        <Header/>
      <div className='login-container'>
        <h2>Iniciar sesión</h2>
        <form onSubmit={handleLogin} className='login-form'>
          <label>Usuario: 
            <input type='text' placeholder='Ingrese su nombre de usuario' value={username} onChange={(e) => setUsername(e.target.value)}></input>
          </label>
          <label>
            <input type='password' placeholder='Ingrese su contraseña' value={password} onChange={(e) => setPassword(e.target.value)}></input>
          </label>
          <button>Iniciar sesion</button>
        </form>
      </div>
      <Footer/>
    </div>
  )
}

export default Login;