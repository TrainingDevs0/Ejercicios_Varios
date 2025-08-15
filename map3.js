/*11.- MAP PARTE 1     { } [ ]
map (extraer propiedad)
A partir de un arreglo de contactos con nombre y correo, crea un nuevo arreglo que contenga solo 
los correos usando map.*/

/*const contactos = [
    {nombre:'Robert', correo:'robert1@gmail.com' },
    {nombre:'Ivana', correo:'iva1@gmail.com'},
    {nombre:'Angie', correo:'angie1@gmail.com'},
    {nombre:'Brenda', correo:'brenda1@gmail.com'}
];

const correos = contactos.map(contacto => contacto.correo);
console.log(correos);*/

//función
function contactos(elementos){
    const correos = elementos.map(contacto => contacto.correo);
    return correos; 
};
const elementos = [
    {nombre:'Robert', correo:'robert1@gmail.com' },
    {nombre:'Ivana', correo:'iva1@gmail.com'},
    {nombre:'Angie', correo:'angie1@gmail.com'},
    {nombre:'Brenda', correo:'brenda1@gmail.com'}
];
console.log(contactos(elementos));