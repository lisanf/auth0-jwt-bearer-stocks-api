// ************ Require's ************
const express = require('express');
const router = express.Router();
const path = require("path");

const apiPublicController = require('../controllers/apiPublicController');

/**
 * @swagger
 * tags:
 *   name: Symbol Search
 *   description: Search for Ticker or Symbol by keyword
 */

/**
 * @swagger
 * /public/symbol-search:
 *   get:
 *     summary: Search for Ticker or Symbol by keyword
 *     tags: [Symbol Search]
 *     description: |
 *       Returns the search results for Ticker or Symbol based on a keyword search.
 *       Define the properties of search results here based on the response from the API.
 *       For example:
 *       - Symbol: Company symbol
 *       - Name: Company name
 *       - Exchange: Stock exchange
 *     parameters:
 *       - in: query
 *         name: keywords
 *         required: true
 *         description: Keyword for symbol search
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 Symbol:
 *                   type: string
 *                   description: Company symbol
 *                 Name:
 *                   type: string
 *                   description: Company name
 *                 Exchange:
 *                   type: string
 *                   description: Stock exchange
 *       '500':
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message
 *     security: []
 */
router.get('/symbol-search', apiPublicController.symbolSearch);

module.exports = router;
