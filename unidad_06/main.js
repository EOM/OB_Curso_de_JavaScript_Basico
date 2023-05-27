let listaCompra = ["Manzanas", "Pan", "Leche", "Huevos", "Arroz"];
listaCompra.push("Aceite de Girasol");
listaCompra = listaCompra.filter(item => item !== "Aceite de Girasol");

const peliculasFavoritas = [
    {
        titulo: "El Padrino",
        director: "Francis Ford Coppola",
        fecha: "1972"
    },
    {
        titulo: "El Señor de los Anillos: La Comunidad del Anillo",
        director: "Peter Jackson",
        fecha: "2001"
    },
    {
        titulo: "Origen",
        director: "Christopher Nolan",
        fecha: "2010"
    }
];

// Lista con películas posteriores al 1 de enero de 2010
const peliculasPosteriores2010 = peliculasFavoritas.filter(pelicula => pelicula.fecha > "2010");

const directores = peliculasFavoritas.map(pelicula => pelicula.director);
const titulos = peliculasFavoritas.map(pelicula => pelicula.titulo);
const directoresYTitulos = directores.concat(titulos);
const directoresYTitulosSpread = [...directores, ...titulos];

console.log("Lista de la compra:", listaCompra);
console.log("Películas favoritas:", peliculasFavoritas);
console.log("Películas posteriores a 2010:", peliculasPosteriores2010);
console.log("Directores:", directores);
console.log("Títulos:", titulos);
console.log("Directores y títulos (concat):", directoresYTitulos);
console.log("Directores y títulos (spread):", directoresYTitulosSpread);
