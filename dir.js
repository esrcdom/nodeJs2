const fs = require('fs');

// crear directorio
if (!fs.existsSync('./nuevo')) {
    fs.mkdir('./nuevo', (err) => {
    if (err) throw err;
    console.log('Directorio creado')
    })
}

// remover directorio
if (fs.existsSync('./nuevo')) {
    fs.rmdir('./nuevo', (err) => {
    if (err) throw err;
    console.log('Directorio removido')
    })
}