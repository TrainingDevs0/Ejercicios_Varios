/*13.- filter PARTE 2     { } [ ]
Multiplica todos los elementos por dos
 Devuelve un nuevo array con todos los elementos multiplicados por 2.
 Método sugerido: map()*/

function multiplicarPorDos(elementos) {
    return elementos.map(elemento => elemento * 2);
}
const numeros = [1, 2, 3, 4, 5];
const resultado = multiplicarPorDos(numeros);
console.log(resultado);