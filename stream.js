const fs = require('fs');

const rs = fs.createReadStream('./archivos/lorem.txt', {encoding: 'utf8'});

const ws = fs.createWriteStream('./archivos/nuevo-lorem.txt');

rs.on('data', (dataChunk) => {
    ws.write(dataChunk);
})

