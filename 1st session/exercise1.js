const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Ingrese su nombre: ', (nombre) => {
    rl.question('Ingrese su apellido: ', (apellido) => {
        console.log(`Hola mi nombre es ${nombre} ${apellido}`)
    })
});