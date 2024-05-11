//Ejercicio 7

function validarObjeto(objeto) {
    const propiedades = ['nombre', 'direccion', 'telefono'];
    for (let propiedad of propiedades) {
        if (objeto.hasOwnProperty(propiedad)) {
            let msj = "Objeto Aprobado";
            return msj;
        } else {
            let msj = "Objeto no probado";
            return msj;
        }
    };

};

let cliente = { nombre: "William", direccion: "San Miguel", telefono: 76905799 }
console.log(validarObjeto(cliente))