const fsPromises = require('fs').promises;
const path = require('path');


const fileOps = async () => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'archivos', 'comienzo.txt'),'utf8');
        console.log(data);
        await fsPromises.unlink(path.join(__dirname, 'archivos', 'comienzo.txt'));
        await fsPromises.writeFile(path.join(__dirname, 'archivos', 'promiseWrite.txt'), data);
        await fsPromises.appendFile(path.join(__dirname, 'archivos', 'promiseWrite.txt'), ' Hola mucho gusto');
        await fsPromises.rename(path.join(__dirname, 'archivos', 'promiseWrite.txt'), path.join(__dirname, 'archivos', 'promiseComplete.txt'));    
        
        const newData = await fsPromises.readFile(path.join(__dirname, 'archivos', 'promiseComplete.txt'),'utf8');
        console.log(newData);
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

