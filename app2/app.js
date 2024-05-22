//fs librería para lectura y otras operaciones de archivos

//Eliminación de una carpeta en específico
/* const fs = require('fs');
const path = require('path');
const readline = require('readline');

const documentos = path.join(process.env.Home || process.env.USERPROFILE, 'Documents');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Nombre de la carpeta a eliminar: ', (carpeta) => {
    rl.close();
    const carpetaDel = path.join(documentos, carpeta);
    fs.rmdir(carpetaDel, { recursive: true }, (err) => {
        if (err) {
            console.log('Error al eliminar la carpeta ', err);
        } else {
            console.log('La carpeta fue elminada succesfully');
        }
    });
}); */

//Creación de carpeta en una ruta específica
/*
const path = require('path');
const readline = require('readline');

const documentos = path.join(process.env.Home || process.env.USERPROFILE, 'Documents');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Nombre de la carpeta a crear: ', (carpeta) => {
    rl.close();
    const nuevaCarpeta = path.join(documentos, carpeta);
    fs.mkdir(nuevaCarpeta, { recursive: true }, (err) => {
        if (err) {
            console.log('Error al crear la carpeta ', err);
        } else {
            console.log('Carpeta creada exitosamente');
        }
    });
});
*/

//Lectura de archivo en una ruta específica
/*
const ruta = 'C:/Users/faboo/Desktop/file.txt';

fs.readFile(ruta, 'utf8', (err, data) => {
    if (err) {
        console.error('Error al leer el archivo');
    } else {
        console.log('Contenido del archivo', data);
    }
});
*/

//Uso de append
/*
const contenidoAgregado = '\nNuevo contenido';

fs.appendFile('archivo.txt', contenidoAgregado, (err) => {
    if (err) {
        console.error('Error al agregar el contenido');
    } else {
        console.log("Contenido agregado");
    }
});
 */

//sobreescritura del archivo
/*
const contenido = "Este es el nuevo contenido";
fs.writeFile('archivo.txt', contenido, (err) => {
    if (err) {
        console.error('Error al escribir el archivo');
    } else {
        console.log('El archivo fue reescrito');
    }
});
 */

//Lectura
/* 
fs.readFile('archivo.txt', 'utf8', (err, data) => {
    if (err) {
        console.log('Error al leer el archivo');
    } else {
        console.log('CONTENIDO DEL ARCHIVO: ', data);
    }
});
 */

