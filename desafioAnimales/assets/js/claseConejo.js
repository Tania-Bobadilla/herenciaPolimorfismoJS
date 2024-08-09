// Clase hija de ANIMAL clase CONEJO, hereda las propiedades de clase padre y contiene algo que la diferencia de las clases hermanas, como por ejemplo especie (lagomorfo)

import Animal from "./superClaseAnimal";

export default class Conejo extends Animal{
    constructor(nombre, enfermedad){
        super(nombre, enfermedad)
    }
}