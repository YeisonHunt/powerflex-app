const express = require('express');
const router = express.Router();
const factoriesController = require('../controllers/factories.controller');

/**
 * @swagger
 * tags:
 *   name: Factories
 *   description: Factory management
 */

/**
 * @swagger
 * /factories:
 *   get:
 *     summary: Get all factories
 *     tags: [Factories]
 *     responses:
 *       200:
 *         description: The list of the factories
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Factory'
 *       500:
 *         description: Server error
 */
router.get('/', factoriesController.getAllFactories);

/**
 * @swagger
 * /factories/{id}:
 *   get:
 *     summary: Get factory by ID
 *     tags: [Factories]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The factory ID
 *     responses:
 *       200:
 *         description: The factory description by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Factory'
 *       404:
 *         description: Factory not found
 *       500:
 *         description: Server error
 */
router.get('/:id', factoriesController.getFactoryById);

module.exports = router;
