/*9.- some PARTE 2     { } [ ]
Calcula la frecuencia con la que aparece un número
 Cuenta cuántas veces aparece un número específico en un array.
 Método sugerido: reduce()*/

function contarFrecuencia(arr, numeroBuscado) {  //ayuda
    return arr.reduce((contador, num) => {
        return num === numeroBuscado ? contador + 1 : contador;
    }, 0);
}

const numeros = [23, 9, 5, 9, 97, 9, 2, 9, 50];
const numeroParaContar = 9;

const frecuencia = contarFrecuencia(numeros, numeroParaContar);

console.log(`El número ${numeroParaContar} aparece ${frecuencia} veces`);