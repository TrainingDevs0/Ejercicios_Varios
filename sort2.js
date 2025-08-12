/*5.- PARTE 2 { } [ ]
Ordena por número de caracteres de mayor a menor
 Ordena palabras según la cantidad de letras que tienen.
 Método sugerido: sort()*/

 function ordenar(elementos) {
    return elementos.sort((a, b) => b.length - a.length);
}

const palabras = ["manzana", "brócoli", "uva", "kiwi", "sandía"];

const ordenadas = ordenar(palabras);

console.log(ordenadas);  