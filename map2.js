/*15.- MAP PARTE 2     { } [ ]
Calcula y agrega una nueva propiedad en un array
Agrega una propiedad total (por ejemplo con IVA) a cada objeto.
Método sugerido: map()*/

const productos = [
    { nombre: "Camisa", precio: 20 },
    { nombre: "Pantalón", precio: 35 },
    { nombre: "Zapatos", precio: 50 }
];

const productosConIVA = productos.map(p => ({
    ...p, // copia todas las propiedades (nombre y precio)
    total: p.precio * 1.12 // 1 representa el 100% del precio total y 0.12 representa el 12% de impuestos
}));

console.log(productosConIVA);