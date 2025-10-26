import React, { useState } from 'react';
import { Link, useNavigate  } from "react-router-dom";
import './EventoPrimeraComunion.css';

function EventoPrimeraComunion() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [slideIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("servicios"); // pestaña activa
  const navigate = useNavigate();

  const slides = [
    {
      url: "/imagenes/PrimeraComunion.jpg",
      titulo: "PRIMERA COMUNIÓN",
    },
  ];
  
  const toggleMenu = () => setMenuAbierto(!menuAbierto);

  // Funciones para redirigir con información
  const handleObtenerServicio = (nombre, descripcion, precio, imagen) => {
    const serviciosSeleccionados = JSON.parse(localStorage.getItem("serviciosSeleccionados")) || [];
    const nuevoServicio = { tipo: "servicio", nombre, descripcion, precio, imagen };
    const actualizados = [...serviciosSeleccionados, nuevoServicio];
    localStorage.setItem("serviciosSeleccionados", JSON.stringify(actualizados));
    navigate("/detallecomunion");
  };

  const handleContratarPaquete = (nombre, descripcion, precio, imagen) => {
    let serviciosSeleccionados = JSON.parse(localStorage.getItem("serviciosSeleccionados")) || [];
    // Filtra para eliminar cualquier paquete anterior
    serviciosSeleccionados = serviciosSeleccionados.filter(item => item.tipo !== "paquete");
    const nuevoPaquete = { tipo: "paquete", nombre, descripcion, precio, imagen };
    const actualizados = [...serviciosSeleccionados, nuevoPaquete];
    localStorage.setItem("serviciosSeleccionados", JSON.stringify(actualizados));
    navigate("/detallecomunion");
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
              <li><Link to="/sesiones/fotoidentificacion">Fotos de Estudio</Link></li>
            </ul>
          </li>
          <li><Link to="/boda">Boda</Link></li>
          <li className="submenu">
            <span>Eventos</span>
            <ul className="submenu-items">
              <li><Link to="/eventos/comunion">comunion Años</Link></li>
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
      <section id="inicio" className="hero-comunion">
        <div 
          className="hero-slide-comunion" 
          style={{ backgroundImage: `url(${slides[slideIndex].url})` }}
        >
          <div className="hero-overlay-comunion">
            <h2>{slides[slideIndex].titulo}</h2>
          </div>
        </div>
      </section>

      {/* PESTAÑAS */}
      <section className="comunion-tabs">
        <p className='slogan-tabs-comunion'>Descubra nuestros servicios y paquetes diseñados para convertir su fiesta de comunion años en un momento inolvidable y lleno de felicidad.</p>
        <div className="tabs-header-comunion">
          <button 
            className={activeTab === "servicios" ? "tab active-comunion" : "tab-comunion"}
            onClick={() => setActiveTab("servicios")}
          >
            Servicios
          </button>
          <button 
            className={activeTab === "paquetes" ? "tab active-comunion" : "tab-comunion"}
            onClick={() => setActiveTab("paquetes")}
          >
            Paquetes
          </button>
        </div>

        <div className="tabs-content-comunion">
          {activeTab === "servicios" && (
            <div className="tab-content-comunion">
              <h1>SERVICIOS DE VIDEO GRABACIÓN</h1>
              <img src="/imagenes/VIDEO GRABACIÓN A UNA CÁMARAcomunion.jpg" alt="Servicios para Primera Comunión" />
              <ul>
                <li>Video a una cámara: $3,500</li>
                <button
                  className="btn-comunion"
                  onClick={() => handleObtenerServicio(
                    "Video a una cámara",
                    "Capturamos cada momento especial de tu Primera Comunión con grabación profesional en alta calidad, para que revivas una y otra vez los recuerdos más significativos de este día tan importante.",
                    3500,
                    "/imagenes/videograbacioncomunion.jpg"
                  )}
                >Obtener servicio</button>

                <li>Video a dos cámaras: $5,100 (Incluye 2 copias en DVD, portada de lujo y video clip "resumen")</li>
                <button
                  className="btn-comunion"
                  onClick={() => handleObtenerServicio(
                    "Video a dos cámaras",
                    "Cobertura completa con dos cámaras para no perder ningún detalle de la Primera Comunión. Incluye video resumen destacado y copias en DVD para conservar tus recuerdos por siempre.",
                    5100,
                    "/imagenes/doscamarascomunion.jpg"
                  )}
                >Obtener servicio</button>
                
                <li>Película en USB: $300</li>
                <button
                  className="btn-comunion"
                  onClick={() => handleObtenerServicio(
                    "Película en USB",
                    "Grabación completa de la Primera Comunión entregada en USB, con videoclip especial, resumen del evento y una presentación personalizada incluidos.",
                    300,
                    "/imagenes/peliculausbcomunion.jpg"
                  )}
                >Obtener servicio</button>

              </ul>
              <h1>FOTOS DE SEGUIMIENTO</h1>
              <p>(FOTOS DE TODO EL EVENTO)</p>
              <img src="/imagenes/seguimientocomunion.jpg" alt="Servicios para Primera Comunión años" />
              <ul>
                <li>Se entrega 100 fotos 4x6 → $2,800</li>
                <button
                  className="btn-comunion"
                  onClick={() => handleObtenerServicio(
                    "100 Fotos 4x6",
                    "Entrega de 100 fotografías impresas en formato 4x6, con retoque básico y excelente calidad de imagen, ideales para conservar los recuerdos más especiales de la Primera Comunión.",
                    2800,
                    "/imagenes/entregafoto.jpg"
                  )}
                >Obtener servicio</button>

                <li>Se entrega 100 fotos 4x6 + Álbum → $3,000</li>
                <button
                  className="btn-comunion"
                  onClick={() => handleObtenerServicio(
                    "100 Fotos 4x6 incluido un álbum",
                    "Entrega de 100 fotografías impresas en formato 4x6, con retoque básico y excelente calidad de imagen, para que conserves tus mejores recuerdos de la Primera Comunión. Incluye un álbum elegante para guardar y admirar cada momento especial.",
                    2800,
                    "/imagenes/entregafoto.jpg"
                  )}
                >Obtener servicio</button>
                <li>Se entrega 100 fotos 4x6 + Caja de lujo → $3,500</li>
                <button
                  className="btn-comunion"
                  onClick={() => handleObtenerServicio(
                    "100 Fotos 4x6 incluido una caja de lujo",
                    "Entrega de 100 fotografías impresas en formato 4x6, con retoque básico y excelente calidad de imagen, presentadas en una elegante caja de lujo. Incluye una caja de lujo adicional para resguardar y presentar tus recuerdos de la Primera Comunión con estilo.",
                    3500,
                    "/imagenes/entregafoto.jpg"
                  )}
                >Obtener servicio</button>

                <li>Se entrega 1 foto libro sencillo 8x11 → $3,900</li>
                <button
                  className="btn-comunion"
                  onClick={() => handleObtenerServicio(
                    "1 foto libro sencillo 8x11",
                    "Fotolibro tamaño 8x11”, con diseño elegante y hojas de alta calidad, ideal para conservar y revivir los momentos más especiales de la Primera Comunión.",
                    3900,
                    "/imagenes/Foto libro con caja 12x12 (para 180 fotos).jpg"
                  )}
                >Obtener servicio</button>

                <li>Se entrega 1 foto libro con caja 12x12 (para 180 fotos)→ $4,700</li>
                <button
                  className="btn-comunion"
                  onClick={() => handleObtenerServicio(
                    "Foto libro con caja 12x12 (para 180 fotos)",
                    "Fotolibro con caja de 12x12”, diseñado para contener hasta 180 fotografías, con acabado elegante y materiales de alta calidad, perfecto para conservar los recuerdos más hermosos de la Primera Comunión.",
                    4700,
                    "/imagenes/Foto libro con caja 12x12 (para 180 fotos).jpg"
                  )}
                >Obtener servicio</button>

                <p>(SE ENTREGAN ARCHIVOS DIGITALES DE LAS FOTOS EN USB QUE NOS PROPORCIONEN)</p>
              </ul>
              <h1>FOTOS DE ESTUDIO</h1>
              <p>(TOMAS EN ESTUDIO PARA CAMBIO DE FONDO)</p>
              <img src="/imagenes/sesionfotocomunion.jpg" alt="Servicios para Primera Comunión años" />
              <ul>
                <p>ENTREGO 3 MARCOS CON TEXTURA</p>
                <li>1 MARCO 16X20" Y 2 MARCOS 8X10" → $2,900</li>
                <button
                  className="btn-comunion"
                  onClick={() => handleObtenerServicio(
                    "1 MARCO 16X20 Y 2 MARCOS 8X10",
                    "Incluye un marco de 16x20” y dos marcos de 8x10”, con acabados finos y diseño moderno, perfectos para exhibir con estilo y elegancia los recuerdos más especiales de la Primera Comunión.",
                    2900,
                    "/imagenes/1 MARCO 20X24 Y 2 MARCOS 11X14.jpg"
                  )}
                >Obtener servicio</button>

                <li>1 MARCO 20X24" Y 2 MARCOS 11X14" → $3,300</li>
                <button
                  className="btn-comunion"
                  onClick={() => handleObtenerServicio(
                    "1 MARCO 20X24 Y 2 MARCOS 11X14",
                    "Incluye un marco de 20x24” y dos marcos de 11x14”, elaborados con materiales de alta calidad y diseño elegante, ideales para resaltar las fotografías más especiales de la Primera Comunión.",
                    3300,
                    "/imagenes/1 MARCO 20X24 Y 2 MARCOS 11X14.jpg"
                  )}
                >Obtener servicio</button>

              </ul>
              <h1>SERVICIOS ADICIONALES</h1>
              <img src="/imagenes/otroserviciocomunion.png" alt="Servicios para Primera Comunión años" />
              <ul>
                <li>Grabación con dron → $1,600</li>
                <button
                  className="btn-comunion"
                  onClick={() => handleObtenerServicio(
                    "Grabación con dron",
                    "Grabación aérea con dron, capturando tomas espectaculares desde las alturas para darle un toque cinematográfico y único a la Primera Comunión.",
                    1600,
                    "/imagenes/Grabación con droncomunion.png"
                  )}
                >Obtener servicio</button>

                <li>Lona banner (1x2 metros) → $600</li>
                <button
                  className="btn-comunion"
                  onClick={() => handleObtenerServicio(
                    "Lona banner",
                    "Lona banner de 1x2 metros, impresa en alta resolución y con diseño personalizado, ideal para decorar y darle un toque especial a la Primera Comunión.",
                    600,
                    "/imagenes/Lona bannercomunion.jpg"
                  )}
                >Obtener servicio</button>
                
                <li>Foto de firmas (80x1.20 metros) → $820</li>
                <button
                  className="btn-comunion"
                  onClick={() => handleObtenerServicio(
                    "Foto de firmas",
                    "Foto de firmas en formato 80x1.20 metros, ideal para que tus invitados dejen mensajes y dedicatorias, creando un recuerdo único y especial de la Primera Comunión.",
                    820,
                    "/imagenes/Foto de firmascomunion.jpg"
                  )}
                >Obtener servicio</button>

                <li>Foto libro 12X12 → $2,500</li>
                <button
                  className="btn-comunion"
                  onClick={() => handleObtenerServicio(
                    "Foto libro 12X12",
                    "Fotolibro de 12x12” con diseño personalizado, impresión de alta calidad y encuadernado profesional, ideal para conservar los recuerdos más especiales de la Primera Comunión.",
                    2500,
                    "/imagenes/Foto libro 12X12comunion.jpg"
                  )}
                >Obtener servicio</button>

                <li>Caja Foto libro → $600</li>
                <button
                  className="btn-comunion"
                  onClick={() => handleObtenerServicio(
                    "Caja Foto libro",
                    "Caja para fotolibro, elaborada con materiales de alta calidad y acabados elegantes, ideal para proteger y realzar la presentación de tu álbum de la Primera Comunión.",
                    600,
                    "/imagenes/Caja para fotolibro.jpg"
                  )}
                >Obtener servicio</button>

                <li>Libro de firmas → $850</li>
                <button
                  className="btn-comunion"
                  onClick={() => handleObtenerServicio(
                    "Libro de firmas",
                    "Un detalle que guardarás por siempre: libro de firmas personalizado, perfecto para conservar los mensajes y buenos deseos de quienes compartieron contigo la Primera Comunión.",
                    850,
                    "/imagenes/Libro de firmas.jpg"
                  )}
                >Obtener servicio</button>

                <li>Caja para USB → $350</li> 
                <button
                  className="btn-comunion"
                  onClick={() => handleObtenerServicio(
                    "Caja para USB",
                    "Caja para USB, con diseño elegante y acabado premium, ideal para presentar y proteger la grabación o sesión fotográfica de la Primera Comunión con estilo y seguridad.",
                    350,
                    "/imagenes/Caja para USB.jpg"
                  )}
                >Obtener servicio</button>

                <li>Mini caja para USB → $250</li> 
                <button
                  className="btn-comunion"
                  onClick={() => handleObtenerServicio(
                    "Mini caja para USB",
                    "Pequeña en tamaño, grande en presentación: mini caja para USB con diseño refinado y acabados de lujo, perfecta para guardar los recuerdos más valiosos de la Primera Comunión.",
                    250,
                    "/imagenes/Mini caja para USB.jpg"
                  )}
                >Obtener servicio</button>

                <li>Caja de lujo para fotos → $750</li> 
                <button
                  className="btn-comunion"
                  onClick={() => handleObtenerServicio(
                    "Caja de lujo para fotos",
                    "Caja de lujo para fotografías, elaborada con materiales de alta calidad y diseño elegante, ideal para conservar los recuerdos de la Primera Comunión de forma segura y con estilo.",
                    750,
                    "/imagenes/Caja de lujo para fotos.png"
                  )}
                >Obtener servicio</button>

                <li>Maquillaje (con prueba previa) → $600</li>
                <button
                  className="btn-comunion"
                  onClick={() => handleObtenerServicio(
                    "Maquillaje",
                    "Servicio de maquillaje profesional con prueba previa incluida, garantizando un look impecable y acorde al estilo de la Primera Comunión.",
                    600,
                    "/imagenes/Maquillajecomunion.jpg"
                  )}
                >Obtener servicio</button>

                <li>Sesión fotográfica en estudio $1,000</li>
                <button
                  className="btn-comunion"
                  onClick={() => handleObtenerServicio(
                    "100 Fotos 4x6",
                    "Captura tu esencia con una sesión fotográfica en estudio, con iluminación profesional y fondos diseñados especialmente para ti, ideal para inmortalizar los momentos de la Primera Comunión.",
                    1000,
                    "/imagenes/sesionfotocomunion1.jpg"
                  )}
                >Obtener servicio</button>

                <li>Sesión fotográfica a locación $1,500 (Depende el lugar puede subir por costo de viaticos)</li>
                <button
                  className="btn-comunion"
                  onClick={() => handleObtenerServicio(
                    "Sesión fotográfica a locación ",
                    "Sesión fotográfica en locación, con captura profesional en exteriores. El costo puede variar según la ubicación y los viáticos, ideal para inmortalizar los momentos más especiales de la Primera Comunión.",
                    1500,
                    "/imagenes/Sesión fotográfica a locación.jpg"
                  )}
                >Obtener servicio</button>

                <li>SEMBLANZA $150</li>
                <button
                  className="btn-comunion"
                  onClick={() => handleObtenerServicio(
                    "Semblanzas",
                    "Semblanza en video, con imágenes y música de fondo, ideal para contar la historia de la Primera Comunión de forma emotiva y con un acabado profesional.",
                    150,
                    "/imagenes/SEMBLANZA.jpg"
                  )}
                >Obtener servicio</button>

              </ul>
              <h1>MARCOS</h1>
              <img src="/imagenes/Marco.png" alt="Servicios para Primera Comunión años" />
              <ul>
                <li>8X10 PULGADAS $260</li>
                <button
                  className="btn-comunion"
                  onClick={() => handleObtenerServicio(
                    "Marco de 8x10 pulgadas",
                    "Entrega de marco en formato 8x10”, con excelente calidad de imagen y presentación cuidada, perfecto para resguardar los recuerdos de la Primera Comunión.",
                    260,
                    "/imagenes/Marco4.png"
                  )}
                >Obtener servicio</button>

                <li>11X14 PULGADAS $387</li>
                <button
                  className="btn-comunion"
                  onClick={() => handleObtenerServicio(
                    "Marco de 11x14 pulgadas",
                    "Entrega de marco en formato 11x14”, con imagen impresa en excelente calidad y presentación profesional, ideal para conservar los recuerdos de la Primera Comunión.",
                    387,
                    "/imagenes/Marco3.png"
                  )}
                >Obtener servicio</button>

                <li>16X20 PULGADAS $587</li>
                <button
                  className="btn-comunion"
                  onClick={() => handleObtenerServicio(
                    "Marco de 16x20 pulgadas",
                    "Entrega de marco en formato 16x20”, con imagen impresa en excelente calidad y lista para exhibición, perfecta para resguardar los recuerdos de la Primera Comunión.",
                    587,
                    "/imagenes/Marco2.png"
                  )}
                >Obtener servicio</button>

                <li>20X24 PULGADAS $767</li>
                <button
                  className="btn-comunion"
                  onClick={() => handleObtenerServicio(
                    "Marco de 20x24 pulgadas",
                    "Entrega de marco en formato 20x24”, con imagen impresa en excelente calidad y presentación lista para exhibición, ideal para destacar los recuerdos de la Primera Comunión.",
                    767,
                    "/imagenes/Marco1.png"
                  )}
                >Obtener servicio</button>

                <li>24X30 PULGADAS 1,082</li>
                <button
                  className="btn-comunion"
                  onClick={() => handleObtenerServicio(
                    "Marco de 24x30 pulgadas",
                    "Entrega de marco en formato 24x30”, con imagen impresa en excelente calidad, ideal para exhibir los recuerdos más especiales de la Primera Comunión.",
                    1082,
                    "/imagenes/Marco.png"
                  )}
                >Obtener servicio</button>
              </ul>
            </div>
          )}

          {activeTab === "paquetes" && (
            <div className="tab-content-comunion">
              <h1>PAQUETES DE BODA</h1>
              <img src="/imagenes/paquetecomunion.jpg" alt="Paquetes de Primera Comunión" />
              <h2>PAQUETE 1</h2>
              <p>Incluye: </p>
              <h4>VIDEO GRABACIÓN A UNA CÁMARA</h4>
              <ul>
                <li>Video en full HD 2 copias en DVD</li>
                <li>1 portada de lujo</li>
                <li>1 portada sencilla</li>
                <li>1 video clip "RESUMEN"</li>
                <li>Película en USB</li>
              </ul>
              <h4>FOTOS DE SEGUIMIENTO</h4>
              <ul>
                <li>100 fotos impresas 4X6"</li>
                <li>Caja de lujo personalizada para guardar sus 100 fotos</li>
                <li>Disco personalizado con su semblanza</li>
                <li>USB con todos los archivos de fotos y del video (Película)</li>
              </ul>
              <h4>FOTOS DE ESTUDIО</h4>
              <ul>
                <li>Un marco 16X20</li>
                <p>(Sesión en el estudio para cambio de fondo o se toman el mismo día del evento en paisaje del salón, jardín o iglesia)</p>
              </ul>
              <h2>REGALO </h2>
              <ul>
                <li>SEMBLANZA PARA PROYECTAR</li>
                <li>GALERIA WEB DE FOTOS DEL EVENTO Y DE INVITADOS</li>
              </ul>
              <img src="/imagenes/videograbacion.jpeg" alt="Paquetes de Primera Comunión" />
              <h3>PRECIO $7,800</h3>
              <button
                className="btn-comunion"
                onClick={() => handleContratarPaquete(
                  "Paquete 1",
                  "Incluye video con una cámara, fotografías de seguimiento, sesión en estudio y regalos exclusivos para tu evento.",
                  7800,
                  "/imagenes/videograbacion.jpeg"
                )}
              >Contratar paquete</button>

              <h2>PAQUETE 2</h2>
              <p>Incluye: </p>
              <h4>VIDEO GRABACIÓN A UNA CÁMARA</h4>
              <ul>
                <li>Video en full HD 2 copias en DVD</li>
                <li>1 portada de lujo</li>
                <li>1 portada sencilla</li>
                <li>1 video clip "RESUMEN"</li>
                <li>Película en USB</li>
              </ul>
              <h4>FOTOS DE SEGUIMIENTO</h4>
              <ul>
                <li>100 fotos impresas 4X6"</li>
                <li>Caja de lujo personalizada para guardar sus 100 fotos</li>
                <li>Disco personalizado con su semblanza</li>
                <li>USB con todos los archivos de fotos y del video (Película)</li>
              </ul>
              <h4>FOTOS DE ESTUDIО</h4>
              <ul>
                <li>Un marco 16X20</li>
                <li>Dos marcos 8X10</li>
                <p>(Sesión el mismo día del evento en paisaje del salón, jardín o iglesia)</p>
                <p>Sesión extra previa en el estudio para la foto de firmas</p>
                <p>Galería WEB (fotos de la sesión, del evento y de invitados)</p>
              </ul>
              <h2>REGALO </h2>
              <ul>
                <li>Semblanza para proyectar</li>
                <li>Foto de firmas (80X1.20 metros)</li>
              </ul>
              <img src="/imagenes/VIDEO GRABACIÓN A UNA CÁMARA.jpeg" alt="Paquetes de Primera Comunión" />
              <h3>PRECIO $8,800</h3>
              <button
                className="btn-comunion"
                onClick={() => handleContratarPaquete(
                  "Paquete 2",
                  "Incluye video con una cámara, fotografías de estudio, foto para libro de firmas y galería web para compartir tus mejores momentos.",
                  8800,
                  "/imagenes/VIDEO GRABACIÓN A UNA CÁMARA.jpeg"
                )}
              >Contratar paquete</button>

              <h2>PAQUETE 3</h2>
              <p>Incluye: </p>
              <h4>VIDEO GRABACIÓN A DOS CÁMARAS</h4>
              <ul>
                <li>Video en full HD 2 copias en DVD</li>
                <li>1 portada de lujo</li>
                <li>1 portada sencilla</li>
                <li>1 video clip "RESUMEN"</li>
                <li>Película en USB con caja personalizada</li>
              </ul>
              <h4>FOTOS DE SEGUIMIENTO</h4>
              <ul>
                <li>100 fotos impresas 4X6"</li>
                <li>Caja de lujo personalizada para guardar sus 100 fotos</li>
                <li>Disco personalizado con su semblanza</li>
                <li>USB con todos los archivos de fotos y del video (Película)</li>
              </ul>
              <h4>FOTOS DE ESTUDIО</h4>
              <ul>
                <li>Un marco 16X20</li>
                <li>Dos marcos 8X10</li>
                <p>(Sesión el mismo día del evento en paisaje del salón, jardín o iglesia)</p>
                <p>Sesión extra previa en el estudio para la foto de firmas</p>
                <p>Galería WEB (fotos de la sesión, del evento y de invitados)</p>
              </ul>
              <h2>REGALO </h2>
              <ul>
                <li>Semblanza para proyectar</li>
                <li>Foto de firmas (80X1.20 metros)</li>
              </ul>
              <img src="/imagenes/doscamaras.jpg" alt="Paquetes de Primera Comunión" />
              <h3>PRECIO $10,800</h3>
              <button
                className="btn-comunion"
                onClick={() => handleContratarPaquete(
                  "Paquete 3",
                  "Incluye video con dos cámaras, fotografías de seguimiento, sesión en estudio y galería web completa para compartir todos tus momentos.",
                  10800,
                  "/imagenes/doscamaras.jpg"
                )}
              >Contratar paquete</button>
            </div>
          )}
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
          alt="WhatsApp"xx
        />
      </a>

      {/* FOOTER */}
      <footer className="footer-comunion">
        <p>© {new Date().getFullYear()} Mundo Digital - Todos los derechos reservados.</p>
      </footer>
    </div>
  );
  
}
export default EventoPrimeraComunion;