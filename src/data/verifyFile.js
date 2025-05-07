// src/data/verifyfile.js
import { access, writeFile } from 'node:fs/promises';
import { constants } from 'node:fs';
import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

// Obtener __dirname en ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Ruta relativa al archivo
const filePath = `${__dirname}/database.json`;

export async function verifyAndCreateFile() {
    try {
        // Verifica si el archivo existe
        await access(filePath, constants.F_OK);
        console.log('✅ El archivo de bd ya existe.');
    } catch (error) {
        // Si no existe, lo crea con contenido inicial
        const initialData = JSON.stringify({ mensaje: "Archivo creado automáticamente." }, null, 2);
        await writeFile(filePath, initialData);
        console.log('📁 El archivo bd no existía. Se ha creado correctamente.');
    }
}
