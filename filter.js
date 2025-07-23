const eliminar =  [1, 10, 100, 1000]; 
const valor = 100; 

const rta = eliminar.filter(elemento => elemento !== valor);

console.log('arreglo original', eliminar);

console.log('arreglo original', rta);