/*14.- MAP PARTE 1     { } [ ]
map (actualización de stock)
 A partir de un arreglo de objetos que representan productos con su stock, actualiza el stock de un 
producto específico restando una unidad, sin modificar el arreglo original.*/
const productos = [
    { nombre: "Camisa", stock: 10 },
    { nombre: "Pantalón", stock: 5 },
    { nombre: "Zapatos", stock: 8 }
];
const productoActualizar = "Pantalón"; // Nombre del producto a actualizar
const productosActualizados = productos.map(producto => {
    if (producto.nombre === productoActualizar) { //=== compara si ambos nombres son exactamente iguales (mismo texto y tipo).
        return { ...producto, stock: producto.stock - 1 }; // Retornamos un nuevo objeto con stock reducido en 1 
    }
    return producto; // Para los demás productos, retornamos igual sin modificar
});
console.log(productosActualizados);