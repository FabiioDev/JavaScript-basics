//Ejercicio 1
//Crea una función saludar(callback) que tome
//un nombre como argumento y llame al 
//callback con un saludo usando ese nombre.

function saludar(nombre, callback) {
    const saludo = `Hola, ${nombre}`
    callback(saludo);
}

function mostrar(saludo) {
    console.log(saludo);
}

saludar("Fabio", mostrar);