// Importa los módulos
import { suma, multiplica } from './controller.js';
import chalk from 'chalk';

// Calcula el resultado utilizando las funciones del módulo controller.js
const resultado = multiplica(suma(1, 2), suma(4, 5));

// Imprime el resultado en color verde utilizando chalk
console.log(chalk.green(`El resultado es: ${resultado}`));