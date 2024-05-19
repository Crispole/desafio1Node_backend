const fs = require("fs");
const { registrar, leer } = require("./operaciones.js");

const argumentos = process.argv.slice(2);
const [comando, ...params] = argumentos;

const ejecutarComando = (comando, params) => {
    switch (comando) {
        case 'registrar':
            if (params.length !== 5) {
                console.warn("Ingresa los 5 argumentos necesarios para registrar al paciente");
            } else {
                const [nombre_animal, edad, tipo_animal, color, enfermedad] = params;
                registrar(nombre_animal, edad, tipo_animal, color, enfermedad);
            }
            break;
        case 'leer':
            leer();
            break;
        default:
            console.log("Las opciones son 'leer' o 'registrar'.");
            break;
    }
};

ejecutarComando(comando, params);
