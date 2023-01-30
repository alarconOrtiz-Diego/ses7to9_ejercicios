export class Contacto {
    nombre = "";
    apellido = "";
    tlf = "";
    conectado = false;

    constructor(nombre, apellido, tlf, conectado){
        this.nombre = nombre;
        this.apellido = apellido;
        this.tlf = tlf;
        this.conectado = conectado
    }
}