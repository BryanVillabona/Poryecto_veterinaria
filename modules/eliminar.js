import { mascotas } from "./registro.js";

const eliminarMascotaPorNombre = async (nombreMascota, confirmar = true) => {
  const index = mascotas.findIndex(
    (m) => m.nombre.toLowerCase() === nombreMascota.toLowerCase()
  );

  if (index === -1) {
    console.error("no se encontró la mascota.");
    return;
  }

  if (!confirmar) {
    console.warn("Eliminación cancelada por el usuario.");
    return;
  }

  console.log(`Eliminando mascota...`);
  await new Promise((res) => setTimeout(res, 2000));

  const eliminada = mascotas.splice(index, 1)[0];
  console.log(`Mascota eliminada del sistema: ${eliminada.nombre}`);
};

export { eliminarMascotaPorNombre };
