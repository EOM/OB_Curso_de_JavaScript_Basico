// Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)
const datosPersonales = {
    nombre: "Juan",
    apellido: "Pérez",
    edad: 30,
    altura: 175,
    eresDesarrollador: true
};

// Una variable que obtenga tu edad a partir del objeto anterior
const edad = datosPersonales.edad;

// Una lista que contenga el objeto con tus datos personales y un nuevo objeto
// con los datos personales de tus dos mejores amig@s
const listaDatosPersonales = [
    datosPersonales,
    {
        nombre: "María",
        apellido: "Gómez",
        edad: 28,
        altura: 160,
        eresDesarrollador: false
    },
    {
        nombre: "Pedro",
        apellido: "López",
        edad: 32,
        altura: 180,
        eresDesarrollador: true
    }
];

// Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor
const listaOrdenadaPorEdad = listaDatosPersonales.sort(
    (a,
     b) => b.edad - a.edad);

// Salida
console.log("Datos personales:", datosPersonales);
console.log("Edad:", edad);
console.log("Lista de datos personales:", listaDatosPersonales);
console.log("Lista ordenada por edad:", listaOrdenadaPorEdad);