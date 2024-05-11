//Dado un objeto que representa una lista de compras con
//elementos y cantidades, genera una lista legible para
//para el usuario mostrando cada elemento y su cantidad

//Lista de datos

let listaCompras = {
    "Manzanas": 2,
    "Platanos": 3,
    "Elotes": 2,
    "Pan": 1
}

function generarListaCompras() {
    let listalegible = "Lista de compras: \n";

    for (let elemento in listaCompras) {
        listalegible += `${elemento} : ${listaCompras[elemento]} unidades \n`
    }
    return listalegible;
}

let listalegible = generarListaCompras(listaCompras);
console.log(listalegible);