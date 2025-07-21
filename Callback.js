function procesarUsuario(nombre, callback) {
  console.log('Procesando usuario...');

  setTimeout(() => {
    console.log('Proceso completo.');
    callback(nombre);
  }, 2000);
}

// Callback que muestra un saludo
function saludarUsuario(nombre) {
  console.log(`¡Hola, ${nombre}!`);
}

// Uso
procesarUsuario('Brenda', saludarUsuario);