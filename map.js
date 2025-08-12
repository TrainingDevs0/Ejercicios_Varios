//Dado un arreglo de precios, crea un nuevo arreglo con un 10% de descuento aplicado a cada uno usandomap//

/*const precios = [100, 250, 75, 300]; 
const preciosConDescuento = precios.map(precio => precio * 0.90);
console.log(preciosConDescuento);*/


//

/*11.- MAP PARTE 2     { } [ ]
/*Edita un elemento sin modificar el array original
 Cambia un elemento en el array y retorna uno nuevo.
 Método sugerido: map()*/

//por medio de arreglos:

/*var numeros = [10, 20, 30];                //con un arreglo
var doble = numeros.map (num => num * 2);
console.log(doble);*/


/*var grupo1 = [1, 2, 3];                   //con dos o mas arreglos
var grupo2 = [4, 5, 6];
var grupo3 = [7, 8, 9];  
var dobles1 = grupo1.map(num => num * 2);
var dobles2 = grupo2.map(num => num * 2);
var dobles3 = grupo3.map(num => num *2);

console.log(dobles1);
console.log(dobles2);
console.log(dobles3);*/


//


//fuction
/*function numerosgenerales(...elemento){  //permite recibir cualquier cantidad de arrays como parámetros.
    return [].concat(...elemento).map(num => num * 2); //se concatena todos los elementos con el return vacio
}
var grupo1 = [1, 2, 3];
var grupo2 = [4, 5, 6];
var grupo3 = [7, 8, 9];
var dobles = numerosgenerales(grupo1, grupo2, grupo3);

console.log(dobles);*/


//


/*2.-map PARTE 1       // { } [ ]
Dado un arreglo de precios, crea un nuevo arreglo con un 10% de descuento aplicado a cada uno 
usando map*/

//arreglo y funcion
/*var precios= [100, 200, 300, 400]; 
var totalprecio = precios.map(function(precio){ 
    return precio * 0.9; 
});
console.log(`aplicar el 10%: `, precios);
console.log(`resultado: `, totalprecio);*/

//
//funcion
function precios (precios){ 
    var totalprecio = precios.map(function(precio){ 
        return (precio * 0.9);
    });
    return totalprecio;
}
var precios1 = [100, 200, 300, 400];
var valores = precios(precios1);

console.log(precios1);
console.log(valores);
