import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './SesionesImpresionCredencialPVC.css';

function SesionesImpresionCredencialPVC() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [slideIndex] = useState(0);
  const navigate = useNavigate();

  const slides = [
    {
      url: "/imagenes/Identificacion1.jpg",
      titulo: "IMPRESIÓN DE CREDENCIALES EN PVC",
    },
  ];

  const toggleMenu = () => setMenuAbierto(!menuAbierto);

  const enviarMensaje = (servicio, precio, detalles) => {
    const mensaje = encodeURIComponent(
      `Hola Daniel, me interesa el servicio de ${servicio} (${precio}).\n\nDetalles:\n${detalles}\n\n¿Podrías darme más información?`
    );
    window.open(`https://wa.me/5610912232?text=${mensaje}`, "_blank");

    alert("✅ Tu mensaje se ha enviado con éxito al fotógrafo.");
    navigate("/");
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
              <li><Link to="/sesiones/fotoestudio" onClick={() => setMenuAbierto(false)}>Fotos de Estudio</Link></li>
              <li><Link to="/sesiones/fotoidentificacion" onClick={() => setMenuAbierto(false)}>Fotos de Identificación</Link></li>
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
      <section id="inicio" className="hero-credencial">
        <div 
          className="hero-slide-credencial" 
          style={{ backgroundImage: `url(${slides[slideIndex].url})` }}
        >
          <div className="hero-overlay-credencial">
            <h2>{slides[slideIndex].titulo}</h2>
          </div>
        </div>
      </section>
      
      {/* SECCIÓN CREDENCIALES */}
      <section className="credenciales-section">
        <h2 className="titulo-seccion">🪪 Credenciales PVC</h2>
        <div className="credenciales-card">
          <img src="/imagenes/Identificacion4.jpg" alt="Credencial PVC" className="servicio-img" />
          <div className="servicio-info">
            <ul>
              <li>💵 Precio individual: <strong>$80 (con diseño)</strong></li>
              
            </ul>
            <button 
              className="btn-contratar" 
              onClick={() => enviarMensaje(
                "Credenciales PVC",
                "Desde $25 hasta $80",
                "Precio individual $80 con diseño"
              )}
            >
              💬 Contratar servicio
            </button>
            <ul>
              <li>💰 Precio mayoreo: <strong>$40</strong></li>
            </ul>
            <button 
              className="btn-contratar" 
              onClick={() => enviarMensaje(
                "Credenciales PVC",
                "Desde $25 hasta $80",
                " Precio mayoreo $40"
              )}
            >
              💬 Contratar servicio
            </button>
            <ul>
              <li>🖨️ Solo impresión en credencial: <strong>$25</strong></li>
            </ul>
            <button 
              className="btn-contratar" 
              onClick={() => enviarMensaje(
                "Credenciales PVC",
                "Desde $25 hasta $80",
                "Impresión en credencial $25."
              )}
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
      <footer className="footer-credencial">
        <p>© {new Date().getFullYear()} Mundo Digital - Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default SesionesImpresionCredencialPVC;
