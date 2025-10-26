import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Portafolio.css';

function Portafolio() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  // --- HERO PRINCIPAL ---
  const [slideIndex] = useState(0);
  const slides = [
    {url: "/imagenes/Portafolio.jpg",
      titulo: "PORTAFOLIO",
    },
  ];
  const toggleMenu = () => setMenuAbierto(!menuAbierto);
  
  // --- SECCIONES DEL PORTAFOLIO ---
  const servicios = [
    {
      titulo: "BASES Y CUADROS ESCOLARES",
      imagenes: ["/imagenes/Base1.png", "/imagenes/Base2.png", "/imagenes/Base3.png", "/imagenes/Base4.png", "/imagenes/Base5.png", "/imagenes/Base6.png", "/imagenes/Base7.png", "/imagenes/Base8.png", "/imagenes/Base9.png", "/imagenes/Base10.png", "/imagenes/Base11.png", "/imagenes/Base12.png"],
      videos: [],
    },
    {
      titulo: "Impresión de credencial de PVC",
      imagenes: ["/imagenes/Identificacion1.jpg","/imagenes/Identificacion2.jpg","/imagenes/Identificacion3.jpg","/imagenes/Identificacion4.jpg","/imagenes/Identificacion5.jpg"],
      videos: [],
    },
    {
      titulo: "Caritas de Bebé",
      imagenes: ["/imagenes/Carita1.jpg","/imagenes/Carita2.jpg","/imagenes/Carita3.jpg","/imagenes/Carita4.jpg","/imagenes/Carita5.jpg","/imagenes/Carita6.jpg","/imagenes/Carita7.jpg","/imagenes/Carita8.jpg","/imagenes/Carita9.jpg","/imagenes/Carita10.jpg","/imagenes/Carita11.jpg","/imagenes/Carita12.jpg"],
      videos: [],
    },
    {
      titulo: "BODAS",
      imagenes: ["/imagenes/Boda2.jpg","/imagenes/Boda3.jpg","/imagenes/Boda4.jpg","/imagenes/Boda5.jpg","/imagenes/Boda6.jpg","/imagenes/Boda7.jpg",],
      videos: ["/videos/boda 1.mp4","/videos/boda 2.mp4"],
    },
    {
      titulo: "XV años",
      imagenes: ["/imagenes/XV6.jpg","/imagenes/XV7.jpg","/imagenes/XV8.jpg","/imagenes/XV9.jpg","/imagenes/XV10.jpg","/imagenes/XV11.jpg","/imagenes/XV12.jpg","/imagenes/XV13.jpg"],
      videos: ["/videos/ViXV1.mp4","/videos/ViXV2.mp4","/videos/ViXV3.mp4"],
    },
    {
      titulo: "Graduaciones",
      imagenes: ["/imagenes/graduacion1.jpg","/imagenes/graduacion4.jpg","/imagenes/graduacion5.jpg","/imagenes/graduacion6.jpg","/imagenes/graduacion7.jpeg",],
      videos: [],
    },
    {
      titulo: "Bautizos",
      imagenes: ["/imagenes/bautizo1.jpg","/imagenes/bautizo2.jpg","/imagenes/bautizo3.jpg","/imagenes/bautizo4.jpg",],
      videos: [],
    },
    {
      titulo: "Primera Comunión",
      imagenes: ["/imagenes/comunion1.jpg","/imagenes/comunion2.jpg",],
      videos: [],
    },
  ];

  return (
    <div>
      {/* NAVBAR */}
      <nav className="navbar">
        <img src='/logoMundo.png' alt="Logo" className="logo-img" />
        <button className="menu-toggle" onClick={toggleMenu}>☰</button>

        <ul className={`menu ${menuAbierto ? 'menu-activo' : ''}`}>
          <li><Link to="/" onClick={() => setMenuAbierto(false)}>Inicio</Link></li>

          {/* SUBMENÚ SESIONES */}
          <li className="submenu">
            <span>Sesiones</span>
            <ul className="submenu-items">
              <li><Link to="/sesiones/cuadrosybasesescolares" onClick={() => setMenuAbierto(false)}>Cuadros y Bases Escolares</Link></li>
              <li><Link to="/sesiones/impresioncredencialpvc" onClick={() => setMenuAbierto(false)}>Impresión de Credencial PVC</Link></li>
              <li><Link to="/sesiones/caritabebe" onClick={() => setMenuAbierto(false)}>Caritas de bebé</Link></li>
              <li><Link to="/sesiones/fotoidentificacion" onClick={() => setMenuAbierto(false)}>Fotos de Estudio</Link></li>
            </ul>
          </li>

          {/* BODA */}
          <li><Link to="/boda" onClick={() => setMenuAbierto(false)}>Boda</Link></li>

          {/* SUBMENÚ EVENTOS */}
          <li className="submenu">
            <span>Eventos</span>
            <ul className="submenu-items">
              <li><Link to="/eventos/xv" onClick={() => setMenuAbierto(false)}>XV Años</Link></li>
              <li><Link to="/eventos/bautizo" onClick={() => setMenuAbierto(false)}>Bautizos</Link></li>
              <li><Link to="/eventos/graduacion" onClick={() => setMenuAbierto(false)}>Graduaciones</Link></li>
              <li><Link to="/eventos/comunion" onClick={() => setMenuAbierto(false)}>Primera Comunión</Link></li>
            </ul>

          </li>
          <li><Link to="/portafolio" onClick={() => setMenuAbierto(false)}>Portafolio</Link></li>
          <li><Link to="/contacto" onClick={() => setMenuAbierto(false)}>Contacto</Link></li>
        </ul>
      </nav>
      
      {/* HERO */}
      <section id="inicio" className="hero-portafolio">
        <div
        className="hero-slide-portafolio"
        style={{ backgroundImage: `url(${slides[slideIndex].url})` }}
        >
          <div className="hero-overlay-portafolio">
            <h2>{slides[slideIndex].titulo}</h2>
          </div>
        </div>
      </section>

      {/* SECCIONES DEL PORTAFOLIO */}
      <section className="servicios-container">
        {servicios.map((servicio, index) => (
          <div key={index} className="servicio-section">
            <h2 className="titulo">{servicio.titulo}</h2>
            <div className={`contenido ${servicio.videos.length === 0 ? "solo-imagenes" : ""}`}>
              <div className="imagenes">
                {servicio.imagenes.map((img, i) => (
                  <img key={i} src={img} alt={`img-${i}`} />
                ))}
              </div>
              {servicio.videos.length > 0 && (
                <div className="videos">
                  {servicio.videos.map((vid, i) => (
                    <video key={i} controls>
                      <source src={vid} type="video/mp4" />
                      Tu navegador no soporta videos.
                    </video>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
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
      <footer className="footer-portafolio">
        <p>© {new Date().getFullYear()} Mundo Digital - Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default Portafolio;