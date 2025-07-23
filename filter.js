/*const eliminar = [1, 80, 7, 9, 77, 6];
const valor = 80;
const resultado = eliminar.filter (elemento => elemento !== valor);
console.log ("Arreglo original",eliminar);
console.log ('Arreglo modificado', resultado);*/


const nombres = ['Brenda', 'Ivana', 'Angie', 'Hugo'];
const resultado = nombres.filter ((nombre)=> nombre.length >5);
console.log ('Los nombres que tienen mas de 5 letras son:',resultado);


const numeros = [10, 11, 11, 5 , 8, 8, 10];
const duplicados = numeros.filter ((elemento)=> elemento)