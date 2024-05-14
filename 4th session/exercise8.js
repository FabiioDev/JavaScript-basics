//Ejercicio 8
// Promesa con error:
// Modifica la función de división para que devuelva una promesa y rechace con un mensaje de error si se intenta
// dividir por cero.

function dividir(a, b) {
    return new Promise((resolve, reject) => {
        if (b === 0) {
            reject('Error: el divisor es cero');
        } else {
            const resultado = a / b;
            resolve(resultado);
        }
    });
}

dividir(10, 0)
    .then((resultado) => {
        console.log("Resultado es: ", resultado);
    })
    .catch((error) => {
        console.log(error);
    });