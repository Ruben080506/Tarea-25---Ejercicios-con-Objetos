// 10: Imprima el array de ciudades con temperaturas menores que 20 grados, ordenado descendentemente por el nombre de la ciudad.

const { ciudades } = require("./data.js");

const Temp = (ciudades) =>
  ciudades
    .filter((ciudad) => ciudad.temp < 20)
    .sort((a, b) => b.ciudad.localeCompare(a.nombre));

console.log(Temp(ciudades));
