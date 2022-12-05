const fsPromises = require('fs').promises;
const path = require('path');


const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'archivos', 'comienzo.txt'),'utf8');
        console.log(data);        
    } catch (err) {
        console.error(err);
    }
}

fileOps();



/*
fs.writeFile(path.join(__dirname, 'archivos', 'copia.txt'), 'Un placer don pepe', (err) => {
    if (err) throw err;
    console.log('Write finalizado!');

    fs.appendFile(path.join(__dirname, 'archivos', 'copia.txt'), 'Un placer don Marcelo', (err) => {
        if (err) throw err;
        console.log(' Append finalizado!');

        fs.rename(path.join(__dirname, 'archivos', 'copia.txt'), path.join(__dirname, 'archivos', 'nuevaCopia.txt'), (err) => {
            if (err) throw err;
            console.log('Rename finalizado!');
        })
    })
})
*/



// salir de errores no detectados
process.on('uncaughtException', err => {
    console.error(`Hubo un error no detectado: ${err}`);
    process.exit(1);
})

