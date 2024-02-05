const { empleados, ciudades, estudiantes } = require("./data.js");

// 1: Hacer una función para obtener la sumatoria de todos los sueldos de los empleados.

const sumatoriaSueldos = empleados.reduce((acum, empleado) => {
  return acum + empleado.sueldo;
}, 0);
console.log(
  "La sumatoria de todos los sueldos de los empleados es:",
  sumatoriaSueldos
);

// 2: Hacer una función para obtener un array de todos los empleados que sean mujeres y mayores a 30 años.

const mayoresa30 = empleados.filter((empleado) => {
  return empleado.sexo == "f" && empleado.edad > 30;
});

console.log("Mujeres mayores de 30 años:", mayoresa30);

const mayoresa30v2 = empleados
  .filter((empleado) => empleado.sexo == "f")
  .filter((empleado) => empleado.edad > 30);

console.log("Mujeres mayores de 30 años:", mayoresa30v2);

//3: Hacer una función para obtener un array de todos los empleados varones ordenados por nombre.

const ordenarNombresVarones = empleados
  .filter((empleado) => {
    return empleado.sexo == "m";
  })
  .sort((emple1, emple2) => {
    return emple1.empleado.localeCompare(emple2.empleado);
  });

console.log(ordenarNombresVarones);

//4: Hacer una función para obtener el promedio de sueldos de los empleados del departamento de TICS.

const promedioSueldos =
  empleados
    .filter((empleado) => {
      return empleado.departamento === "TICS";
    })
    .reduce((acumulador, empleado) => acumulador + empleado.sueldo, 0) /
  empleados.filter((empleado) => empleado.departamento === "TICS").length;

console.log(promedioSueldos);

// 5: Hacer una función para obtener el promedio de temperaturas de todas las ciudades.

const promedioTemp =
  ciudades.reduce((acumulador, ciudad) => acumulador + ciudad.temp, 0) /
  ciudades.length;

console.log(promedioTemp);

//6: Hacer una función para obtener un array de todos los estudiantes que estén en la materia de Física con su promedio de notas.

const asignaturaFisica = estudiantes
  .filter((est) => {
    return est.materia == "Física";
  })
  .map((est) => {
    return {
      estudiante: est.nombre,
      asignatura: est.materia,
      promedio_parciales:
        est.notas_parciales.reduce((acum, va) => acum + va, 0) /
        est.notas_parciales.length,
    };
  });

console.log(asignaturaFisica);