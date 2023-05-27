// Calcula el factorial de un número utilizando un bucle while
function calcularFactorial(numero) {
    let factorial = 1;
    let i = 1;
    while (i <= numero) {
        factorial *= i;
        i++;
    }
    return factorial;
}

// Calcula el factorial de 10
const numero = 10;
const factorial = calcularFactorial(numero);

console.log(`El factorial de ${numero} es: ${factorial}`);