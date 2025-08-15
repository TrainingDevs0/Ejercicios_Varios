/*13.-PARTE 1     { } [ ]
reduce (agrupamiento)
Con un arreglo de productos que tienen nombre y categoría, usa reduce para agrupar los 
productos por categoría en un objeto.*/
const productos = [
    { nombre: "Manzana", categoria: "Frutas" },
    { nombre: "Pera", categoria: "Frutas" },
    { nombre: "Lechuga", categoria: "Verduras" },
    { nombre: "Zanahoria", categoria: "Verduras" },
    { nombre: "Leche", categoria: "Lácteos" }
];
const agrupados = productos.reduce((acumulador, producto) => { // Si no existe la categoría, la inicializamos como arreglo vacío
  if (!acumulador[producto.categoria]) {
    acumulador[producto.categoria] = [];
  }  // Agregamos el producto al arreglo de su categoría
  acumulador[producto.categoria].push(producto);
  return acumulador;
}, {});
console.log(agrupados);