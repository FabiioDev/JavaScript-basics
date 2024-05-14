//Ejercicio 10
// Promesa combinada:
// Combina varias promesas utilizando Promise.all para esperar a que todas se resuelvan antes de ejecutar una
// acción final.

function tarea1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Tarea 1 funcionando");
        }, 1500);
    });
}
function tarea2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Tarea 2 funcionando");
        }, 1500);
    });
}
function tarea3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Tarea 3 funcionando");
        }, 1500);
    });
}

Promise.all([tarea1(), tarea2(), tarea3()])
    .then((resultado) => {
        console.log("Las tareas han finalizado: ");
        resultado.forEach((resultado) => {
            console.log(resultado);
        });
        console.log('Accion al final ejecutada');
    })
    .catch((error) => {
        console.log('Error: ', error);
    });