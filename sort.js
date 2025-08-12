/*4.- PARTE 2 { } [ ]
Ordena números de mayor a menor
Recibe un array de números y ordénalos de mayor a menor.
Método sugerido: sort((a, b) => b - a)*/

function ordenarMayorAMenor(elementos) {
    return elementos.sort((a, b) => b - a);
}

const numeros = [1, 20, 0, 52, 19, 15];
const ordenados = ordenarMayorAMenor(numeros);
console.log(ordenados); 