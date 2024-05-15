//Ejercicio de prueba de correos
//correo: 
//Asunto: Implementación de servidor de correos, 
//Cuerpo del correo: ¡Servidor de correo funcionando excelente!
//Contraseña: pin pin plon pin pin plon

//~ Somebody once told me
//~ The world is gonna roll me
//~ I ain't the sharpest tool in the shed

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "emiterEmail@gmail.com", //correo del emisor
        pass: "Conoces a pin pon, pin pon? si :,(" //reemplazar la contraseña de app
    }
});

let mail = {
    from: "emiterEmail@gmail.com", //emisor del correo
    to: "receiverEmail@hotmail.com", //receptor del correo
    subject: "Prueba de servidor de correos", //asunto del correo
    text: "¡Servidor de correo funcionando, excelente!" + //Mensaje del correo
        "Prueba de servidor de correos por Gojira",
    html: `
    <h1>¡Servidor de correo funcionando, excelente! 
    Prueba de servidor de correos por emiter</h1>
    `
};

transporter.sendMail(mail, (error, info) => {
    if (error) {
        console.error("Error sending email: ", error);
    }
    else {
        console.log("Email sent.");
    }
});


//Ejercicio 2, creación de server con express
/*
const express = require('express');
const app = express();

const PORT = 4000;

app.get('/', (req, res) => {
    res.send('Este es un servidor básico usando express');
});

app.listen(PORT, () => {
    console.log(`Server iniciado http://localhost:${PORT}`);
});
 */

//Ejercicio 1: uso de shuffle
/* 
const shuffle = require('lodash/shuffle');

const array = [9, 3, 5, 6, 2];

const arrayAcomodado = shuffle(array);

console.log(arrayAcomodado); 
*/