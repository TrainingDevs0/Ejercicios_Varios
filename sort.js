/*9.- PARTE 1 { } [ ]
sort (alfabético)
Dado un arreglo de nombres, ordénalos alfabéticamente usando sort.*/

/*const nombres = ['Robert', 'Ivana', 'Angie', 'Brenda'];
const ordenar = nombres.sort();
console.log(ordenar);*/


//función
/*function nombres(elementos){ 
    const ordenar = elementos.sort();
    return ordenar;
};
const elementos = ['Robert', 'Ivana', 'Angie', 'Brenda'];
console.log(nombres(elementos));*/


































/*10.- PARTE 1 { } [ ]
SORT con objetos
Tienes un arreglo de empleados con nombre y edad. Ordena el arreglo de menor a mayor según la 
edad.*/
/*const empleados = [
    {nombre: "Ivana", edad: 30},
    {nombre: "Angie", edad: 22},
    {nombre: "Robert", edad: 19},
    {nombre: "Brenda", edad: 60}
];
const todosempleados = empleados.sort((a, b) => a.edad - b.edad);

console.log(todosempleados);*/

//función
function empleados(elementos){ 
    const todosempleados = elementos.sort((a, b)=> a.edad - b.edad);
    return todosempleados;
};
const elementos = [
    {nombre: "Ivana", edad: 30},
    {nombre: "Angie", edad: 22},
    {nombre: "Robert", edad: 19},
    {nombre: "Brenda", edad: 60}
];
console.log(empleados(elementos));

































/*4.- PARTE 2 { } [ ]
Ordena números de mayor a menor
Recibe un array de números y ordénalos de mayor a menor.
Método sugerido: sort((a, b) => b - a)*/

/*function ordenarMayorAMenor(elementos) {
    return elementos.sort((a, b) => b - a);
}

const numeros = [1, 20, 0, 52, 19, 15];
const ordenados = ordenarMayorAMenor(numeros);
console.log(ordenados);*/