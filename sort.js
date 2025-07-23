function mayor_a_menor(num){
    for (var i = 0; i < num.length - 1;i++){
        for (var j = 0; j < num.length - i - 1; j++){
            if (num[j] < num [j+1]){
                var temp = num [j];
                num [j] = num [j+1];
                num [j+1] = temp;
            }
        }
    }

    return num;
}
const num = [10, 50, 80, 99, 5];
console.log (mayor_a_menor(num)); 




let numeros = [10, 50, 80, 77, 900];
numeros.sort ((a,b)=>b-a);
console.log (numeros);  


function ordenamiento (num){
    return num.sort ((a,b)=> b-a);
}

var arreglo = [500,100,300,600];
var orden = ordenamiento (arreglo);
console.log (ordenamiento(arreglo));
