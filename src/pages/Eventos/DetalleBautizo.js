import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './DetalleBautizo.css';

function DetalleBautizo() {
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

    let mensaje = `¡Hola! Soy ${nombreCliente} y estoy interesado en los siguientes servicios o paquete para mie evento de Bautizo  para el día ${fechaEvento}:\n\n`;
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
    navigate('/eventos/bautizo');
  };

  const total = seleccionados.reduce((acc, item) => acc + item.precio, 0);
  const tieneServicios = seleccionados.some(item => item.tipo === "servicio");

  if (seleccionados.length === 0) {
    return (
      <div className="detalle-container-bautizo">
        <p style={{ color: '#fff', fontSize: '1.2rem', textAlign: 'center' }}>
          No hay servicios seleccionados.
        </p>
        <button className="btn-volver-bautizo" onClick={handleEscogerMas}>
          Escoger más servicios
        </button>
      </div>
    );
  }

  return (
    <div className="detalle-container-bautizo">
      <h1 className='bautizo-h1'>Detalles de tu selección</h1>

      <div className="detalle-info-bautizo">
        <label>
          Nombre del cliente:
          <input
            type="text"
            value={nombreCliente}
            onChange={(e) => setNombreCliente(e.target.value)}
            placeholder="Ingresa tu nombre completo"
            className="detalle-input-bautizo"
          />
        </label>

        <label>
          Fecha del evento:
          <input
            type="date"
            value={fechaEvento}
            onChange={(e) => setFechaEvento(e.target.value)}
            className="detalle-input-bautizo"
          />
        </label>
      </div>

      <div className="detalle-lista-bautizo">
        {seleccionados.map((item, index) => (
          <div className="detalle-card-bautizo" key={index}>
            <img src={item.imagen} alt={item.nombre} className="detalle-img-bautizo" />
            <h2>{item.nombre}</h2>
            <h4>{item.tipo === 'servicio' ? 'Servicios para Bautizos' : 'Paquetes de Bautizos'}</h4>
            <p className="detalle-descripcion-bautizo">{item.descripcion}</p>
            <h3 className="detalle-precio-bautizo">Precio: ${item.precio}</h3>
            <button className="btn-eliminar-bautizo" onClick={() => handleEliminar(item.nombre)}>
              Eliminar
            </button>
          </div>
        ))}
      </div>

      <h2 className="detalle-total-bautizo">Total: ${total}</h2>

      <div className="detalle-botones-bautizo">
        {!mensajeEnviado && (
          <button className="btn-confirmar-bautizo" onClick={handleConfirmar}>
            Confirmar selección
          </button>
        )}

        {tieneServicios && !mensajeEnviado && (
          <button className="btn-volver-bautizo" onClick={handleEscogerMas}>
            Escoger más servicios
          </button>
        )}
      </div>

      {mensajeEnviado && (
        <div className="mensaje-confirmado-bautizo">
          <p>✅ Tu mensaje fue enviado al fotógrafo por WhatsApp.</p>
          <Link to="/" className="btn-volver-principal-bautizo">
            Volver a la página principal
          </Link>
        </div>
      )}
    </div>
  );
}

export default DetalleBautizo;