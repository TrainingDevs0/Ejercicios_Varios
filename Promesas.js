const promesa1 = new Promise((resolve, reject) => {
  // Simulamos una tarea que tarda 1 segundo
  setTimeout(() => {
    const exito = true; // cámbialo a false para ver el error
    if (exito) {
      resolve("✅ La promesa se resolvió correctamente!");
    } else {
      reject("❌ La promesa fue rechazada.");
    }
  }, 1000);
});

// Consumimos la promesa:
promesa1
  .then(resultado => console.log(resultado))  // se ejecuta si hay éxito
  .catch(error => console.error(error));       // se ejecuta si hay error

  const promesa2 = new Promise((resolve, reject) => {
  // Simulamos una tarea que tarda 1 segundo
  setTimeout(() => {
    const exito = true; // cámbialo a false para ver el error
    if (exito) {
      resolve("✅ La promesa se resolvió correctamente!");
    } else {
      reject("❌ La promesa fue rechazada.");
    }
  }, 1000);
});

// Consumimos la promesa:
promesa2
  .then(resultado => console.log(resultado))  // se ejecuta si hay éxito
  .catch(error => console.error(error));       // se ejecuta si hay error