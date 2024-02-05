// 7: Imprima para la materia de Matemática, todos los datos y la nota-final (suma de parciales + examen_final).

const { estudiantes } = require("./data.js");

const asigMath = estudiantes
  .filter((est) => {
    return est.materia == "Matemáticas";
  })
  .map((est) => {
    return {
      matricula: est.matricula,
      estudiante: est.nombre,
      asignatura: est.materia,
      nota_final:
        est.notas_parciales.reduce((acum, va) => acum + va, 0) +
        est.examen_final.teoría +
        est.examen_final.práctica,
    };
  });

console.log(asigMath);

