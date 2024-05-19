const fs = require('fs');
const path = 'citas.json';

const leerArchivo = (ruta) => JSON.parse(fs.readFileSync(ruta, 'utf8'));
const escribirArchivo = (ruta, datos) => fs.writeFileSync(ruta, JSON.stringify(datos, null, 2));

const registrar = (nombre_animal, edad, tipo_animal, color, enfermedad) => {
    const lista = leerArchivo(path); // Lee las citas actuales desde 'citas.json'
    lista.push({ nombre_animal, edad, tipo_animal, color, enfermedad }); // Agrega la nueva cita
    escribirArchivo(path, lista); // Guarda la lista actualizada en 'citas.json'
    console.log(`Registrado: ${nombre_animal}, ${edad}, ${tipo_animal}, ${color}, ${enfermedad}`);
};

const leer = () => {
    const lista = leerArchivo(path); // Lee todas las citas desde 'citas.json'
    if (lista.length === 0) {
        console.log("No hay citas registradas");
    } else {
        lista.forEach(({ nombre_animal, edad, tipo_animal, color, enfermedad }, index) => {
            console.log(`Cita ${index + 1}:`);
            console.log(` - Nombre: ${nombre_animal}`);
            console.log(` - Edad: ${edad}`);
            console.log(` - Tipo: ${tipo_animal}`);
            console.log(` - Color: ${color}`);
            console.log(` - Enfermedad: ${enfermedad}`);
        });
    }
    return lista;
};

module.exports = { registrar, leer };
