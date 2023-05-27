// Calcula el factorial de un número utilizando un bucle while y break
function calcularFactorial(numero) {
    let factorial = 1;
    let i = 1;

    while (true) {
        factorial *= i;
        if (i === numero) {
            break;
        }
        i++;
    }
    return factorial;
}

// Calcula el factorial de 10
const numero = 10;
const factorial = calcularFactorial(numero);

console.log(`El factorial de ${numero} es: ${factorial}`);