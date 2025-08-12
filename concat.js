/*10.- reduce PARTE 2     { } [ ]
/*Agrega un elemento sin modificar el array original
Devuelve un nuevo array con un nuevo elemento al final.
Método sugerido: concat()*/

//método con arreglos (arrays)
/*const x = [1, 2, 3];
const r= [20, 30, 40];
const letras= ["a", "b", "c", "d"];
const yx = x.concat(r, 5, 6, letras); 

console.log(x);
console.log(yx);*/










//método por función 
/*function metodoConcat(arreglo, elemento){    //por medio de una función
    return arreglo.concat(elemento); 
}

const numeros = [1, 2, 3];
const resultado = metodoConcat(numeros, "a");

console.log(numeros);
console.log(resultado);*/





























//concat método tradicional
/*const letras1 = ["a", "b", "c"];
const numero = ["40"];
const nombre = ['Angie', 'Brenda'];
const nuevo = new Array(letras1.length+1);  
for (let i = 0; i<letras1.length; i++){   
     nuevo [i] = letras1 [i];
}

nuevo [letras1.length] = (numero)+(nombre);

console.log(nuevo);*/



























//funtion
/*function mercado(frutas, ...elementos){ 
    return frutas.concat (...elementos);
}

const fruta = ['pera', 'manzana', 'uvas'];
const vegetales = ['lechuga', 'brocoli', 'pepino'];
const carne = ['pollo', 'chancho', 'res'];
const mercados = mercado(fruta, vegetales, carne);

console.log(fruta);
console.log(mercados);*/


























function mercado(...listas){ 
    return [].concat(...listas).sort(); //vamos a retornar un arreglo vacio; el .sort hace que los elementos retornen los elementod alfabeticamente
}

const fruta = ['pera', 'manzana', 'uvas'];  //arrays o arreglos
const vegetales = ['lechuga', 'brocoli', 'pepino'];
const carne = ['pollo', 'chancho', 'res'];
const lacteos = ['yougurt', 'queso', 'mantequilla'];
const granos = ['lenteja', 'arroz', 'arveja', 'canguil'];

const mercados = mercado(fruta, vegetales, carne, lacteos, granos);

console.log(fruta);
console.log('Esta es la lista de ', mercados);