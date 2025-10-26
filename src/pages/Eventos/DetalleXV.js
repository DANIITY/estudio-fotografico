import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './DetalleXV.css';

function DetalleXV() {
  const navigate = useNavigate();
  const [seleccionados, setSeleccionados] = useState([]);
  const [mensajeEnviado, setMensajeEnviado] = useState(false);
  const [nombreCliente, setNombreCliente] = useState('');
  const [fechaEvento, setFechaEvento] = useState('');

  useEffect(() => {
    const serviciosGuardados = JSON.parse(localStorage.getItem("serviciosSeleccionados")) || [];

    // Solo un paquete permitido
    const paquetes = serviciosGuardados.filter(s => s.tipo === "paquete");
    const servicios = serviciosGuardados.filter(s => s.tipo === "servicio");
    const listaFinal = paquetes.length > 0 ? [...servicios, paquetes[0]] : servicios;

    setSeleccionados(listaFinal);
    localStorage.setItem("serviciosSeleccionados", JSON.stringify(listaFinal));
  }, []);

  const handleConfirmar = () => {
    if (seleccionados.length === 0) {
      alert("No hay servicios seleccionados.");
      return;
    }

    if (!nombreCliente.trim() || !fechaEvento.trim()) {
      alert("Por favor, ingresa tu nombre y la fecha del evento antes de confirmar.");
      return;
    }

    let mensaje = `¡Hola! Soy ${nombreCliente} y estoy interesado en los siguientes servicios o paquete para mi evento de XV años para el día ${fechaEvento}:\n\n`;
    seleccionados.forEach((item, index) => {
      mensaje += `${index + 1}. ${item.nombre} - $${item.precio}\n`;
    });
    const total = seleccionados.reduce((acc, item) => acc + item.precio, 0);
    mensaje += `\n Total: $${total}\n\n¿Podrías darme más información, por favor?`;

    const numeroFotografo = "+5215610912232";
    const urlWhatsApp = `https://wa.me/${numeroFotografo}?text=${encodeURIComponent(mensaje)}`;

    alert("Has confirmado tu selección de servicios y paquetes.");
    window.open(urlWhatsApp, "_blank");
    setMensajeEnviado(true);
    localStorage.removeItem("serviciosSeleccionados");
  };

  const handleEliminar = (nombre) => {
    const filtrados = seleccionados.filter(s => s.nombre !== nombre);
    setSeleccionados(filtrados);
    localStorage.setItem("serviciosSeleccionados", JSON.stringify(filtrados));
  };

  const handleEscogerMas = () => { 
    navigate('/eventos/xv');
  };

  const total = seleccionados.reduce((acc, item) => acc + item.precio, 0);
  const tieneServicios = seleccionados.some(item => item.tipo === "servicio");

  if (seleccionados.length === 0) {
    return (
      <div className="detalle-container-xv">
        <p style={{ color: '#fff', fontSize: '1.2rem', textAlign: 'center' }}>
          No hay servicios seleccionados.
        </p>
        <button className="btn-volver-xv" onClick={handleEscogerMas}>
          Escoger más servicios
        </button>
      </div>
    );
  }

  return (
    <div className="detalle-container-xv">
      <h1 className='xv-h1'>Detalles de tu selección</h1>

      <div className="detalle-info-xv">
        <label>
          Nombre del cliente:
          <input
            type="text"
            value={nombreCliente}
            onChange={(e) => setNombreCliente(e.target.value)}
            placeholder="Ingresa tu nombre completo"
            className="detalle-input-xv"
          />
        </label>

        <label>
          Fecha del evento:
          <input
            type="date"
            value={fechaEvento}
            onChange={(e) => setFechaEvento(e.target.value)}
            className="detalle-input-xv"
          />
        </label>
      </div>

      <div className="detalle-lista-xv">
        {seleccionados.map((item, index) => (
          <div className="detalle-card-xv" key={index}>
            <img src={item.imagen} alt={item.nombre} className="detalle-img-xv" />
            <h2>{item.nombre}</h2>
            <h4>{item.tipo === 'servicio' ? 'Servicios para XV años' : 'Paquetes de XV años'}</h4>
            <p className="detalle-descripcion-xv">{item.descripcion}</p>
            <h3 className="detalle-precio-xv">Precio: ${item.precio}</h3>
            <button className="btn-eliminar-xv" onClick={() => handleEliminar(item.nombre)}>
              Eliminar
            </button>
          </div>
        ))}
      </div>

      <h2 className="detalle-total-xv">Total: ${total}</h2>

      <div className="detalle-botones-xv">
        {!mensajeEnviado && (
          <button className="btn-confirmar-xv" onClick={handleConfirmar}>
            Confirmar selección
          </button>
        )}

        {tieneServicios && !mensajeEnviado && (
          <button className="btn-volver-xv" onClick={handleEscogerMas}>
            Escoger más servicios
          </button>
        )}
      </div>

      {mensajeEnviado && (
        <div className="mensaje-confirmado-xv">
          <p>✅ Tu mensaje fue enviado al fotógrafo por WhatsApp.</p>
          <Link to="/" className="btn-volver-principal-xv">
            Volver a la página principal
          </Link>
        </div>
      )}
    </div>
  );
}

export default DetalleXV;
