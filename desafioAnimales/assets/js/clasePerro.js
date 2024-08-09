// Clase hija de ANIMAL clase PERRO, hereda las propiedades de clase padre y contiene algo que la diferencia de las clases hermanas, como por ejemplo especie (canino)

import Animal from "./superClaseAnimal";

export default class Perro extends Animal{
    constructor(nombre, enfermedad){
        super(nombre, enfermedad)
    }
}