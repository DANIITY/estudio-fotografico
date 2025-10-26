import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Contacto.css';

function Contacto() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    telefono: '',
    mensaje: ''
  });

  // --- HERO PRINCIPAL ---
  const [slideIndex] = useState(0);

  const slides = [
    {
      url: "/imagenes/portada.jpg",
      titulo: "CONTACTO",
    },
  ];
  const toggleMenu = () => setMenuAbierto(!menuAbierto);

  // Manejo del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Gracias ${formData.nombre}, tu mensaje fue enviado con éxito ✅`);
    setFormData({ nombre: '', correo: '', telefono: '', mensaje: '' });
  };

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
      <section id="inicio" className="hero-contacto">
        <div 
          className="hero-slide-contacto" 
          style={{ backgroundImage: `url(${slides[slideIndex].url})` }}
        >
          <div className="hero-overlay-contacto">
            <h2>{slides[slideIndex].titulo}</h2>
          </div>
        </div>
      </section>

      {/* SECCIÓN CONTACTO*/}
      <section className="contacto-section">
        <div className="contacto-contenedor">
          {/* Texto y botones */}
          <div className="contacto-info">
            <p>
              Hablemos y trabajemos juntos en imágenes increíbles. Te contestaré a la brevedad y con gusto resolveré cualquier pregunta.
              <br /><br />
              Puedes contactarme por <strong>correo electrónico</strong>, un mensaje de 
              <strong> WhatsApp</strong> o <strong>llamarme</strong> cuando tú quieras.
            </p>

            <a
              href="https://wa.me/5610912232"
              className="contacto-boton"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp: (56) 10912232
            </a>

            <a
              href="https://mail.google.com/mail/u/0/#inbox?compose=xQTrpQHKKwGnStdKBLCPjDSPDKdVWBJHFSPTBKtMDCblrHxLXbJZRZsfTMTrGpCRccvrpVvWSzqjVQJnqRWWxMcKCSFttmTqMZPLFHRWTjJVMKGXdMBzr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="contacto-boton"
            >
               fotoyvideomundodigital@gmail.com
            </a>

            {/* Íconos de redes sociales */}
            <div className="contacto-redes">
              <a href="https://www.facebook.com/share/1A4EJQ1KKp/" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" />
              </a>
              <a href="https://mail.google.com/mail/u/0/#inbox?compose=xQTrpQHKKwGnStdKBLCPjDSPDKdVWBJHFSPTBKtMDCblrHxLXbJZRZsfTMTrGpCRccvrpVvWSzqjVQJnqRWWxMcKCSFttmTqMZPLFHRWTjJVMKGXdMBzr" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Correo" />
              </a>
              <a href="http://tiktok.com/@fotoyvideomundodigital" target="_blank" rel="noopener noreferrer">
                <img src="https://cdn-icons-png.flaticon.com/512/3046/3046126.png" alt="TikTok" />
              </a>
            </div>
          </div>

          {/* Imagen */}
          <div className="contacto-img">
            <img
              src="/imagenes/Jefe.jpg"
              alt="Fotógrafo"
            />
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

      {/* NUEVO FORMULARIO DE CONTACTO */}
      <section className="formulario-section">
        <h2>Envíame un Mensaje</h2>
        <form className="contacto-form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="nombre" 
            placeholder="Tu nombre" 
            value={formData.nombre} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="email" 
            name="correo" 
            placeholder="Tu correo" 
            value={formData.correo} 
            onChange={handleChange} 
            required 
          />
          <input 
            type="tel" 
            name="telefono" 
            placeholder="Tu teléfono (opcional)" 
            value={formData.telefono} 
            onChange={handleChange} 
          />
          <textarea 
            name="mensaje" 
            placeholder="Escribe tu mensaje..." 
            value={formData.mensaje} 
            onChange={handleChange} 
            required 
          ></textarea>
          <button type="submit" className="contacto-boton">Enviar</button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="footer-contacto">
        <p>© {new Date().getFullYear()} Mundo Digital - Todos los derechos reservados.</p>
      </footer>
    </div>
  );
  
}
export default Contacto;