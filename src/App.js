import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Principal.css';
import Principal from "./Principal";
import Contacto from "./pages/Contacto";
import Portafolio from "./pages/Portafolio";
import Boda from "./pages/Boda";
import Detalle from "./pages/Detalle";


// Puedes agregar rutas para sesiones y eventos también
import SesionesFotoIdentificacion from "./pages/Sesiones/SesionesFotoIdentificacion";
import SesionesFotoEstudio from "./pages/Sesiones/SesionesFotoEstudio";
import SesionesImpresionCredencialPVC from "./pages/Sesiones/SesionesImpresionCredencialPVC";
import SesionesCaritaBebe from "./pages/Sesiones/SesionesCaritaBebe";
import SesionesCuadrosyBasesEscolares from "./pages/Sesiones/SesionesCuadrosyBasesEscolares";


import EventoXV from "./pages/Eventos/EventoXV";
import DetalleXV from "./pages/Eventos/DetalleXV";
import EventoBautizo from "./pages/Eventos/EventoBautizo";
import DetalleBautizo from "./pages/Eventos/DetalleBautizo";
import EventoGraduacion from "./pages/Eventos/EventoGraduacion";
import DetalleGraduacion from "./pages/Eventos/DetalleGraduacion";
import EventoPrimeraComunion from "./pages/Eventos/EventoPrimeraComunion";
import DetallePrimeraComunion from "./pages/Eventos/DetallePrimeraComunion";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Principal />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/portafolio" element={<Portafolio />} />
        <Route path="/boda" element={<Boda />} />
        <Route path="/detalle" element={<Detalle />} />
        <Route path="/detalleXV" element={<DetalleXV />} />
        <Route path="/detallebautizo" element={<DetalleBautizo />} />
        <Route path="/detallegraduacion" element={<DetalleGraduacion />} />
        <Route path="/detallecomunion" element={<DetallePrimeraComunion />} />

        {/* Eventos */}
        <Route path="/eventos/xv" element={<EventoXV />} />
        <Route path="/eventos/bautizo" element={<EventoBautizo/>}/>
        <Route path="/eventos/graduacion" element={<EventoGraduacion />} />
        <Route path="/eventos/comunion" element={<EventoPrimeraComunion />} />

        {/* Sesiones */}
        <Route path="/sesiones/fotoidentificacion" element={<SesionesFotoIdentificacion />} />
        <Route path="/sesiones/fotoestudio" element={<SesionesFotoEstudio />} />
        <Route path="/sesiones/impresioncredencialpvc" element={<SesionesImpresionCredencialPVC />} />
        <Route path="/sesiones/caritabebe" element={<SesionesCaritaBebe />} />
        <Route path="/sesiones/cuadrosybasesescolares" element={<SesionesCuadrosyBasesEscolares />} />
        
      </Routes>
    </Router>
  );
}

export default App;
