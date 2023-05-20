// ************ Require's ************
const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

/**
 * @swagger
 * tags:
 *   name: Ejemplo
 *   description: Endpoints de ejemplo
 */

/**
 * @swagger
 * /hello-world:
 *   get:
 *     summary: Hello, world! Welcome to my API 🚀
 *     tags: [Ejemplo]
 *     description: Retorna un ejemplo.
 *     responses:
 *       200:
 *         description: Respuesta exitosa.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de ejemplo.
 */
router.get('/hello-world', apiController);

router.get('/', apiController);

module.exports = router;



