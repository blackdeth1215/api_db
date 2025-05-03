import { Router } from 'express';

const router = Router();

// Ruta principal
router.get('/', (req, res) => {
  res.send('Página de inicio');
});

// Ruta para usuarios
router.get('/usuarios', (req, res) => {
  res.send('Lista de usuarios');
});

// Ruta para productos
router.get('/productos', (req, res) => {
  res.send('Lista de productos');
});

export default router;
