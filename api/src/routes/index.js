const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countryRoutes = require('./Countries');
// const todosRoutes = require('./Todos');
const home = require('./Home')
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/', home)
router.use('/countries', countryRoutes);
router.use('/activity', countryRoutes);

module.exports = router;
