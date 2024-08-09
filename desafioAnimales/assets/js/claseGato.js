// Clase hija de ANIMAL clase GATO, hereda las propiedades de clase padre y contiene algo que la diferencia hermanas, como por ejemplo especie (felino)

import Animal from "./superClaseAnimal";

export default class Gato extends Animal{
    constructor(nombre, enfermedad){
        super(nombre, enfermedad)
    }
}

