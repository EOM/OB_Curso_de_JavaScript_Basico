const winston = require('winston'); // npm install winston

// Configuración del logger de Winston
const logger = winston.createLogger({
    level: 'error',
    format: winston.format.simple(),
    transports: [
        new winston.transports.File({ filename: 'logs.txt' })
    ]
});

// Función que devuelve un error personalizado y lo registra en el archivo de logs
function throwCustomError() {
    try {
        throw new Error('Este es un error personalizado');
    } catch (error) {
        logger.error(error.message);
    }
}

// Llamada a la función para generar y registrar el error
throwCustomError();
