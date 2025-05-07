import { Router } from 'express';

const router = Router();


router.get('/', (req, res) => {
  res.send('Página de inicio');
});


router.post('/registro', (req, res) => {
  req.session.user = { name: 'Usuario' };
  req.
  res.send('Página de login');
});


router.get('/productos', (req, res) => {
  res.send('Lista de productos');
});

export default router;
