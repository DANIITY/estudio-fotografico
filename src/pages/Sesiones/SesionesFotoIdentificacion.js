import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './SesionesFotoIdentificacion.css';

function SesionesFotoIdentificacion() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [slideIndex] = useState(0);
  const navigate = useNavigate();

  const slides = [
    {
      url: "/imagenes/estudio.jpeg",
      titulo: "FOTOS DE ESTUDIO",
    },
  ];

  const toggleMenu = () => setMenuAbierto(!menuAbierto);

  // ✅ Función para enviar mensaje de WhatsApp
  const enviarWhatsApp = (servicio) => {
    let mensaje = "";

    if (servicio === "estudio") {
      mensaje = `¡Hola! 👋 Me interesa contratar la *Sesión de fotos de estudio* 📸.
      - Precio: $1,000
      Incluye:
      - Aproximadamente 45 min hasta 2 horas de sesión.
      - Hasta 3 cambios de vestuario.
      - Entrega de todos los archivos originales de la sesión.
      - 5 fotos digitales retocadas en alta calidad.`;
    } else if (servicio === "locacion") {
      mensaje = `¡Hola Daniel! Me interesa contratar la *Sesión de fotos a locación* 🏞️.
      - Precio: $1,500
      Incluye:
      - Aproximadamente 45 min hasta 2 horas de sesión.
      - Hasta 3 cambios de vestuario.
      - Entrega de todos los archivos originales de la sesión.
      - 5 fotos digitales retocadas en alta calidad.
      Nota: El precio puede variar según la distancia del lugar por viáticos.)`;
    }

    const numero = "5610912232";
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

    // Abrir WhatsApp
    window.open(url, "_blank");

    // Mostrar mensaje de éxito
    setTimeout(() => {
      alert("✅ Tu mensaje se ha enviado con éxito al fotógrafo.");
      navigate("/"); // Redirige a la página principal
    }, 1500);
  };

  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar">
        <img src='/logoMundo.png' alt="Logo" className="logo-img" />
        <button className="menu-toggle" onClick={toggleMenu}>☰</button>

        <ul className={`menu ${menuAbierto ? 'menu-activo' : ''}`}>
          <li><Link to="/" onClick={() => setMenuAbierto(false)}>Inicio</Link></li>

          <li className="submenu">
            <span>Sesiones</span>
            <ul className="submenu-items">
              <li><Link to="/sesiones/cuadrosybasesescolares">Cuadros y Bases Escolares</Link></li>
              <li><Link to="/sesiones/impresioncredencialpvc">Impresión de Credencial PVC</Link></li>
              <li><Link to="/sesiones/caritabebe">Caritas de bebé</Link></li>
              <li><Link to="/sesiones/fotoidentificacion" onClick={() => setMenuAbierto(false)}>Fotos de Estudio</Link></li>
            </ul>
          </li>

          <li><Link to="/boda">Boda</Link></li>

          <li className="submenu">
            <span>Eventos</span>
            <ul className="submenu-items">
              <li><Link to="/eventos/xv">XV Años</Link></li>
              <li><Link to="/eventos/bautizo">Bautizos</Link></li>
              <li><Link to="/eventos/graduacion">Graduaciones</Link></li>
              <li><Link to="/eventos/comunion">Primera Comunión</Link></li>
            </ul>
          </li>

          <li><Link to="/portafolio">Portafolio</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </nav>

      {/* HERO */}
      <section id="inicio" className="hero-identificacion">
        <div 
          className="hero-slide-identificacion" 
          style={{ backgroundImage: `url(${slides[slideIndex].url})` }}
        >
          <div className="hero-overlay-identificacion">
            <h2>{slides[slideIndex].titulo}</h2>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className="servicios-identificacion">
        <p className='slogan-tabs'>Capturamos tus mejores momentos con calidad, estilo y emoción, haciendo sesiones profesionales de fotografía para que cada imagen cuente tu historia, escogiendo algún servicio de su agrado</p>
        <div className="servicio-card">
          <img src="/imagenes/sesionfoto.jpg" alt="Sesión en estudio" className="servicio-img"/>
          <div className="servicio-info">
            <h3>📸 Sesión de fotos de estudio</h3>
            <p className="precio">$1,000</p>
            <ul>
              <li>✨ Incluye aproximadamente 45 min hasta 2 horas de sesión.</li>
              <li>✨ Hasta 3 cambios de vestuario.</li>
              <li>✨ Entrega de todos los archivos originales de la sesión.</li>
              <li>✨ 5 fotos digitales retocadas en alta calidad.</li>
            </ul>
            <button 
              className="btn-contratar" 
              onClick={() => enviarWhatsApp("estudio")}
            >
              💬 Contratar servicio
            </button>
          </div>
        </div>

        <div className="servicio-card">
          <img src="/imagenes/Sesión fotográfica a locación.jpg" alt="Sesión en locación" className="servicio-img"/>
          <div className="servicio-info">
            <h3>🏞️ Sesión de fotos a locación</h3>
            <p className="precio">$1,500</p>
            <p className="nota">(Depende del lugar por distancia, puede subir el precio por viáticos)</p>
            <ul>
              <li>✨ Incluye aproximadamente 45 min hasta 2 horas de sesión.</li>
              <li>✨ Hasta 3 cambios de vestuario.</li>
              <li>✨ Entrega de todos los archivos originales de la sesión.</li>
              <li>✨ 5 fotos digitales retocadas en alta calidad.</li>
            </ul>
            <button 
              className="btn-contratar" 
              onClick={() => enviarWhatsApp("locacion")}
            >
              💬 Contratar servicio
            </button>
          </div>
        </div>
      </section>

      {/* BOTÓN FLOTANTE WHATSAPP */}
      <a
        href="https://wa.me/5610912232"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
          alt="WhatsApp"
        />
      </a>

      {/* FOOTER */}
      <footer className="footer-identificacion">
        <p>© {new Date().getFullYear()} Mundo Digital - Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default SesionesFotoIdentificacion;
