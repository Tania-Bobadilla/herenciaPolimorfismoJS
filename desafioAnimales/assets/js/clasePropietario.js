// clase PROPIETARIO que no heredada nadie de nada (creo) pero esta unida o colabora con la clase ANIMAL o MASCOTA (verificar)
class Propietario {
    constructor(nombre, direccion, telefono, email, animal){
        this._nombre = nombre;
        this._direccion = direccion;
        this._telefono = telefono;
        this._email = email;
        this._animal = animal; //o sea creo que no se le pasa asi, pero ok bueno despues lo arreglo o aprendo a pasarlo propietario.mascota.nombre?? o algo asi dijo el profe
    };

    // setters y getters van aqui como siempre duh

    get nombre(){
        return this._nombre;
    };

    set nombre(nombre){
        this._nombre = nombre;
    };

    get nombre(){
        return this._nombre;
    };

    set nombre(nombre){
        this._nombre = nombre;
    };




}