/*14.- filter PARTE 2     { } [ ]
Transforma un array de objetos a un array de strings
 Extrae una propiedad (nombre) de cada objeto.
 Método sugerido: map()*/


const personas = [
    { nombre: "Ana", edad: 25 },
    { nombre: "Luis", edad: 30 },
    { nombre: "María", edad: 28 }
];
const nombres = personas.map(persona => persona.nombre);
console.log(nombres);