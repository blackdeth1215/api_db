const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'data.json');

function verifyAndCreateFile() {
    if (!fs.existsSync(filePath)) {
        console.log('Archivo no encontrado, creándolo...');
        fs.writeFileSync(filePath, JSON.stringify(null, null, 2), 'utf8');
        console.log('Archivo creado exitosamente en:', filePath);
    } else {
        console.log('El archivo data.json ya existe.');
    }
}
verifyAndCreateFile();

module.exports = verifyAndCreateFile;
