const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'archivos', 'comienzo.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data.toString());
})

console.log('tanto para esto....')

fs.writeFile(path.join(__dirname, 'archivos', 'comienzo.txt'), 'Un placer don pepe', (err) => {
    if (err) throw err;
    console.log('Secuencia finalizada!');
})

// salir de errores no detectados
process.on('uncaughtException', err => {
    console.error(`Hubo un error no detectado: ${err}`);
    process.exit(1);
})

