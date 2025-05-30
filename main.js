import {
  duenios,
  mascotas,
  registrarDuenio,
  registrarMascota
} from "/modules/registro.js";

import {
  buscarMascotaPorNombre,
  verMascotasPorCedula
} from "/modules/buscar.js";

import {
  actualizarEstadoSalud
} from "/modules/estado_salud.js";

import {
  eliminarMascotaPorNombre
} from "/modules/eliminar.js";

// 🧭 Menú para mostrar en consola
const mostrarMenuConsola = () => {
  console.clear();
  console.log(`
1. registrarDuenio(nombre, cedula, telefono, correo)
2. registrarMascota(nombre, especie, edad, peso, estado, cedulaDueño)
3. mostrarMascotas()
4. buscarMascotaPorNombre(nombre)
5. actualizarEstadoSalud(nombre, nuevoEstado)
6. eliminarMascotaPorNombre(nombre, confirmar = true)
7. verMascotasPorCedula(cedula)
8. salir()
`);
};

const mostrarMascotas = () => {
  if (mascotas.length === 0) {
    console.warn("No hay mascotas registradas");
  } else {
    console.log("Mascotas registradas:");
    mascotas.forEach((m) => console.log(m));
  }
};

const salir = () => {
  console.log("Saliendo...");
};

mostrarMenuConsola();

window.registrarDuenio = registrarDuenio;
window.registrarMascota = registrarMascota;
window.buscarMascotaPorNombre = buscarMascotaPorNombre;
window.actualizarEstadoSalud = actualizarEstadoSalud;
window.eliminarMascotaPorNombre = eliminarMascotaPorNombre;
window.verMascotasPorCedula = verMascotasPorCedula;
window.mostrarMascotas = mostrarMascotas;
window.salir = salir;



