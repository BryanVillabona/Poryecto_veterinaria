const duenios = [];
let idDuenio = 1;

const mascotas = [];
let idMascota = 1;

const estadosSaludValidos = ["Sano", "Enfermo", "En tratamiento"];

const validarDatosDuenio = ({ nombre, cedula, telefono, correo }) => {
  return (
    nombre.trim() !== "" && cedula.trim() !== "" && telefono.trim() !== "" && correo.trim() !== ""
  );
};

const validarDatosMascota = ({ nombre, especie, edad, peso, estado, idDuenio }) => {
  return (
    nombre.trim() !== "" && especie.trim() !== "" && !isNaN(edad) && edad > 0 && !isNaN(peso) && peso > 0 && estadosSaludValidos.includes(estado) && idDuenio !== null
  );
};

const buscarDuenioPorCedula = (cedula) => {
  return duenios.find((d) => d.cedula === cedula) || null;
};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const registrarDuenio = async (nombre, cedula, telefono, correo) => {
  const nuevoDuenio = { id: idDuenio++, nombre, cedula, telefono, correo };

  console.log("Un momento por favor..");
  await delay(1500);

  if (validarDatosDuenio(nuevoDuenio)) {
    duenios.push(nuevoDuenio);
    console.log("Se ha registrado correctamente");
    console.log(nuevoDuenio);
  } else {
    console.error("Error: Todos los campos son obligatorios");
  }
};

const registrarMascota = async (nombre, especie, edad, peso, estado, cedulaDueño) => {
  console.log("un momento por favor..");
  await delay(2000);

  const duenio = buscarDuenioPorCedula(cedulaDueño);
  if (!duenio) {
    console.error("No hay ningun dueño con esa cedula");
    return;
  }

  const nuevaMascota = {
    id: idMascota++,
    nombre,
    especie,
    edad,
    peso,
    estado,
    idDuenio: duenio.id,
  };

  if (validarDatosMascota(nuevaMascota)) {
    mascotas.push(nuevaMascota);
    console.log("se ha registrado correctamente.");
    console.log(nuevaMascota);
  } else {
    console.error("incorrecto. Verifique que todos los datos.");
  }
};

export {
  duenios,
  mascotas,
  estadosSaludValidos,
  registrarDuenio,
  registrarMascota,
  buscarDuenioPorCedula
};
