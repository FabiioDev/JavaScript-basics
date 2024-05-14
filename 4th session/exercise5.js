// Ejercicio 5
// Ejecución asincrónica:
// Utiliza setTimeout dentro de una función para simular una operación asincrónica y llamar a un callback una vez
// que se complete.

function asyncOperation(callback) {
    setTimeout(() => {
        callback('Operacion asincrona completada');
    }, 8000);
};

asyncOperation((mensaje) => {
    console.log(mensaje);
});