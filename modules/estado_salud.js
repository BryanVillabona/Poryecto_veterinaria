import { mascotas, estadosSaludValidos } from "./registro.js";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const actualizarEstadoSalud = async (nombreMascota, nuevoEstado) => {
  if (!nombreMascota || nombreMascota.trim() === "") {
    console.error("error. no puede estar vacio");
    return;
  }

  const mascota = mascotas.find(
    (m) => m.nombre.toLowerCase() === nombreMascota.toLowerCase()
  );

  if (!mascota) {
    console.error("no se encontró ninguna mascota.");
    return;
  }

  if (!estadosSaludValidos.includes(nuevoEstado)) {
    console.error("el estado es incorrecto, digite solo alguna de las siguientes opciones: ", estadosSaludValidos.join(", "));
    return;
  }

  console.log(`revisando su mascota, por favor espere...`);
  await delay(1000);

  mascota.estado = nuevoEstado;
  console.log(`Estado actualizado: ${mascota.nombre} ahora está "${nuevoEstado}".`);
  console.log(mascota);
};

export { actualizarEstadoSalud, delay };
