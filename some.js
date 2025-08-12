/*6.- some PARTE 1  //¿Al menos uno?"//     { } [ ]
Crea un programa que determine si en un arreglo de números hay al menos un 
número negativo usando el método SOME */


//arreglo

/*var numeros = [1, 3, -5, 0, 8];
var verNumeros = (numero) => numero < 0;
console.log(numeros.some(verNumeros));*/

//



//funcion
function numNegativos(elementos) {
    return elementos.some(numero => numero < 0);
}
var numeros = [1, 3, -5, 0, 8];
console.log(numNegativos(numeros)); 