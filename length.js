/*3.- PARTE 2 { } [ ]
Calcula el total de palabras de un texto
Divide un texto y cuenta cuántas palabras hay.
Métodos sugeridos: split(), length*/

function contarPalabras(texto) {  //trim elimina espacios al inicio y al final del texto para evitar contar palabras vacías.
    const palabras = texto.trim().split(/\s+/); //divide el texto en un array usando uno o más espacios en blanco como separadores (esto incluye espacios, tabs, saltos de línea).
    return palabras.length; //nos da el número total de elementos en el array, es decir, las palabras.
}
const texto = "Hola, somos el grupo de Training Devs";
console.log(contarPalabras(texto));