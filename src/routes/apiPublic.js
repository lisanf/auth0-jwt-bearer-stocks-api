// ************ Require's ************
const express = require('express');
const router = express.Router();
const path = require("path");

const apiPublicController = require('../controllers/apiPublicController');

/**
 * @swagger
 * tags:
 *   name: Ejemplo
 *   description: Endpoints de ejemplo
 */

/**
 * @swagger
 * /public/hello-world:
 *   get:
 *     summary: Hello, world! Welcome to my API 🚀
 *     tags: [Ejemplo]
 *     description: Retorna un ejemplo.
 *     responses:
 *       '200':
 *         description: Respuesta exitosa.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de ejemplo.
 *     security: []
 */
router.get('/hello-world', apiPublicController.helloWorld);

module.exports = router;
