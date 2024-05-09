//Objetos en clases
class Animal {
    constructor(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
    }
    sonido() {
        console.log('Haciendo sonidos');
    }
}
const perro = new Animal('Odi', 'Perro');
console.log(perro.nombre);
perro.sonido();


//creación de un objeto usando Object.create
/* const persona = {
    //inicializador del constructor
    nombre: '',
    edad: 0,
    esEstudiante: false
};

const persona1 = Object.create(persona);
persona1.nombre = 'Felix';
persona1.edad = 30;
console.log(persona1.nombre);
console.log(persona1.edad); */

//Contstructor de objetos
/* function Persona(nombre, edad, esEstudiante) {
    this.nombre = nombre;
    this.edad = edad;
    this.esEstudiante = esEstudiante;
}

const persona1 = new Persona('Juan', 30, true);
console.log(persona1.nombre); */

/* class Persona {
    constructor(nombre, edad, telefono) {
        this._nombre = nombre;
        this._edad = edad;
        this._telefono = telefono;
    }
} */


//creación de un objeto
/* 
const Persona = {
    nombre: 'Juan',
    edad: 30,
    esEstudiante: true,
};

console.log(Persona) */