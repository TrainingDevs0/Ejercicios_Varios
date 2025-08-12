/*4.- find PARTE 1       // { } [ ]
Dado un arreglo de usuarios con id y user, encuentra al usuario que tenga como nombre 
"admin" usando find.*/

/*const usuarios = [
    {id: 1, user: "Ivana"},
    {id: 2, user: "admin"},
    {id: 3, user: "Angie"},
    {id: 4, user: "Brenda"}
];

const encontrarAdmin = usuarios.find(usuario => usuario.user === "admin");

console.log(`el resultado es:`, encontrarAdmin);*/



//



//Función  // { } [ ]
function encontrarAdmin(usuarios){ 
    const usuarioAdmin = usuarios.find(usuario => usuario.user === "admin");
    return usuarioAdmin; 
} 

const usuarios = [ 
    {id: 1, user: "Iva"},
    {id: 2, user: "admin"},
    {id: 3, user: "Angie"} 
];

console.log(encontrarAdmin(usuarios));
