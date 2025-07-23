function duplicados (arreglo){
    return arreglo.filter ((valor, indice, lectura)=> lectura.indexOf (valor) === indice);
} 
const numeros = [10, 11, 11, 15, 15, 15, 4, 4];
const resultado = duplicados (numeros);
console.log (resultado);
console.log (numeros);