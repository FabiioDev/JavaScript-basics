//Ejercicio 9
//Menú de selección de funciones

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

askNum();

function askNum() {
    rl.question("Ingrese el ejercicio a ejecutar: ", (numEjercicio) => {
        switch (parseInt(numEjercicio)) {
            case 1:
                //llamado a function 1
                console.log("");
                ejercicio1();
                break;
            case 2:
                //llamado a function 2
                console.log("");
                ejercicio2();
                break;
            case 3:
                //llamado a function 3
                console.log("");
                ejercicio3();
                break;
            case 4:
                //llamado a function 4
                console.log("");
                ejercicio4();
                break;
            case 5:
                //llamado a function 5
                console.log("");
                ejercicio5();
                break;
            case 6:
                //llamado a function 6
                console.log("");
                ejercicio6();
                break;
            case 7:
                //llamado a function 7
                console.log("");
                ejercicio7();
                break;
            default:
                //No existe ese ejercicio
                console.log("Ingrese un número válido");
                rl.close();
                break;
        };
    });
};


//Ejercicio 7
function ejercicio7() {
    rl.question("Ingrese la categoría del vehículo: ", (vehicleCategory) => {
        let vehicleType;
        switch (vehicleCategory) {
            case "moto":
                vehicleType = "Motocicleta";
                break;
            case "auto":
                vehicleType = "Automovil";
                break;
            case "camion":
                vehicleType = "Super Camion";
                break;
            case "bici":
                vehicleType = "Bicicleta";
                break;
            default:
                vehicleType = "No existe";
                break;
        };
        console.log(vehicleType + '\n');
        askNum();
    });
};
/*

 */

//Ejercicio 6
function ejercicio6() {
    /* 
    const readline = require('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
 */
    rl.question("Ingrese el número del mes: ", (numMonth) => {
        let nameMonth;
        switch (parseInt(numMonth)) {
            case 1:
                nameMonth = "Enero";
                break;
            case 2:
                nameMonth = "Febrero";
                break;
            case 3:
                nameMonth = "Marzo";
                break;
            case 4:
                nameMonth = "Abril";
                break;
            case 5:
                nameMonth = "Mayo";
                break;
            case 6:
                nameMonth = "Junio";
                break;
            case 7:
                nameMonth = "Julio";
                break;
            case 8:
                nameMonth = "Agosto";
                break;
            case 9:
                nameMonth = "Septiembre";
                break;
            case 10:
                nameMonth = "Octubre";
                break;
            case 11:
                nameMonth = "Noviembre";
                break;
            case 12:
                nameMonth = "Diciembre";
                break;
            default:
                nameMonth = "No existe este mes";
                break
        }
        console.log(nameMonth + '\n');
        askNum();
    });
};
/*

 */

//Ejercicio 5
function ejercicio5() {
    rl.question("Ingrese el primer color: ", (color1) => {
        rl.question("Ingrese el segundo color: ", (color2) => {
            if (color1 === "azul" && color2 === "amarillo") {
                //verde
                console.log("La mezcla genera el color verde");
            } else if (color1 === "azul" && color2 === "rojo") {
                //morado
                console.log("La mezcla genera el color morado");
            } else if (color1 === "rojo" && color2 === "amarillo") {
                //naranja
                console.log("La mezcla genera el color naranja");
            } else {
                console.log("La combinación no se encuentra disponible.");
            };
            console.log("");
            askNum();
        });
    });
};
/*

*/


//Ejercicio 4
//Determinar si un número es par o impar
function ejercicio4() {
    rl.question("Ingrese el numero a evaluar: ", (num) => {
        if (parseFloat(num) % 2 === 0) {
            console.log("El numero es par");
        } else {
            console.log("El numero es impar");
        }
        console.log("");
        askNum();
    });
};
/*
 */

//Ejercicio 3
//Calcular el factorial de un número !, el factorial es
//multiplicar el resultado por la posición del número.
//El estado inical es 1
function ejercicio3() {
    rl.question("Digite un numero a calcular su factorial: ", (num1) => {
        let resultado = 1;
        for (let i = 1; i <= parseFloat(num1); i++) {
            resultado *= i;
        }
        console.log("El factorial es: " + resultado + '\n');
        askNum();
    });
};
/*
 */


//Ejercicio 2
//Calcular el mayor de 3 números
//ingresados por el usuario
function ejercicio2() {
    rl.question("Ingrese el 1er número: ", (numero1) => {
        rl.question("Ingrese el 2do número: ", (numero2) => {
            rl.question("Ingrese el 3er número: ", (numero3) => {
                num1 = parseInt(numero1);
                num2 = parseInt(numero2);
                num3 = parseInt(numero3);
                if (num1 > num2 && num1 > num3) {
                    console.log("El mayor de los 3 número es: " + num1 + '\n');
                }
                else if (num2 > num1 && num2 > num3) {
                    console.log("El mayor de los 3 número es: " + num2 + '\n');
                }
                else if (num3 > num1 && num3 > num2) {
                    console.log("El mayor de los 3 número es: " + num3 + '\n');
                };
                askNum();
            });
        });
    });
};
/*
 */


//Ejercicio 1
//Determinar si un número ingresado por el
//usuario es positivo, negativo o si es cero
function ejercicio1() {
    /*     
    console.log("Ejercicio 1");
        const readline = require('readline')
    
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        })
     */
    function isNegativeOrPositive(numero) {
        if (numero >= 1) {
            return console.log("El numero es positivo" + '\n');
        } else if (numero <= -1) {
            return console.log("El numero es negativo" + '\n');
        } else {
            return console.log("El numero es 0" + '\n');
        }
    };

    rl.question("Ingrese un número ", (numero) => {
        const num = isNegativeOrPositive(numero);
        askNum();
    });
};
/* 
*/



