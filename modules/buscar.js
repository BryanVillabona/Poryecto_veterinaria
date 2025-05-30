import { mascotas, duenios, buscarDuenioPorCedula } from "./registro.js";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const buscarMascotaPorNombre = async (nombreBuscado) => {
  if (!nombreBuscado || nombreBuscado.trim() === "") {
    console.error("nombre no puede estar vacio");
    return;
  }

  console.log("Buscando, por favor espere..");
  await delay(1500);

  const resultado = mascotas.filter(
    (m) => m.nombre.toLowerCase() === nombreBuscado.toLowerCase()
  );

  if (resultado.length > 0) {
    console.log(`Se ha encontrado su mascota: `);
    resultado.forEach((m) => console.log(m));
  } else {
    console.warn("ninguna mascota se llama asi");
  }
};

const verMascotasPorCedula = async (cedula) => {
  if (!cedula || cedula.trim() === "") {
    console.error("cédula no puede estar vacía.");
    return;
  }

  const duenio = buscarDuenioPorCedula(cedula);
  if (!duenio) {
    console.error("no se encontró el dueño");
    return;
  }

  console.log(`revisando registro, por favor espere..`);
  await delay(2000);

  const mascotasDelDuenio = mascotas.filter((m) => m.idDuenio === duenio.id);

  if (mascotasDelDuenio.length === 0) {
    console.warn("usted no tiene ninguna mascota registrada");
  } else {
    console.log(`Mascotas encontradas para ${duenio.nombre}:`);
    mascotasDelDuenio.forEach((m) => console.log(m));
  }
};

export {
  buscarMascotaPorNombre,
  verMascotasPorCedula
};
