//Dado un arreglo de números, crear una nueva
//lista con los cuadrados de cada número
//utilizando el método map()

let numeros = [2, 5, 6, 9, 12];

let cuadradoNumeros = numeros.map(numero => numero ** 2)

console.log(numeros);
console.log(cuadradoNumeros);