// src/paginas/Register.jsx

import React from 'react';
import './Register.css';

const Register = ({ onRegisterSuccess }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("¡Cuenta creada con éxito! Serás redirigido a la página principal.");
    
    // 🔑 Llama a la función de navegación
    if (onRegisterSuccess) {
      onRegisterSuccess(); 
    }
  };

  return (
    <div className="register-page-body"> 
      <header>
        <div className="logo">
          <div className="logo-icon"></div>
          <div className="logo-text">VISIONPLUS</div>
        </div>
        <a href="#" className="regresar">Regresar</a> 
      </header>

      <div className="contenedor">
        <div className="card">
          <h1>Crear cuenta</h1>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Correo electrónico o usuario" required />
            <input type="password" placeholder="Contraseña" required />
            <input type="password" placeholder="Confirmar contraseña" required />
            <button type="submit">Crear Cuenta</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;