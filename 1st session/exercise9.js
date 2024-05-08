const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese una palabra: ', (palabra) => {
    const vocales = palabra.match(/[aeiou]/gi);
    const numerosVocales = vocales ? vocales.length : 0;
    console.log(`Número de vocales: ${numerosVocales}`);
    rl.close();
});