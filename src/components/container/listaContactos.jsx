import React, { useRef, useState } from 'react';
import { Contacto } from '../../models/contacto.class';
import ContactoComponente from '../pure/contactoComponente';

const ListaContactos = () => {

    const contactoPrueba = new Contacto("Diego", "Alarcon", "635123456", false)
    const contactoPrueba2 = new Contacto("Paco", "Perez", "635123456", false)

    const [contactos, setContacto] = useState([contactoPrueba, contactoPrueba2]);

    function cambiarEstado(contacto) {
        const index = contactos.indexOf(contacto)
        const tempContacto = [...contactos]
        tempContacto[index].conectado = !tempContacto[index].conectado
        setContacto(tempContacto)
    }

    function eliminarContacto(contacto) {
        const index = contactos.indexOf(contacto)
        const tempContacto = [...contactos]
        tempContacto.splice(index, 1)
        setContacto(tempContacto)
    }

    function añadirContacto(contacto) {
        const tempContacto = [...contactos]
        tempContacto.push(contacto)
        setContacto(tempContacto)
    }

    const nombreRef = useRef("")
    const apellidoRef = useRef("")
    const tlfRef = useRef("")

    function submitCrear(e) {
        e.preventDefault()
        const nuevoContacto = new Contacto(
            nombreRef.current.value,
            apellidoRef.current.value,
            tlfRef.current.value,
            false
        )
        añadirContacto(nuevoContacto)
    }

    return (
        <div className='contenedorLista'>
            <h2>Lista de contactos</h2>
            {contactos.map((contacto, index) => {
                return (
                    <ContactoComponente
                        key={index}
                        contacto={contacto}
                        estado={cambiarEstado}
                        eliminar={eliminarContacto}
                    />
                )
            }
            )}
            <h3>Crear nuevo contacto</h3>
            <form onSubmit={submitCrear}>
                <input ref={nombreRef} required placeholder='Introduzca el nombre' />
                <input ref={apellidoRef} required placeholder='Introduzca el apellido' />
                <input ref={tlfRef} required placeholder='Introduzca el teléfono' />
                <button type='submit'>Crear</button>
            </form>
        </div>
    );
}

export default ListaContactos;
