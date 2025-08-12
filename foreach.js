/*1.- ForEach PARTE 1
Dado un arreglo de productos con nombre y precio, recorre el arreglo usando forEach e imprime 
cada producto con su precio en consola.*/

//Mezclado entre arreglo y función: 
/*const productos = [
    {nombre: 'Refrigeradora', precio: 200}, 
    {nombre: 'Lavadora', precio: 850},
    {nombre: 'Microondas', precio: 200},
    ];
productos.forEach((producto) => { //puede ir tambien así: productos.forEach(function(producto)
    console.log(`El producto es: ${producto.nombre}, con su precio de ${producto.precio}`);
});*/































//Usando función: 
function productos(...productoLista) { 
  productoLista.forEach(function(producto) { //puede ir tambien así: productoLista.forEach((producto) =>
    console.log(`El producto es: ${producto.nombre}, y su precio es: ${producto.precio}`);
  });
}

const totalproduc = productos(
  { nombre: 'Refrigeradora', precio: 200 },
  { nombre: 'Lavadora', precio: 850 },
  { nombre: 'Microondas', precio: 200 }
);
