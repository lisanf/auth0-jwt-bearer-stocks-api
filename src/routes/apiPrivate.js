// ************ Require's ************
const express = require('express');
const router = express.Router();
const path = require("path");

const apiPrivateController = require('../controllers/apiPrivateController');

/**
 * @swagger
 * tags:
 *   name: Symbol Search
 *   description: Search for Ticker or Symbol by keyword
 */

/**
 * @swagger
 * tags:
 *   name: Company Profile
 *   description: Endpoints for retrieving company profile information
 */

/**
 * @swagger
 * tags:
 *   name: Company Overview
 *   description: Endpoints for retrieving company information
 */

/**
 * @swagger
 * /private/company-overview/{symbol}:
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
router.get('/company-overview/:symbol', apiPrivateController.companyOverview);

/**
 * @swagger
 * /private/company-profile/{symbol}:
 *   get:
 *     summary: Get company profile by symbol
 *     tags: [Company Profile]
 *     description: Retrieves the profile information of a company based on its symbol.
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
 *                 Symbol:
 *                   type: string
 *                   description: Company symbol
 *                 AssetType:
 *                   type: string
 *                   description: Type of asset
 *                 Name:
 *                   type: string
 *                   description: Company name
 *                 CIK:
 *                   type: string
 *                   description: CIK identifier
 *                 Exchange:
 *                   type: string
 *                   description: Stock exchange
 *                 Currency:
 *                   type: string
 *                   description: Currency
 *                 Country:
 *                   type: string
 *                   description: Country
 *                 Sector:
 *                   type: string
 *                   description: Sector
 *                 Industry:
 *                   type: string
 *                   description: Industry
 *                 Address:
 *                   type: string
 *                   description: Company address
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message
 */
router.get('/company-profile/:symbol', apiPrivateController.companyProfile);

/**
 * @swagger
 * /private/company-profile/{symbol}/metrics:
 *   get:
 *     summary: Get company profile metrics by symbol
 *     tags: [Company Profile]
 *     description: Retrieves the financial metrics of a company based on its symbol.
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
 *                 MarketCapitalization:
 *                   type: string
 *                   description: Market capitalization of the company
 *                 EBITDA:
 *                   type: string
 *                   description: EBITDA (Earnings Before Interest, Taxes, Depreciation, and Amortization) of the company
 *                 PERatio:
 *                   type: string
 *                   description: Price-to-Earnings (P/E) ratio of the company
 *                 PEGRatio:
 *                   type: string
 *                   description: Price/Earnings to Growth (PEG) ratio of the company
 *                 BookValue:
 *                   type: string
 *                   description: Book value per share of the company
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message
 */
router.get('/company-profile/:symbol/metrics', apiPrivateController.companyProfileMetrics);

/**
 * @swagger
 * /private/company-profile/{symbol}/dividends:
 *   get:
 *     summary: Get company dividends by symbol
 *     tags: [Company Profile]
 *     description: Retrieves the dividend information of a company based on its symbol.
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
 *                 DividendPerShare:
 *                   type: string
 *                   description: Dividend per share of the company
 *                 DividendYield:
 *                   type: string
 *                   description: Dividend yield of the company
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message
 */
router.get('/company-profile/:symbol/dividends', apiPrivateController.companyProfileDividends);



module.exports = router;



