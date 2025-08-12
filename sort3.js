/*6.- PARTE 2 { } [ ]
Ordena un array de objetos por fecha
 Ordena objetos por su propiedad fecha.
 Método sugerido: sort(), new Date()*/

const fechas = [
    { nombre: "Evento A", fecha: "2023-08-15" },
    { nombre: "Evento B", fecha: "2024-06-15" },
    { nombre: "Evento C", fecha: "2025-11-28" }
];

function ordenarPorFecha(elemento) {
    return elemento.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
}
const eventosOrdenados = ordenarPorFecha(fechas);
console.log(eventosOrdenados);