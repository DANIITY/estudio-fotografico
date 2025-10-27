import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './SesionesCaritaBebe.css';

function SesionesCaritaBebe() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [slideIndex] = useState(0);
  const navigate = useNavigate();

  const slides = [
    {
      url: "/imagenes/carita1.jpg",
      titulo: "CARITAS DE BEBÉ",
    },
  ];

  const toggleMenu = () => setMenuAbierto(!menuAbierto);

  const enviarMensaje = (servicio, precio, detalles) => {
    const mensaje = encodeURIComponent(
      `Hola Daniel , me interesa el servicio de ${servicio} (${precio}).\n\nDetalles:\n${detalles}\n\n¿Podrías darme más información?`
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
              <li><Link to="/sesiones/impresioncredencialpvc">Credenciales PVC</Link></li>
              <li><Link to="/sesiones/caritabebe">Caritas de Bebé</Link></li>
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
      <section id="inicio" className="hero-carita">
        <div 
          className="hero-slide-carita" 
          style={{ backgroundImage: `url(${slides[slideIndex].url})` }}
        >
          <div className="hero-overlay-carita">
            <h2>{slides[slideIndex].titulo}</h2>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE PRECIOS */}
      <section className="servicios-carita">
        <h2 className="titulo-seccion">PRECIOS CARITAS DE BEBÉ</h2>
        <div className="grid-servicios">
          {[
            { nombre: "Tamaño 11x14 pulgadas", precio: "$1,100", img: "/imagenes/carita2.jpg" },
            { nombre: "Tamaño 16x20 pulgadas", precio: "$1,350", img: "/imagenes/carita3.jpg" },
            { nombre: "Tamaño 20x24 pulgadas", precio: "$1,600", img: "/imagenes/carita4.jpg" },
          ].map((s, i) => (
            <div key={i} className="servicio-card">
              <img src={s.img} alt={s.nombre} className="servicio-img" />
              <div className="servicio-info">
                <h3>{s.nombre}</h3>
                <p className="precio">{s.precio}</p>
                <ul>
                  <li>✅ Sesión de fotos en estudio (opcional se pueden usar fotos proporcionadas)</li>
                  <li>✅ Diseño con temática personalizada, aprobado antes de enmarcar</li>
                  <li>✅ 5 caritas impresas en tamaño 5x7 pulgadas, editadas</li>
                  <li>✅ Cuadro con marco y textura o en poliéster (varios modelos)</li>
                  <li>✅ Galería web de regalo con todas las fotos</li>
                  <li>✅ Archivos en alta calidad (en USB proporcionada)</li>
                </ul>
                <button 
                  className="btn-contratar" 
                  onClick={() => enviarMensaje(
                    `Caritas de Bebé - ${s.nombre}`,
                    s.precio,
                    "Incluye sesión de fotos, diseño temático personalizado, 5 caritas impresas 5x7, cuadro con textura o poliéster, galería web y archivos en alta calidad."
                  )}
                >
                  💬 Contratar servicio
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer-carita">
        <p>© {new Date().getFullYear()} Mundo Digital - Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default SesionesCaritaBebe;
