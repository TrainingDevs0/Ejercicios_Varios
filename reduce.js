/*5.- find PARTE 1       // { } [ ]
reduce: Dado un arreglo de montos de ventas, utiliza reduce para calcular el total de las ventas.*/

//arreglo
/*var montosVentas = [200, 400, 1000, 250, 350];
var inicial = 0;
var calcularTotal = montosVentas.reduce((acum, actual )=> acum + actual, inicial,); //acum = 0 + actual = 200 (Ejm: 0+200)

console.log(calcularTotal);*/


//



//función
function montosVentas(valores){ 
    var inicial = 0;
    var calcularTotal = valores.reduce ((acum, actual) => acum + actual, inicial);
    return calcularTotal;
}
    var valores= [200, 400, 1000, 250, 350];

    console.log(montosVentas(valores));
