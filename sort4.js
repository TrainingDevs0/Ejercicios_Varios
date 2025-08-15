/*7.- PARTE 2 { } [ ]
Ordena una lista de nombres por el apellido
 Si los nombres tienen formato "Nombre Apellido", ordena por el apellido.
 Método sugerido: sort(), split(" ")*/
const nombres = [
    "Ivana Samaniego",
    "Angie Rodríguez",
    "Robert Zapata",
    "Brenda López"
];
const ordenadosPorApellido = nombres.sort((a, b) => {
    const apellidoA = a.split(" ")[1]; //separar por espacio
    const apellidoB = b.split(" ")[1]; //toma el índice  [1] que es el 1
    return apellidoA.localeCompare(apellidoB); //localeCompare: compara alfabéticamente dos strings.
});
console.log(ordenadosPorApellido);