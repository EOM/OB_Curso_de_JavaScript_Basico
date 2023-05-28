// - Un nuevo Set con los nombres de tu familia
const nombresFamilia = new Set(["Juan", "María", "Pedro", "Laura"]);
// - Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)
nombresFamilia.add("Juan");
// - Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)
nombresFamilia.add("Javascript");
// Salida
console.log("Nombres de la familia:", nombresFamilia);
