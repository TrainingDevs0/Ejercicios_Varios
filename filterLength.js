/*filter + .length
Con un arreglo de productos con nombre y precio, filtra todos los productos cuyo precio es mayor a 
15000 y cuenta cuántos son.*/

//usando el método normal
/*const productos = [
    {marca: 'Hyundai', precio: 20000}, 
    {marca: 'Chevrolet', precio: 10000}, 
    {marca: 'Nissan', precio: 15000}, 
    {marca: 'Kia', precio: 30000}, 
    {marca: 'Suzuki', precio: 40000}
]; 

const productosFiltrados = productos.filter(elemento => elemento.precio > 15000); 
let conteo = productosFiltrados.length;

console.log(productos);
console.log(productosFiltrados);
console.log(conteo);*/































/*filter + .length
Con un arreglo de productos con nombre y precio, filtra todos los productos cuyo precio es mayor a 
15000 y cuenta cuántos son.*/
//usar con función
const productos = [
    {marca: 'Hyundai', precio: 20000}, 
    {marca: 'Chevrolet', precio: 10000}, 
    {marca: 'Nissan', precio: 15000}, 
    {marca: 'Kia', precio: 30000}, 
    {marca: 'Suzuki', precio: 40000}
]; 

function filtrarProductos (productos){
    return productos.filter(elementos => elementos.precio > 15000);
}

const resultadoProducto = filtrarProductos(productos); 
const conteo = resultadoProducto.length; 

console.log(resultadoProducto);
console.log(conteo);