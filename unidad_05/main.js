const alturaCentimetros = 175;
const alturaMetros = alturaCentimetros / 100;
const pesoKilogramos = 70.5;

const alturaMetrosRedondeada = Math.ceil(alturaMetros);
const pesoKilogramosRedondeado = Math.floor(pesoKilogramos);

const maximoValorMasUno = Number.MAX_VALUE + 1;
const esIgual = maximoValorMasUno === Number.MAX_VALUE;

console.log("Altura en centímetros:", alturaCentimetros);
console.log("Altura en metros:", alturaMetros);
console.log("Peso en kilogramos:", pesoKilogramos);
console.log("Altura en metros redondeada hacia arriba:", alturaMetrosRedondeada);
console.log("Peso en kilogramos redondeado hacia abajo:", pesoKilogramosRedondeado);
console.log("¿El máximo valor + 1 es igual al máximo valor en JavaScript?", esIgual);
