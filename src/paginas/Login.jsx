// src/paginas/Login.jsx

import React from 'react';
import './Login.css';

const Login = () => {
  return (
    <div className="login-page-body">
      {/* NAV */}
      <header>
        <div className="logo"><span></span>VISIONPLUS</div>
        <nav>
          <a href="#" className="active">Inicio</a>
          <a href="#">Mi lista</a>
        </nav>
        <div className="search">
          <input type="text" placeholder="Buscar..." />
          <button>🔍</button>
        </div>
        <div className="right">
          <div><span className="i"></span>Perfil</div>
          <div><span className="i"></span>Notificaciones</div>
        </div>
      </header>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="hero-content">
          <h1>Stranger Things</h1>
          <p>Cuando un niño desaparece, sus amigos, la familia y la policía se ven envueltos en un misterio con fuerzas sobrenaturales.</p>
          <div className="buttons">
            <button className="btn btn-primary">Ver ahora</button>
            <button className="btn btn-secondary">Más info</button>
          </div>
        </div>
      </section>

      {/* TENDENCIAS */}
      <section className="section">
        <h2>Tendencias...</h2>
        <div className="movie-list">
          <div className="movie"><img src="veno.jpg" alt="Venom"/><div className="movie-title">Venom</div></div>
          <div className="movie"><img src="mon.jpg" alt="Monsters of War"/><div className="movie-title">Monsters of War</div></div>
          <div className="movie"><img src="ET.jpg" alt="ET"/><div className="movie-title">ET</div></div>
          <div className="movie"><img src="cas.jpg" alt="Cazador de Monstruos"/><div className="movie-title">Cazador de Monstruos</div></div>
          <div className="movie"><img src="jupi.jpg" alt="Jupiter Ascending"/><div className="movie-title">Jupiter Ascending</div></div>
          <div className="movie"><img src="troll.png" alt="Troll"/><div className="movie-title">Troll</div></div>
          <div className="movie"><img src="tua.jpg" alt="TUA"/><div className="movie-title">TUA</div></div>
          <div className="movie"><img src="st2.jpg" alt="The Strangers"/><div className="movie-title">The Strangers</div></div>
        </div>
      </section>
      
    </div>
  );
};

export default Login;