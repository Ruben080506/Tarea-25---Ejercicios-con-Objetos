// Diseñe la función que recibe como parámetro un entero.
// La función debe devolver todos los estudiantes cuyo promedio_final sea mayor o igual que el parámetro entero.
// Los datos a devolver son: nombre_estudiante, nombre_asignatura, promedio_final ((suma de notas_parciales +  examen_final) divido para 4)

const { estudiantes } = require("./data.js");

const promedioFinal = estudiantes
  .filter((est) => {
    return (
      (est.notas_parciales.reduce((acum, va) => acum + va, 0) +
        est.examen_final.teoría +
        est.examen_final.práctica) /
        4 >=
      30
    );
  })
  .map((est) => {
    return {
      nombre_estudiante: est.nombre,
      nombre_asignatura: est.materia,
      promedio_final:
        (est.notas_parciales.reduce((acum, va) => acum + va, 0) +
          est.examen_final.teoría +
          est.examen_final.práctica) /
        4,
    };
  });

console.log(promedioFinal);
