// Calcula el factorial de un número utilizando un bucle for
function calcularFactorial(numero) {
    let factorial = 1;
    for (let i = 1; i <= numero; i++) {
        factorial *= i;
    }
    return factorial;
}

// Calcula el factorial de 10
const numero = 10;
const factorial = calcularFactorial(numero);

console.log(`El factorial de ${numero} es: ${factorial}`);