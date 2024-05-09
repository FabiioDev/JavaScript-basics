//Ejercicio que obtiene la fecha actual usando un
//objeto de tipo Date() y sus métodos como
//getHours, getMinutes, getSeconds

let fecha = new Date();
let hora = fecha.getHours();
let minutos = fecha.getMinutes();
let segundos = fecha.getSeconds();

console.log("La hora actual es: " + `${hora}` + ':' + `${minutos}` + ':' + `${segundos}`);
