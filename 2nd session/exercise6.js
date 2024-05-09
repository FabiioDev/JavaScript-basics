//Crea una función que reciba un arreglo
//de objetos con propiedades como
//nombre, edad y género
//y busque un objeto específico por nombre

let persona = [
    { nombre: "Pedro", edad: 25, genero: "masculino" },
    { nombre: "Ana", edad: 29, genero: "femenino" },
    { nombre: "Andrea", edad: 22, genero: "femenino" },
    { nombre: "Carlos", edad: 27, genero: "masculino" }
]

function buscarPorNombre(arrayPersona, nombre) {
    return arrayPersona.find(objeto => objeto.nombre === nombre)
};

let personaBuscada = buscarPorNombre(persona, "Pedro");
console.log(personaBuscada);