import express from 'express';
import router from './src/routes/routes.js';
import { verifyAndCreateFile } from './src/data/verifyfile.js';

const app = express();
const PORT = 3205;

await verifyAndCreateFile();

app.use('/', router);

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
