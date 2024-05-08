const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Ingresa una frase: ', (frase) => {
    const palabras = frase.split(' ');
    console.log(`El número de palabras en la frase es: ${palabras.length}`);
    rl.close();
});