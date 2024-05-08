const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Ingrese una palabra: ', (cadena) => {
    console.log(cadena.toUpperCase());
    rl.close();
});

// rl.question('Ingrese una palabra ', (palabra) => {
//     console.log(palabra.toUpperCase());
// })