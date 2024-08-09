// Primero voy a hacer la SUPER CLASE de la cual las clases hijos van a hederar propiedades luego

export default class Animal {

    constructor(nombre, enfermedad){
        this._nombre = nombre;
        this._enfermedad = enfermedad;
    }

    // getters y setters van aqui abajo
    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get enfermedad(){
        return this._enfermedad;
    }

    set enfermedad(enfermedad){
        this._enfermedad = enfermedad;
    }
    

}