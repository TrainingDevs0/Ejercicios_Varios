/*Agrega un elemento sin modificar el array original
Devuelve un nuevo array con un nuevo elemento al final.
Método sugerido: concat()*/

/*const x = [1, 2, 3];
const r= [20, 30, 40];
const letras= ["a", "b", "c", "d"];
const yx = x.concat(r, 5, 6, letras); 

console.log(x);
console.log(yx);*/











/*function metodoConcat(arreglo, elemento){    //por medio de una función
    return arreglo.concat(elemento); 
}

const numeros = [1, 2, 3];
const resultado = metodoConcat(numeros, "a");

console.log(numeros);
console.log(resultado);*/





























//concat método tradicional
const letras1 = ["a", "b", "c"];
const letras2 = [40];
const nuevo = new Array(letras1.length+1); 
for (let i = 0; i<letras1.length; i++){   
     nuevo [i] = letras1[i];
}
nuevo [letras1.length] = letras2;

console.log(nuevo);