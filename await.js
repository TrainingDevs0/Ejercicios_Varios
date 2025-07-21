// Función que simula una petición con un retardo
function obtenerDatos() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Datos recibidos del servidor");
        }, 2000); // espera 2 segundos
    });
}

// Función async que usa await
async function mostrarDatos() {
    console.log("Esperando los datos...");
    const resultado = await obtenerDatos();
    console.log("Resultado:", resultado);
}

// Ejecutar la función
mostrarDatos();