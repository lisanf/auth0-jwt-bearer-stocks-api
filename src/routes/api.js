// ************ Require's ************
const express = require('express');
const router = express.Router();
const path = require("path");

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
router.get('/hello-world', apiController.helloWorld);


/**
 * @swagger
 * tags:
 *   name: Company Overview
 *   description: Endpoints for retrieving company information
 */

/**
 * @swagger
 * /company-overview/{symbol}:
 *   get:
 *     summary: Get company overview by symbol
 *     tags: [Company Overview]
 *     description: Retrieves the general information of a company based on its symbol.
 *     parameters:
 *       - in: path
 *         name: symbol
 *         required: true
 *         description: Company symbol
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 name:
 *                   type: string
 *                   description: Company name
 *                 symbol:
 *                   type: string
 *                   description: Company symbol
 *                 overview:
 *                   type: string
 *                   description: Company overview
 */
router.get('/company-overview/:symbol', apiController.companyOverview);



module.exports = router;



