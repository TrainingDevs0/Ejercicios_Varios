/*12.-PARTE 1     { } [ ]
reduce (promedio)
Dado un arreglo de calificaciones, calcula el promedio general usando reduce.*/
/*const calificaciones = [6, 10, 7, 8, 10, 9];
const calculaCali = calificaciones.reduce((acumulador, nota) => acumulador + nota, 0);
const promedio = calculaCali/calificaciones.length; 

console.log(promedio);*/


//función
function calificaciones(elementos){ 
    const calculaCali = elementos.reduce ((acumulador, nota) => acumulador + nota, 0);
    const promedio = calculaCali/elementos.length; 
    return promedio;
};
const elementos = [6, 10, 7, 8, 10, 9];
console.log(calificaciones(elementos));