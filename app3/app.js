//Usó de la librería inquirer para interactividad en la cmd

import inquirer from "inquirer";

const askNameAge = [
    {
        type: 'input',
        name: 'nombre',
        message: 'Ingrese su nombre: '
    },
    {
        type: 'input',
        name: 'edad',
        message: 'Ingrese su edad: ',
        validate: function (value) {
            if (parseInt(value) >= 18) {
                console.log('\nUsted es mayor de edad');
                return true;
            } else {
                console.log('\nUsted no es mayor de edad');
            }
        }
    }
];

const askEmailPassword = [
    {
        type: 'input',
        name: 'correo',
        message: 'Registre un correo porfavor',
        validate: function (value) {
            const validacion = value.match(
                //regex
                /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
            );
            if (validacion) {
                return true;
            }
            return 'Porfavor introduce un correo válido';
        }
    },
    {
        type: 'password',
        name: 'contrasena',
        message: 'Ingrese una contraseña',
        mask: '*'
    },
];

const validateCredentials = [
    {
        type: 'input',
        name: 'correo',
        message: 'Ingrese su correo',
        validate: function (value) {
            const validacion = value.match(
                //regex
                /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
            );
            if (validacion) {
                return true;
            }
            return 'Porfavor introduce un correo válido';
        }
    },
    {
        type: 'password',
        name: 'contrasena',
        message: 'Ingrese su contraseña',
        mask: '*'
    },
];

let edad;
let userEmail;
let userPassword;

inquirer.prompt(askNameAge).then((respuesta) => {
    edad = parseInt(respuesta.edad);
    if (respuesta.edad.validate) {
        console.log(`Bienvenido ${respuesta.nombre}, usted puede registrarse`);
    }
    /* if (edad >= 18) {
        console.log(`Bienvenido ${respuesta.nombre}, usted tiene ${edad} años`);
        validateEmail();
    } else {
        console.log('Usted no es mayor de edad');
    } */
});

function validateEmail() {
    inquirer.prompt(askEmailPassword).then((respuesta) => {
        console.log(`El correo: ${respuesta.correo} fue registrado correctamente`);
        userEmail = respuesta.correo;
        userPassword = respuesta.contrasena;
        console.log(`Ingrese sus credenciales para acceder`);
        login(userEmail, userPassword);
    });
}

function login(email, emailPassword) {
    let accessEmail;
    let accessPassword;
    inquirer.prompt(validateCredentials)
        .then((respuesta) => {
            accessEmail = respuesta.correo;
            accessPassword = respuesta.contrasena;
            if (accessEmail === email && accessPassword === emailPassword) {
                console.log('Ingresó correctamente sus credenciales, bienvenido');
            } else {
                console.log('Inicio de sesión no válido');
                console.log('Ingrese nuevamente sus credenciales');
                login(email, emailPassword);
            }
        });

}





//Ejercicio 3, validaciones
//validación de un correo electrónico
/*
import inquirer from "inquirer";
const pregunta = [
    {
        type: 'input',
        name: 'correo',
        message: 'Introduce tu correo: ',
        validate: function (value) {
            const validacion = value.match(
                //regex
                /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
            );
            if (validacion) {
                return true;
            }
            return 'Porfavor introduce un correo válido';
        }
    }
];

inquirer.prompt(pregunta)
    .then((respuesta) => {
        console.log(`Correo ingresado: ${respuesta.correo}`);
    })
    .catch((error) => {
        console.error('Error al ingresar el correo', error);
    });
*/

//Ejercicio 2, uso de inquirer con prompt
/*
import inquirer from "inquirer";

inquirer.prompt([
    {
        type: 'checkbox',
        name: 'frutas',
        message: 'Selecciona tus frutas favoritas:',
        choices: ['Manzana', 'Banana', 'Uvas', 'Naranja']
    }
])

    .then((respuesta) => {
        // console.log('Frutas seleccionadas: ', respuesta.frutas.join(','));
        console.log('Frutas seleccionadas: ', respuesta.frutas.join(' y '));
        let frutas = respuesta.frutas;
        if (frutas.includes('Manzana') && frutas.includes('Banana')) {
            console.log("Licuado Fresco de manzana y banana");
        } else if (frutas.includes('Manzana') && frutas.includes('Naranja')) {
            console.log("Licuado ácido de manzana y naranja");
        } else if (frutas.includes('Banana') && frutas.includes('Naranja')) {
            console.log("Licuado Jumex de banana y naranja");
        }


    });
//manzana y banana. licuado fresco
//manzana y naranja. licuado acido
//banana y naranja. licuado jumex
*/

//Ejercicio 1, uso de inquirer
/* 
import inquirer from "inquirer";

const pregunta = [
    {
        type: 'input',
        name: 'nombre',
        message: 'Diga su nombre: '
    },
    {
        type: 'confirm',
        name: 'confirmacion',
        message: 'Seguro que ese es el nombre?'
    },
    {
        type: 'list',
        name: 'colores',
        message: 'Cual es tu color favorito',
        choices: ['Rojo', 'Verde', 'Azul']
    },
    {
        type: 'checkbox',
        name: 'intereses',
        message: 'Selecciona una opción',
        choices: ['Base de datos', 'Diseño', 'Redes']
    },
    {
        type: 'password',
        name: 'contraseña',
        message: 'Ingresa tu contraseña: ',
        mask: '*'
    },
];

inquirer.prompt(pregunta).then((respuesta) => {
    if (respuesta.confirmacion) {
        console.log(`Hola ${respuesta.nombre}`);
        console.log('Confirmación exitosa');
        console.log(`Tu color favorito es: ${respuesta.colores}`);
        console.log(`Tus interes son: ${respuesta.intereses.join(', ')}`);
        console.log(`Ingresa tu contraseña: ${respuesta.contraseña}`);
    } else {
        console.log('No se confirmo el nombre');
    }
});
 */