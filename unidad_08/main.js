// Una función sin parámetros que devuelva siempre "true"
function siempreTrue() {
    return true;
}
// Una función asíncrona que utilice un setTimeout y pase por consola
// un "Hola soy una promesa" 5 segundos después de haberse ejecutado.
async function imprimirMensaje() {
    await new Promise(resolve => setTimeout(resolve, 5000));
    console.log("Hola soy una promesa");
}
// Una función generadora de índices pares automáticos
function* indicesParesAutomaticos() {
    let indice = 0;
    while (true) {
        yield indice;
        indice += 2;
    }
}

// Salida
console.log(siempreTrue()); // Llamada a la función siempreTrue()
// Llamada a la función imprimirMensaje()
imprimirMensaje();

const generador = indicesParesAutomaticos(); // Crear una instancia del generador
console.log(generador.next().value); // Imprimir el primer índice par (0)
console.log(generador.next().value); // Imprimir el segundo índice par (2)
console.log(generador.next().value); // Imprimir el tercer índice par (4)
// Continuar llamando a generador.next().value para obtener más índices pares
