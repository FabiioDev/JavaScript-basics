const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Ingrese una cadena de texto: ', (cadena) => {
    console.log(`Número de caracteres: ${cadena.length}`)
}); 