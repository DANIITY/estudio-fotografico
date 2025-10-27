import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './SesionesFotoIdentificacion.css';

function SesionesFotoIdentificacion() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [slideIndex] = useState(0);
  const navigate = useNavigate();

  const slides = [
    {
      url: "/imagenes/Identificacion1.jpg",
      titulo: "FOTOS DE IDENTIFICACIÓN",
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

      {/* SECCIÓN FOTOS DE IDENTIFICACIÓN */}
      <section className="servicios-credencial">
        <h2 className="titulo-seccion">📸 Fotos de Identificación</h2>
        <div className="grid-servicios">
          {[
            { nombre: "Título", precio: "2x$120", img: "/imagenes/titulo.jpg" },
            { nombre: "Diploma", precio: "2x$90", img: "/imagenes/diploma.png" },
            { nombre: "Filiación", precio: "4x$80", img: "/imagenes/filiacion.png" },
            { nombre: "Pasaporte", precio: "4x$80", img: "/imagenes/pasaporte.png" },
            { nombre: "Cartilla", precio: "4x$70", img: "/imagenes/cartilla.jpg" },
            { nombre: "Óvalo Miñón", precio: "4x$80", img: "/imagenes/ovalo.png" },
            { nombre: "Credencial", precio: "4x$80", img: "/imagenes/credencial.jpg" },
            { nombre: "Tamaño Visa", precio: "4x$80", img: "/imagenes/visa.png" },
            { nombre: "Infantil", precio: "7x$40 o $60", img: "/imagenes/infantil.png" },
          ].map((s, i) => (
            <div key={i} className="servicio-card">
              <img src={s.img} alt={s.nombre} className="servicio-img" />
              <div className="servicio-info">
                <h3>{s.nombre}</h3>
                <p className="precio">{s.precio}</p>
                <p>Papel fotográfico mate, a color o blanco y negro, con o sin retoque. <br />✨ Entrega en 1 hora.</p>
                <button 
                  className="btn-contratar" 
                  onClick={() => enviarMensaje(
                    `Fotos para ${s.nombre}`,
                    s.precio,
                    "Papel fotográfico mate, a color o blanco y negro, con o sin retoque. Entrega en 1 hora."
                  )}
                >
                  💬 Contratar servicio
                </button>
              </div>
            </div>
          ))}
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

export default SesionesFotoIdentificacion;
