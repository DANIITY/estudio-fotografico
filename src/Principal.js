import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from "react-router-dom";
import './Principal.css';

function Principal() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  // --- HERO PRINCIPAL ---
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    {
      url: "/imagenes/XV1.jpg",
      titulo: "Fotografías Profesionales",
      descripcion: "Más que buenas fotos: entrega rápida, indicaciones precisas y resultados que superan expectativas."
    },
    {
      url: "/imagenes/Boda1.jpg",
      titulo: "Fotografía de Bodas",
      descripcion: "Capturamos los mejores momentos de tu día especial para que los revivas por siempre."
    },
    {
      url: "/imagenes/Evento1.jpg",
      titulo: "Eventos y Cobertura",
      descripcion: "Cobertura profesional para aquellas fiestas o eventos que son de suma importancia."
    }
  ];

  const siguienteSlide = useCallback(
    () => setSlideIndex((prev) => (prev + 1) % slides.length),
    [slides.length]
  );

  const anteriorSlide = useCallback(
    () => setSlideIndex((prev) => (prev - 1 + slides.length) % slides.length),
    [slides.length]
  );

  useEffect(() => {
    const intervalo = setInterval(siguienteSlide, 9000);
    return () => clearInterval(intervalo);
  }, [siguienteSlide]);

  // --- CARRUSEL MINIATURAS ---
  const [miniIndex, setMiniIndex] = useState(0);

  const miniaturas = [
    "/imagenes/Bautizo1.jpg",
    "/imagenes/Boda2.jpg",
    "/imagenes/Foto1.jpg",
    "/imagenes/Graduacion1.jpg",
    "/imagenes/Comunion1.jpg",
    "/imagenes/XV2.jpg",
    "/imagenes/Bautizo2.jpg",
  ];

  const totalMini = miniaturas.length;

  const siguienteMini = useCallback(
    () => setMiniIndex((prev) => (prev + 1) % totalMini),
    [totalMini]
  );

  const anteriorMini = useCallback(
    () => setMiniIndex((prev) => (prev - 1 + totalMini) % totalMini),
    [totalMini]
  );

  const toggleMenu = () => setMenuAbierto(!menuAbierto);

  // --- EFECTO "mantener presionado/hover" en los botones del carrusel ---
  const scrollInterval = useRef(null);

  const startScroll = (direction) => {
    if (scrollInterval.current) return;
    scrollInterval.current = setInterval(() => {
      if (direction === "left") {
        anteriorMini();
      } else {
        siguienteMini();
      }
    }, 900);
  };

  const stopScroll = () => {
    clearInterval(scrollInterval.current);
    scrollInterval.current = null;
  };

  // --- GALERÍA ESTILO INSTAGRAM ---
  const imagenesGaleria = [
    "/imagenes/Boda3.jpg",
    "/imagenes/bautizo3.jpg",
    "/imagenes/XV3.jpg",
    "/imagenes/Foto2.jpg",
    "/imagenes/Graduacion2.jpg",
    "/imagenes/XV4.jpg",
    "/imagenes/Boda4.jpg",
    "/imagenes/XV5.jpg",
    "/imagenes/bautizo2.jpg",
    "/imagenes/XV2.jpg",
    "/imagenes/Foto3.jpg",
    "/imagenes/Comunion2.jpg",
    "/imagenes/Graduacion3.jpg",
    "/imagenes/Boda2.jpg",
    "/imagenes/Foto1.jpg",
  ];
  const [cantidad, setCantidad] = useState(9);
  const cargarMas = () => setCantidad((prev) => prev + 3);

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
      <section id="inicio" className="hero">
        <div 
          className="hero-slide" 
          style={{ backgroundImage: `url(${slides[slideIndex].url})` }}
        >
          <div className="hero-overlay">
            <h2>{slides[slideIndex].titulo}</h2>
            <p>{slides[slideIndex].descripcion}</p>
          </div>
          <button className="btn-left" onClick={anteriorSlide}>‹</button>
          <button className="btn-right" onClick={siguienteSlide}>›</button>
        </div>
      </section>

      {/* CARRUSEL MINIATURAS */}
      <section className="galeria">
        <button 
          className="mini-btn mini-left" 
          onMouseEnter={() => startScroll("left")} 
          onMouseLeave={stopScroll}
        >
          ‹
        </button>

        <div className="galeria-container">
          {[...miniaturas, ...miniaturas].slice(miniIndex, miniIndex + 7).map((img, index) => (
            <div key={index} className="galeria-item">
              <img src={img} alt={`foto-${index}`} />
            </div>
          ))}
        </div>

        <button 
          className="mini-btn mini-right" 
          onMouseEnter={() => startScroll("right")} 
          onMouseLeave={stopScroll}
        >
          ›
        </button>
      </section>

      {/* INFORMACIÓN DEL FOTÓGRAFO */}
      <section className="informacion">
        <h1>
          Daniel<span> Alejandro</span>
        </h1>
        <h3>Fotógrafo Profesional</h3>
        <p>Ubicado en Ciudad de México</p>
        <p>Estudio fotográfico, sesiones de fotos, cobertura de bodas y eventos...</p>
      </section>

      {/* APARTADO IMAGEN + DESCRIPCIÓN */}
      <section className="imagen-descripcion">
        <div className="imagen-contenedor">
          <img src="/imagenes/Jefe.jpg" alt="Daniel Alejandro - Fotógrafo" />
        </div>
        <div className="descripcion-contenedor">
          <h2>Sobre mí...</h2>
          <p>
            Hola, soy <strong>Daniel Alejandro</strong>, fotógrafo y fundador de 
            <strong> MUNDO DIGITAL</strong>. Desde muy pequeño descubrí mi pasión por la fotografía, 
            me encanta la música y soy muy sociable. 
            Llevo más de <strong>18 años de experiencia</strong> dedicándome a esta hermosa profesión. 
          </p>
          <p>
            Trabajé en uno de los estudios más reconocidos, <strong>FOTO AMERICA ESTUDIO SA DE CV</strong>, 
            y después decidí abrir mi propio estudio. 
            Me dedico a capturar e inmortalizar recuerdos: bodas, XV años, bautizos, graduaciones y más. 
          </p>
          <p>
            También realizamos <strong>sesiones de estudio y locación</strong>, fotos de identificación, 
            publicidad (tarjetas, lonas, volantes), enmarcamos tus recuerdos y hasta hacemos caritas de bebé.  
          </p>
          <p className="frase-final">
            <em>"La mejor recompensa de un trabajo bien hecho es que nuestros clientes nos sigan recomendando."</em>
          </p>
        </div>
      </section>

      {/* SECCIÓN TIPOS DE SERVICIO */}
      <section className="servicios">
        <h2>¿Qué tipo de servicio fotográfico buscas?</h2>
        <div className="servicios-botones">
          <Link to="/sesiones/cuadrosybasesescolares">Bases y Cuadros Escolares</Link>
          <Link to="/boda">Boda</Link>
          <Link to="/sesiones/impresioncredencialpvc">Impresión de credencial de PVC</Link>
          <Link to="/sesiones/caritabebe">Caritas de Bebé</Link>
          <Link to="/sesiones/fotoidentificacion">Fotos de identificación</Link>
          <Link to="/eventos/graduacion">Graduaciones</Link>
          <Link to="/eventos/bautizo">Bautizos</Link>
          <Link to="/eventos/xv">XV años</Link>
          <Link to="/eventos/comunion">Primera Comunión</Link>
        </div>
        <p className="servicios-texto">
          Haz clic en el tipo de sesión para ver ejemplos, precios y reservar tu lugar.
        </p>
      </section>

      {/* SECCIÓN REDES SOCIALES */}
      <section className="redes-sociales">
        <h2>SÍGUEME EN REDES SOCIALES</h2>
        <div className="redes-iconos">
          <a href="https://www.facebook.com/share/1A4EJQ1KKp/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://mail.google.com/mail/u/0/#inbox?compose=xQTrpQHKKwGnStdKBLCPjDSPDKdVWBJHFSPTBKtMDCblrHxLXbJZRZsfTMTrGpCRccvrpVvWSzqjVQJnqRWWxMcKCSFttmTqMZPLFHRWTjJVMKGXdMBzr" target="_blank" rel="noopener noreferrer">
            <i className="fas fa-envelope"></i>
          </a>
          <a href="http://tiktok.com/@fotoyvideomundodigital" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-tiktok"></i>
          </a>
        </div>
        <div className="perfil-fotografo">
          <img src="/imagenes/Jefe.jpg" alt="Perfil" />
          <p><strong>danielalejandro</strong></p>
        </div>
      </section>

      {/* GALERÍA INSTAGRAM */}
      <section className="galeria-insta">
        <div className="grid-insta">
          {imagenesGaleria.slice(0, cantidad).map((img, index) => (
            <img key={index} src={img} alt={`insta-${index}`} />
          ))}
        </div>
        {cantidad < imagenesGaleria.length && (
          <button className="btn-ver-mas" onClick={cargarMas}>Ver más</button>
        )}
      </section>

      {/* SECCIÓN CONTACTAR + WHATSAPP */}
      <section className="contactar-section">
        <a 
          href="/contacto" 
          target="_blank" 
          rel="noopener noreferrer"
          className="contactar-boton"
        >
          <span>CONTACTAR</span>
          <span className="flecha">→</span>
        </a>
        
        <a 
          href="https://wa.me/5610912232" 
          target="_blank" 
          rel="noopener noreferrer"
          className="contactar-whatsapp"
        >
          <img 
            src="https://cdn-icons-png.flaticon.com/512/733/733585.png" 
            alt="WhatsApp"
          />
        </a>
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

      {/* SECCIÓN MAPA UBICACIÓN */}
      <section className="mapa-section">
        <h2>Ubicación del Estudio Fotográfico</h2>
        <div className="mapa-contenedor">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2934.839273107447!2d-98.8847358!3d19.4182073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1e17dfa631445%3A0xc0b7fec01a796f48!2sEstudio%20fotogr%C3%A1fico%20MUNDO%20DIGITAL!5e1!3m2!1ses-419!2smx!4v1759217223159!5m2!1ses-419!2smx"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ubicación del Estudio"
          ></iframe>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Mundo Digital - Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
export default Principal;
