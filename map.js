//Dado un arreglo de precios, crea un nuevo arreglo con un 10% de descuento aplicado a cada uno usandomap//

const precios = [100, 250, 75, 300]; 
const preciosConDescuento = precios.map(precio => precio * 0.90);
console.log(preciosConDescuento); 
