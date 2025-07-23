const productos = [
    {producto: "Lapiz", precio: 10},
    {producto: "Borrador", precio: 50},
    {producto: "Regla", precio: 40},
];
productos.forEach(function(producto, indice){
    console.log(`El producto en la posicion #${indice+1} es: ${producto.producto} y tiene el valor de: $${producto.precio}`);
});

/*const nombres = ["Angie", "Brenda", "Ivana", "Hugo"];
nombres.forEach (function(nombres, indice) {
  console.log(`El nombre en la posición ${indice+1} es: ${nombres}`);
});*/
