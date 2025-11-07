// src/paginas/App.jsx

import React, { useState } from 'react';
import Register from './Register'; 
import Login from './Login';      // Página principal / Dashboard

const App = () => {
  // 🔑 CLAVE: El estado inicia en FALSE para mostrar el componente <Register />
  const [isRegistered, setIsRegistered] = useState(false);

  // Función que cambia el estado a TRUE para navegar a Login
  const handleRegisterSuccess = () => {
    setIsRegistered(true); 
  };

  return (
    <div className="App">
      {/* Muestra Register si isRegistered es FALSE, si es TRUE muestra Login */}
      {!isRegistered ? (
        <Register onRegisterSuccess={handleRegisterSuccess} />
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;