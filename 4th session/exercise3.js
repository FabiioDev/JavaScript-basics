// Ejercicio 3
// Callback anidado:
// Modifica la función de multiplicación para que acepte un callback como tercer argumento y llame al callback
// con el resultado

function multiply(a, b, callback) {
    const resultado = a * b;
    callback(resultado);
};

multiply(6, 3, (resultado) => {
    console.log(`Resultado: `, resultado);
});