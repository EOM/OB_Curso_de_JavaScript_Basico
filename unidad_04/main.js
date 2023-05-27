const nombre = "Tu Nombre";
const apellido = "Tu Apellido";

const estudiante = nombre + " " + apellido;
const estudianteMayus = estudiante.toUpperCase();
const estudianteMinus = estudiante.toLowerCase();

const numLetrasEstudiante = estudiante.replace(/ /g, "").length;

const primeraLetraNombre = nombre.charAt(0);
const ultimaLetraApellido = apellido.charAt(apellido.length - 1);

const estudianteSinEspacios = estudiante.replace(/ /g, "");

const nombreEstaEnEstudiante = estudiante.includes(nombre);

console.log("Nombre:", nombre);
console.log("Apellido:", apellido);
console.log("estudiante:", estudiante);
console.log("estudianteMayus:", estudianteMayus);
console.log("estudianteMinus:", estudianteMinus);
console.log("numLetrasEstudiante:", numLetrasEstudiante);
console.log("primeraLetraNombre:", primeraLetraNombre);
console.log("ultimaLetraApellido:", ultimaLetraApellido);
console.log("estudianteSinEspacios:", estudianteSinEspacios);
console.log("nombreEstaEnEstudiante:", nombreEstaEnEstudiante);
