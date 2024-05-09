//Ejercicio simple del uso de clases y objetos
//creación de objetos de la clase Bebé con diferentes valores en sus atributos

class Bebe {
    constructor(nombre, edad, comportamiento) {
        this.nombre = nombre;
        this.edad = edad;
        this.comportamiento = comportamiento;
    }
};

const bebe1 = new Bebe('Antonio', '3 meses', 'Llora');
const bebe2 = new Bebe('Sonia', '5 meses', 'Duerme');
const bebe3 = new Bebe('Javier', '8 meses', 'Come');

console.log('\n')
console.log('Nombre del bebe: ' + bebe1.nombre);
console.log('Edad: ' + bebe1.edad);
console.log(bebe1.nombre + ' ' + bebe1.comportamiento);
console.log('\n')

console.log('Nombre del bebe: ' + bebe2.nombre);
console.log('Edad: ' + bebe2.edad);
console.log(bebe2.nombre + ' ' + bebe2.comportamiento);
console.log('\n')

console.log('Nombre del bebe: ' + bebe3.nombre);
console.log('Edad: ' + bebe3.edad);
console.log(bebe3.nombre + ' ' + bebe3.comportamiento);