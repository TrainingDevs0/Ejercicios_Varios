/*7.- EVERY PARTE 1  { } [ ]
Dado un arreglo de notas, verifica si todos los estudiantes aprobaron (nota mayor o igual a 60) 
usando every.*/

/*const notas = [70, 60, 65, 83, 91];
const aprobaron = notas.every(nota => nota >= 60);
console.log(aprobaron);*/



//





//función

function notas(elementos){ 
    var aprobaron = elementos.every(nota => nota >= 60);
    return aprobaron;
};
var elementos= [70, 60, 65, 83, 91];

console.log(notas(elementos)); 

