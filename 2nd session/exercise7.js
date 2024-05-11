//Ordena un arreglo de objetos según una propiedad
//específica, como la edad o el precio

//Ordenar por edad
let personas = [
    { nombre: "Juan", edad: 24 },
    { nombre: "Maria", edad: 23 },
    { nombre: "Manfredi", edad: 25 },
    { nombre: "Ester", edad: 30 },
]

let personasOrdenadas = personas.sort((a, b) => a.edad - b.edad);
console.log(personasOrdenadas);