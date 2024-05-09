//Objeto que representa un producto con propiedades
//como nombre, precio y cantidad
//luego calcula el costo total, multiplicando el precio
//por la cantidad para varios productos y sumando los resultados

let ProductoA = {
    nombre: "Camisa",
    precio: 25,
    cantidad: 5
};

let ProductoB = {
    nombre: "Jeans",
    precio: 40,
    cantidad: 3
};

let costoTotalProductoA = ProductoA.precio * ProductoA.cantidad;
let costoTotalProductoB = ProductoB.precio * ProductoB.cantidad;

let costoTotal = costoTotalProductoA + costoTotalProductoB;

console.log(costoTotalProductoA);
console.log(costoTotalProductoB);
console.log("total: $" + costoTotal);