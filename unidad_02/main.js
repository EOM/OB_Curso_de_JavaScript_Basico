// Definir los elementos
const nombre = "Sergio";
const edad = 40;
const esDesarrollador = true;
const fechaNacimiento = new Date("1998-01-01");
const libroFavorito = {
    titulo: "Mi libro favorito",
    autor: "Autor del libro",
    fecha: new Date("2022-01-01"),
    url: "https://ejemplo.com"
};

// Mostrar los elementos por consola
console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("¿Eres desarrollador?", esDesarrollador);
console.log("Fecha de nacimiento:", fechaNacimiento);
console.log("Libro favorito:");
console.log("- Título:", libroFavorito.titulo);
console.log("- Autor:", libroFavorito.autor);
console.log("- Fecha:", libroFavorito.fecha);
console.log("- URL:", libroFavorito.url);