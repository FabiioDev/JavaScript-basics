//Función que recibe un arreglo de cadenas de texto y
//cuenta cuántas veces aparece cada palabra en todas las cadenas

function contarPalabras(array) {
    let contadorPalabras = {};
    array.forEach(cadena => {
        let palabras = cadena.split(/\s+/);
        palabras.forEach(palabra => {
            if (contadorPalabras[palabra]) {
                contadorPalabras[palabra]++;
            } else {
                contadorPalabras[palabra] = 1;
            }
        });
    });
    return contadorPalabras;
};

let palabrasArray = ["Hola buenos días", "Hola buenas tardes", "hola buenas noches"];
let resultado = contarPalabras(palabrasArray);
console.log(resultado);