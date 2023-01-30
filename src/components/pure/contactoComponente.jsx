import React from 'react';

const ContactoComponente = ({ contacto, estado, eliminar, añadir }) => {
    return (
        <div className='contenedorContacto'>
            <p><b>Nombre:</b> {contacto.nombre}</p>
            <p><b>Apellido:</b> {contacto.apellido}</p>
            <p><b>TLF:</b> {contacto.tlf}</p>
            <p><b>Estado:</b> {contacto.conectado ? "Conectado" : "Desconectado"}</p>
            <button onClick={() => estado(contacto)}>{contacto.conectado ? "Desconectar" : "Conectar"}</button>
            <button onClick={() => eliminar(contacto)}>Eliminar</button>
        </div>
    );
}

export default ContactoComponente;
