const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingresa una palabra: ', (palabra) => {
    const palabraInvertida = palabra.split('').reverse().join('');
    if (palabra === palabraInvertida) {
        console.log('La palabra es un palíndromo.');
    } else {
        console.log('La palabra no es un palíndromo.');
    }
    rl.close();
});