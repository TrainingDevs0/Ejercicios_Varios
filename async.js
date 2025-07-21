// Simula una operación asincrónica como una llamada a un servidor
function esperar(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Función asíncrona principal
async function ejecutarProceso() {
  console.log('Iniciando proceso...');

  await esperar(2000); // Espera 2 segundos
  console.log('Paso 1 completado');

  await esperar(1000); // Espera 1 segundo
  console.log('Paso 2 completado');

  await esperar(1500); // Espera 1.5 segundos
  console.log(' Proceso finalizado');
}

// Ejecutar la función
ejecutarProceso();
