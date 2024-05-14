// Ejercicio 4
// Promesa con retraso:
// Crea una función retrasarPromesa(ms) que devuelva una promesa que se resuelva después de un cierto tiempo
// especificado en milisegundos.

function retrasarPromesa(ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`La promesa de ha resuelto en ${ms} milisegundos`);
        }, ms);
    });
};

retrasarPromesa(2000)
    .then((mensaje) => {
        console.log(mensaje);
    });