const empleados = [
  {
    cod: "001",
    empleado: "Juan Pérez",
    edad: 24,
    sueldo: 1600,
    sexo: "m",
    departamento: "FINANCIERO",
  },
  {
    cod: "002",
    empleado: "Luisa Gómez",
    edad: 28,
    sueldo: 1800,
    sexo: "f",
    departamento: "FINANCIERO",
  },
  {
    cod: "003",
    empleado: "Carlos Fernández",
    edad: 35,
    sueldo: 2000,
    sexo: "m",
    departamento: "FINANCIERO",
  },
  {
    cod: "004",
    empleado: "Ana Martínez",
    edad: 26,
    sueldo: 1700,
    sexo: "f",
    departamento: "TICS",
  },
  {
    cod: "005",
    empleado: "Javier Ramírez",
    edad: 31,
    sueldo: 2100,
    sexo: "m",
    departamento: "FINANCIERO",
  },
  {
    cod: "006",
    empleado: "Elena Sánchez",
    edad: 40,
    sueldo: 1900,
    sexo: "f",
    departamento: "TICS",
  },
  {
    cod: "007",
    empleado: "Ruben Bone",
    edad: 18,
    sueldo: 1500,
    sexo: "m",
    departamento: "TICS",
  },
  {
    cod: "008",
    empleado: "Laura Rodríguez",
    edad: 29,
    sueldo: 2200,
    sexo: "f",
    departamento: "FINANCIERO",
  },
  {
    cod: "009",
    empleado: "Alejandra López",
    edad: 33,
    sueldo: 2300,
    sexo: "f",
    departamento: "TICS",
  },
];

const ciudades = [
  { ciudad: "Londres", temp: 18 },
  { ciudad: "Guayaquil", temp: 30 },
  { ciudad: "Cuenca", temp: 20 },
  { ciudad: "Manta", temp: 25 },
  { ciudad: "Loja", temp: 22 },
  { ciudad: "Ambato", temp: 19 },
  { ciudad: "Esmeraldas", temp: 27 },
  { ciudad: "Cali", temp: 30 },
  { ciudad: "Portoviejo", temp: 24 },
];

const estudiantes = [
  {
    matricula: "001",
    nombre: "Ruben Bone",
    materia: "Matemáticas",
    notas_parciales: [45, 48, 47],
    examen_final: {
      teoría: 20,
      práctica: 15,
    },
  },
  {
    matricula: "002",
    nombre: "Daniel Herrera",
    materia: "Física",
    notas_parciales: [42, 36, 49],
    examen_final: {
      teoría: 22,
      práctica: 16,
    },
  },
  {
    matricula: "003",
    nombre: "José Pérez",
    materia: "Física",
    notas_parciales: [35, 28, 45],
    examen_final: {
      teoría: 20,
      práctica: 20,
    },
  },
  {
    matricula: "004",
    nombre: "Ana López",
    materia: "Física",
    notas_parciales: [32, 27, 43],
    examen_final: {
      teoría: 10,
      práctica: 15,
    },
  },
  {
    matricula: "005",
    nombre: "Jorge Ramírez",
    materia: "Programación",
    notas_parciales: [38, 32, 47],
    examen_final: {
      teoría: 18,
      práctica: 18,
    },
  },
  {
    matricula: "006",
    nombre: "Isabel Gómez",
    materia: "Matemáticas",
    notas_parciales: [42, 36, 49],
    examen_final: {
      teoría: 17,
      práctica: 25,
    },
  },
  {
    matricula: "007",
    nombre: "Martín Soto",
    materia: "Programación",
    notas_parciales: [36, 30, 46],
    examen_final: {
      teoría: 17,
      práctica: 6,
    },
  },
  {
    matricula: "008",
    nombre: "Laura Martínez",
    materia: "Matemáticas",
    notas_parciales: [34, 29, 44],
    examen_final: {
      teoría: 5,
      práctica: 15,
    },
  },
  {
    matricula: "009",
    nombre: "Carlos González",
    materia: "Programación",
    notas_parciales: [39, 33, 48],
    examen_final: {
      teoría: 10,
      práctica: 6,
    },
  },
];

module.exports = {
  empleados,
  ciudades,
  estudiantes,
};
