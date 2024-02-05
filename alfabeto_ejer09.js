// 9: Diseñe la función que recibe como parámetro una letra del alfabeto(puede estar en mayúsculas o minúsculas).
// La función devuelve el array de estudiantes ordenado para aquellos personas que empiezan con esa letra.
// Campos a mostrar: matricula, nombres, materia, promedio_final

const { estudiantes } = require("./data.js");

const estudiantesPorLetra = (letra) => {
  return estudiantes
    .filter((est) => {
      return est.nombre.charAt(0).toLowerCase() == letra.toLowerCase();
    })
    .map((est) => {
      return {
        matricula: est.matricula,
        nombres: est.nombre,
        materia: est.materia,
        promedio_final:
          (est.notas_parciales.reduce((acum, va) => acum + va, 0) +
            est.examen_final.teoría +
            est.examen_final.práctica) /
          4,
      };
    });
};
console.log(estudiantesPorLetra("a"));
