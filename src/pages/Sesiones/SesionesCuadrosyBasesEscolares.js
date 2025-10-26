import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './SesionesCuadrosyBasesEscolares.css';

function SesionesCuadrosyBasesEscolares() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [slideIndex] = useState(0);
  const navigate = useNavigate();

  const slides = [
    {
      url: "/imagenes/Base.jpg",
      titulo: "CUADROS Y BASES ESCOLARES",
    },
  ];

  const toggleMenu = () => setMenuAbierto(!menuAbierto);

  const enviarMensaje = (servicio, precio, detalles) => {
    const mensaje = encodeURIComponent(
      `Hola Daniel, me interesa el servicio de ${servicio} ${precio}.\n\n ¿Podrías darme más información?`
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
              <li><Link to="/sesiones/impresioncredencialpvc" onClick={() => setMenuAbierto(false)}>Impresión de Credencial PVC</Link></li>
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
      <section id="inicio" className="hero-cuadros">
        <div 
          className="hero-slide-cuadros" 
          style={{ backgroundImage: `url(${slides[slideIndex].url})` }}
        >
          <div className="hero-overlay-cuadros">
            <h2>{slides[slideIndex].titulo}</h2>
          </div>
        </div>
      </section>

      {/* SECCIÓN MARCOS */}
      <section className="marcos-section">
        <h2 className="titulo-seccion">📏 Marcos, Modelos Y Medidas</h2>
        <p className="descripcion-marcos">
          Consulta nuestro catálogo de molduras y precios de cuadros.  
          Cada marco es totalmente personalizable en color y tamaño.
        </p>
        <div className="catalogo-marcos">
          <img src="/imagenes/Base1.png" alt="Catálogo Marcos 1" />
          <img src="/imagenes/Base2.png" alt="Catálogo Marcos 2" />
        </div>

        <a 
          href="/archivos/Catalogo marcos MUNDO DIGITAL 2025.pdf" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-contratar"
        >
          📖 Ver catálogo completo de marcos
        </a>
      </section>

      {/* SECCIÓN BASES ESCOLARES */}
      <section className="bases-section">
        <h2 className="titulo-seccion">🎓 Bases Escolares</h2>
        <p className="descripcion-marcos">
          Contamos con una gran variedad de bases escolares y cuadros para  
          fin de curso o graduación. Los precios varían según el tamaño y diseño.
        </p>
        <button 
          className="btn-contratar"
          onClick={() => enviarMensaje(
            "Bases Escolares",
            "Me gustaría cotizar una base escolar (Nota: Los precios varían según tamaño y diseño.)"
          )}
        >
          💬 Cotizar por WhatsApp
        </button>
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
      <footer className="footer-cuadros">
        <p>© {new Date().getFullYear()} Mundo Digital - Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default SesionesCuadrosyBasesEscolares;