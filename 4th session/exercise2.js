//Ejercicio 2
// Promesa simple:
// Crea una función multiplicarPromise(a, b) que
// devuelva una promesa que resuelva el resultado de la
// multiplicación de a y b

function multiplyPromise(a, b) {
    return new Promise((resolve, reject) => {
        const resultado = a * b;

        if (isNaN(resultado)) {
            reject(` ERROR NO HAY ARGUMENTOS VALIDOS`);
        } else {
            resolve(resultado);
        };
    });
};

multiplyPromise(2,)
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((error) => {
        console.log(error);
    });