/*12.- filter PARTE 2     { } [ ]
Elimina un elemento sin modificar el array original
 Filtra el array para remover un valor dado.
 Método sugerido: filter()*/



function eliminarElemento(arr, valorAEliminar) { //ayuda
    return arr.filter(elemento => elemento !== valorAEliminar);
}

const original = [1, 2, 3, 4, 3, 5];
const valorEliminar = 3;

const nuevoArray = eliminarElemento(original, valorEliminar);

console.log("Array original:", original);       // [1, 2, 3, 4, 3, 5]
console.log("Nuevo array:", nuevoArray);