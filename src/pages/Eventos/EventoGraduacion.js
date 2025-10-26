import React, { useState } from 'react';
import { Link, useNavigate  } from "react-router-dom";
import './EventoGraduacion.css';

function EventoGraduacion() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [slideIndex] = useState(0);
  const [activeTab, setActiveTab] = useState("servicios"); // pestaña activa
  const navigate = useNavigate();

  const slides = [
    {
      url: "/imagenes/Graduacion.jpg",
      titulo: "GRADUACIONES",
    },
  ];
  
  const toggleMenu = () => setMenuAbierto(!menuAbierto);

  // Funciones para redirigir con información
  const handleObtenerServicio = (nombre, descripcion, precio, imagen) => {
    const serviciosSeleccionados = JSON.parse(localStorage.getItem("serviciosSeleccionados")) || [];
    const nuevoServicio = { tipo: "servicio", nombre, descripcion, precio, imagen };
    const actualizados = [...serviciosSeleccionados, nuevoServicio];
    localStorage.setItem("serviciosSeleccionados", JSON.stringify(actualizados));
    navigate("/detallegraduacion");
  };

  const handleContratarPaquete = (nombre, descripcion, precio, imagen) => {
    let serviciosSeleccionados = JSON.parse(localStorage.getItem("serviciosSeleccionados")) || [];
    // Filtra para eliminar cualquier paquete anterior
    serviciosSeleccionados = serviciosSeleccionados.filter(item => item.tipo !== "paquete");
    const nuevoPaquete = { tipo: "paquete", nombre, descripcion, precio, imagen };
    const actualizados = [...serviciosSeleccionados, nuevoPaquete];
    localStorage.setItem("serviciosSeleccionados", JSON.stringify(actualizados));
    navigate("/detallegraduacion");
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
      <section id="inicio" className="hero-graduacion">
        <div 
          className="hero-slide-graduacion" 
          style={{ backgroundImage: `url(${slides[slideIndex].url})` }}
        >
          <div className="hero-overlay-graduacion">
            <h2>{slides[slideIndex].titulo}</h2>
          </div>
        </div>
      </section>

      {/* PESTAÑAS */}
      <section className="graduacion-tabs">
        <p className='slogan-tabs-graduacion'>Descubre nuestros servicios y paquetes diseñados para hacer de tu fiesta de graduación un recuerdo inolvidable, lleno de alegría, emoción y momentos únicos.</p>
        <div className="tabs-header-graduacion">
          <button 
            className={activeTab === "servicios" ? "tab active-graduacion" : "tab-graduacion"}
            onClick={() => setActiveTab("servicios")}
          >
            Servicios
          </button>
          <button 
            className={activeTab === "paquetes" ? "tab active-graduacion" : "tab-graduacion"}
            onClick={() => setActiveTab("paquetes")}
          >
            Paquetes
          </button>
        </div>

        <div className="tabs-content-graduacion">
          {activeTab === "servicios" && (
            <div className="tab-content-graduacion">
              <h1>SERVICIOS DE VIDEO GRABACIÓN</h1>
              <img src="/imagenes/VIDEO GRABACIÓN A UNA CÁMARAgraduacion.jpg" alt="Servicios para Graduación" />
              <ul>
                <li>Video a una cámara: $3,500</li>
                <button
                  className="btn-graduacion"
                  onClick={() => handleObtenerServicio(
                    "Video a una cámara",
                    "Capturamos cada instante de tu fiesta de graduación con grabación profesional en alta calidad, para que revivas una y otra vez los momentos más especiales de tu logro.",
                    3500,
                    "/imagenes/videograbaciongraduacion.jpg"
                  )}
                >Obtener servicio</button>

                <li>Video a dos cámaras: $5,100 (Incluye 2 copias en DVD, portada de lujo y video clip "resumen")</li>
                <button
                  className="btn-graduacion"
                  onClick={() => handleObtenerServicio(
                    "Video a dos cámaras",
                    "Cobertura completa con dos cámaras para no perder ningún detalle de tu graduación. Incluye video resumen destacado y copias en DVD para conservar tus recuerdos por siempre.",
                    5100,
                    "/imagenes/doscamarasgraduacion.jpg"
                  )}
                >Obtener servicio</button>
                
                <li>Película en USB: $300</li>
                <button
                  className="btn-graduacion"
                  onClick={() => handleObtenerServicio(
                    "Película en USB",
                    "Grabación completa de tu graduación en USB, con videoclip destacado, resumen del evento y una presentación especial para revivir cada momento.",
                    300,
                    "/imagenes/doscamarasgraduacion1.jpg"
                  )}
                >Obtener servicio</button>

              </ul>
              <h1>FOTOS DE SEGUIMIENTO</h1>
              <p>(FOTOS DE TODO EL EVENTO)</p>
              <img src="/imagenes/seguimientograduacion.jpg" alt="Servicios para Graduación" />
              <ul>
                <li>Se entrega 100 fotos 4x6 → $2,800</li>
                <button
                  className="btn-graduacion"
                  onClick={() => handleObtenerServicio(
                    "100 Fotos 4x6",
                    "Entrega de 100 fotografías impresas en formato 4x6, con retoque básico y excelente calidad de imagen, perfectas para recordar cada momento de tu graduación.",
                    2800,
                    "/imagenes/entregafoto.jpg"
                  )}
                >Obtener servicio</button>

                <li>Se entrega 100 fotos 4x6 + Álbum → $3,000</li>
                <button
                  className="btn-graduacion"
                  onClick={() => handleObtenerServicio(
                    "100 Fotos 4x6 incluido un Álbum",
                    "Entrega de 100 fotografías impresas en formato 4x6, con retoque básico y excelente calidad de imagen, acompañadas de un elegante álbum para conservar y revivir tus mejores recuerdos de graduación.",
                    2800,
                    "/imagenes/entregafoto.jpg"
                  )}
                >Obtener servicio</button>
                <li>Se entrega 100 fotos 4x6 + Caja de lujo → $3,500</li>
                <button
                  className="btn-graduacion"
                  onClick={() => handleObtenerServicio(
                    "100 Fotos 4x6 incluido una Caja de lujo",
                    "Entrega de 100 fotografías impresas en formato 4x6, con retoque básico y excelente calidad de imagen, presentadas en una elegante caja de lujo para conservar tus recuerdos de graduación con estilo.",
                    3500,
                    "/imagenes/entregafoto.jpg"
                  )}
                >Obtener servicio</button>

                <li>Se entrega 1 foto libro sencillo 8x11 → $3,900</li>
                <button
                  className="btn-graduacion"
                  onClick={() => handleObtenerServicio(
                    "1 foto libro sencillo 8x11",
                    "Fotolibro  sencillo tamaño 8x11”, con diseño elegante y hojas de alta calidad, ideal para conservar y revivir los momentos más especiales de tu graduación.",
                    3900,
                    "/imagenes/Foto libro con caja 12x12 (para 180 fotos).jpg"
                  )}
                >Obtener servicio</button>

                <li>Se entrega 1 foto libro con caja 12x12 (para 180 fotos)→ $4,700</li>
                <button
                  className="btn-graduacion"
                  onClick={() => handleObtenerServicio(
                    "Foto libro con caja 12x12 (para 180 fotos)",
                    "Fotolibro con caja de 12x12”, con capacidad para 180 fotografías, diseñado con retoque básico y excelente calidad de imagen, presentado en una exclusiva caja de lujo para conservar tus recuerdos de graduación con elegancia.",
                    4700,
                    "/imagenes/Foto libro con caja 12x12 (para 180 fotos).jpg"
                  )}
                >Obtener servicio</button>

                <p>(SE ENTREGAN ARCHIVOS DIGITALES DE LAS FOTOS EN USB QUE NOS PROPORCIONEN)</p>
              </ul>
              <h1>FOTOS DE ESTUDIO</h1>
              <p>(TOMAS EN ESTUDIO PARA CAMBIO DE FONDO)</p>
              <img src="/imagenes/sesionfotograduacion.jpg" alt="Servicios para Graduación" />
              <ul>
                <p>ENTREGO 3 MARCOS CON TEXTURA</p>
                <li>1 MARCO 16X20" Y 2 MARCOS 8X10" → $2,900</li>
                <button
                  className="btn-graduacion"
                  onClick={() => handleObtenerServicio(
                    "1 MARCO 16X20 Y 2 MARCOS 8X10",
                    "Incluye un marco de 16x20” y dos marcos de 8x10”, con acabados finos y diseño moderno, perfectos para exhibir tus recuerdos de graduación con estilo y elegancia.",
                    2900,
                    "/imagenes/1 MARCO 20X24 Y 2 MARCOS 11X14.jpg"
                  )}
                >Obtener servicio</button>

                <li>1 MARCO 20X24" Y 2 MARCOS 11X14" → $3,300</li>
                <button
                  className="btn-graduacion"
                  onClick={() => handleObtenerServicio(
                    "1 MARCO 20X24 Y 2 MARCOS 11X14",
                    "Incluye un marco de 20x24” y dos marcos de 11x14”, elaborados con materiales de alta calidad y diseño elegante, ideales para resaltar las mejores fotografías de tu graduación.",
                    3300,
                    "/imagenes/1 MARCO 20X24 Y 2 MARCOS 11X14.jpg"
                  )}
                >Obtener servicio</button>

              </ul>
              <h1>SERVICIOS ADICIONALES</h1>
              <img src="/imagenes/otroserviciograduacion.jpg" alt="Servicios para Graduación" />
              <ul>
                <li>Grabación con dron → $1,600</li>
                <button
                  className="btn-graduacion"
                  onClick={() => handleObtenerServicio(
                    "Grabación con dron",
                    "Grabación aérea con dron, capturando tomas espectaculares desde las alturas para darle un toque cinematográfico a tu graduación.",
                    1600,
                    "/imagenes/Grabación con drongraduacion.jpg"
                  )}
                >Obtener servicio</button>

                <li>Lona banner (1x2 metros) → $600</li>
                <button
                  className="btn-graduacion"
                  onClick={() => handleObtenerServicio(
                    "Lona banner",
                    "Lona banner de 1x2 metros, impresa en alta resolución y con diseño personalizado, ideal para decorar y darle un toque especial a tu graduación.",
                    600,
                    "/imagenes/Lona bannergraduacion.jpg"
                  )}
                >Obtener servicio</button>
                
                <li>Foto de firmas (80x1.20 metros) → $820</li>
                <button
                  className="btn-graduacion"
                  onClick={() => handleObtenerServicio(
                    "Foto de firmas",
                    "Foto de firmas en formato 80x1.20 metros, ideal para que tus invitados dejen mensajes y dedicatorias, creando un recuerdo único y especial de tu graduación.",
                    820,
                    "/imagenes/Foto de firmasgraduacion.jpg"
                  )}
                >Obtener servicio</button>

                <li>Foto libro 12X12 → $2,500</li>
                <button
                  className="btn-graduacion"
                  onClick={() => handleObtenerServicio(
                    "Foto libro 12X12",
                    "Fotolibro 12x12” con diseño a tu medida, calidad de impresión superior y encuadernado profesional.",
                    2500,
                    "/imagenes/Foto libro 12X12graduacion.jpg"
                  )}
                >Obtener servicio</button>

                <li>Caja Foto libro → $600</li>
                <button
                  className="btn-graduacion"
                  onClick={() => handleObtenerServicio(
                    "Caja Foto libro",
                    "Caja para fotolibro elaborada con materiales de alta calidad y acabados elegantes. Ideal para proteger y realzar la presentación de tu álbum.",
                    600,
                    "/imagenes/Caja para fotolibro.jpg"
                  )}
                >Obtener servicio</button>

                <li>Libro de firmas → $850</li>
                <button
                  className="btn-graduacion"
                  onClick={() => handleObtenerServicio(
                    "Libro de firmas",
                    "Un detalle que guardarás por siempre: libro de firmas personalizado, perfecto para conservar los mensajes y buenos deseos de quienes compartieron contigo ese día tan especial.",
                    850,
                    "/imagenes/Libro de firmasgraduacion.jpg"
                  )}
                >Obtener servicio</button>

                <li>Caja para USB → $350</li> 
                <button
                  className="btn-graduacion"
                  onClick={() => handleObtenerServicio(
                    "Caja para USB",
                    "Caja para USB con diseño elegante y acabado premium. Ideal para presentar y proteger tu película o sesión fotográfica con estilo y seguridad.",
                    350,
                    "/imagenes/Caja para USB.jpg"
                  )}
                >Obtener servicio</button>

                <li>Mini caja para USB → $250</li> 
                <button
                  className="btn-graduacion"
                  onClick={() => handleObtenerServicio(
                    "Mini caja para USB",
                    "Pequeña en tamaño, grande en presentación: mini caja para USB con diseño refinado y acabados de lujo, perfecta para guardar tus recuerdos más valiosos.",
                    250,
                    "/imagenes/Mini caja para USB.jpg"
                  )}
                >Obtener servicio</button>

                <li>Caja de lujo para fotos → $750</li> 
                <button
                  className="btn-graduacion"
                  onClick={() => handleObtenerServicio(
                    "Caja de lujo para fotos",
                    "Caja de lujo para fotografías, elaborada con materiales de alta calidad y diseño elegante. Ideal para conservar tus recuerdos de forma segura y con estilo.",
                    750,
                    "/imagenes/Caja de lujo para fotos.png"
                  )}
                >Obtener servicio</button>

                <li>Maquillaje (con prueba previa) → $600</li>
                <button
                  className="btn-graduacion"
                  onClick={() => handleObtenerServicio(
                    "Maquillaje",
                    "Servicio de maquillaje profesional con prueba previa incluida, garantizando un look impecable y acorde al estilo de tu evento.",
                    600,
                    "/imagenes/Maquillajegraduacion.png"
                  )}
                >Obtener servicio</button>

                <li>Sesión fotográfica en estudio $1,000</li>
                <button
                  className="btn-graduacion"
                  onClick={() => handleObtenerServicio(
                    "100 Fotos 4x6",
                    "Captura tu esencia con una sesión en estudio, acompañada de iluminación profesional y fondos diseñados especialmente para ti.",
                    1000,
                    "/imagenes/sesionfotograduacion1.jpg"
                  )}
                >Obtener servicio</button>

                <li>Sesión fotográfica a locación $1,500 (Depende el lugar puede subir por costo de viaticos)</li>
                <button
                  className="btn-graduacion"
                  onClick={() => handleObtenerServicio(
                    "Sesión fotográfica a locación ",
                    "Sesión fotográfica en locación con captura profesional en exteriores. El costo puede variar según la ubicación y los viáticos requeridos.",
                    1500,
                    "/imagenes/Sesión fotográfica a locación.jpg"
                  )}
                >Obtener servicio</button>

                <li>SEMBLANZA $150</li>
                <button
                  className="btn-graduacion"
                  onClick={() => handleObtenerServicio(
                    "Semblanzas",
                    "Semblanza en video con imágenes y música de fondo, ideal para contar tu historia de forma emotiva y con un acabado profesional.",
                    150,
                    "/imagenes/SEMBLANZA.jpg"
                  )}
                >Obtener servicio</button>

              </ul>
              <h1>MARCOS</h1>
              <img src="/imagenes/Marcograduacion.jpg" alt="Servicios para Graduación años" />
              <ul>
                <li>8X10 PULGADAS $260</li>
                <button
                  className="btn-graduacion"
                  onClick={() => handleObtenerServicio(
                    "Marco de 8x10 pulgadas",
                    "Entrega de marco en formato 8x10 pulgadas, con excelente calidad de imagen y presentación cuidada.",
                    260,
                    "/imagenes/Marco4.png"
                  )}
                >Obtener servicio</button>

                <li>11X14 PULGADAS $387</li>
                <button
                  className="btn-graduacion"
                  onClick={() => handleObtenerServicio(
                    "Marco de 11x14 pulgadas",
                    "Entrega de marco en formato 11x14 pulgadas, con imagen impresa en excelente calidad y presentación profesional.",
                    387,
                    "/imagenes/Marco3.png"
                  )}
                >Obtener servicio</button>

                <li>16X20 PULGADAS $587</li>
                <button
                  className="btn-graduacion"
                  onClick={() => handleObtenerServicio(
                    "Marco de 16x20 pulgadas",
                    "Entrega de marco en formato 16x20 pulgadas, con imagen impresa en excelente calidad y lista para exhibición.",
                    587,
                    "/imagenes/Marco2.png"
                  )}
                >Obtener servicio</button>

                <li>20X24 PULGADAS $767</li>
                <button
                  className="btn-graduacion"
                  onClick={() => handleObtenerServicio(
                    "Marco de 20x24 pulgadas",
                    "Entrega de marco en formato 20x24 pulgadas, con imagen impresa en excelente calidad y presentación lista para exhibición.",
                    767,
                    "/imagenes/Marco1.png"
                  )}
                >Obtener servicio</button>

                <li>24X30 PULGADAS 1,082</li>
                <button
                  className="btn-graduacion"
                  onClick={() => handleObtenerServicio(
                    "Marco de 24x30 pulgadas",
                    "Entrega de marco en formato 24x30 pulgadas, con imagen impresa en excelente calidad, ideal para exhibición.",
                    1082,
                    "/imagenes/Marco.png"
                  )}
                >Obtener servicio</button>
              </ul>
            </div>
          )}

          {activeTab === "paquetes" && (
            <div className="tab-content-graduacion">
              <h1>PAQUETES DE BODA</h1>
              <img src="/imagenes/paquetegraduacion.jpeg" alt="Paquetes de Graduación" />
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
              <img src="/imagenes/videograbacion.jpeg" alt="Paquetes de Graduación" />
              <h3>PRECIO $7,800</h3>
              <button
                className="btn-graduacion"
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
              <img src="/imagenes/VIDEO GRABACIÓN A UNA CÁMARA.jpeg" alt="Paquetes de Graduación" />
              <h3>PRECIO $8,800</h3>
              <button
                className="btn-graduacion"
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
              <img src="/imagenes/doscamaras.jpg" alt="Paquetes de Graduación" />
              <h3>PRECIO $10,800</h3>
              <button
                className="btn-graduacion"
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
      <footer className="footer-graduacion">
        <p>© {new Date().getFullYear()} Mundo Digital - Todos los derechos reservados.</p>
      </footer>
    </div>
  );
  
}
export default EventoGraduacion;