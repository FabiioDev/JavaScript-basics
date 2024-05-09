//Tomar un arreglo de números y utiliza una
//iteración para sumar únicamente los
//números pares

let arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sumaPares = 0;
for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] % 2 == 0) {
        sumaPares += arreglo[i];
    };
};

console.log(sumaPares);