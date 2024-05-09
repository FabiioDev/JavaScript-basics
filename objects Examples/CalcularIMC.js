//Calculo del IMC de una persona haciendo uso de clases y objetos

class Persona {
    constructor(peso, altura, nombre) {
        this._peso = peso;
        this._altura = altura;
        this._nombre = nombre;
    };

    calculateIMC() {
        return this._peso / (this._altura * this._altura);
    };

    mostrar() {
        let imc = this.calculateIMC();
        console.log("El imc de " + `${this._nombre}` + " es de: " + `${imc}`);
    };
};

const persona1 = new Persona(60, 1.70, 'Pedro');
persona1.mostrar();

