const express = require('express');
const router = express.Router();
const sprocketsController = require('../controllers/sprockets.controller');

/**
 * @swagger
 * tags:
 *   name: Sprockets
 *   description: Sprocket management
 */

/**
 * @swagger
 * /sprockets:
 *   get:
 *     summary: Get all sprockets
 *     tags: [Sprockets]
 *     responses:
 *       200:
 *         description: The list of the sprockets
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Sprocket'
 *       500:
 *         description: Server error
 */
router.get('/', sprocketsController.getAllSprockets);

/**
 * @swagger
 * /sprockets/{id}:
 *   get:
 *     summary: Get sprocket by ID
 *     tags: [Sprockets]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The sprocket ID
 *     responses:
 *       200:
 *         description: The sprocket description by ID
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Sprocket'
 *       404:
 *         description: Sprocket not found
 *       500:
 *         description: Server error
 */
router.get('/:id', sprocketsController.getSprocketById);

/**
 * @swagger
 * /sprockets:
 *   post:
 *     summary: Create a new sprocket
 *     tags: [Sprockets]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Sprocket'
 *     responses:
 *       201:
 *         description: The created sprocket
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Sprocket'
 *       500:
 *         description: Server error
 */
router.post('/', sprocketsController.createSprocket);

/**
 * @swagger
 * /sprockets/{id}:
 *   put:
 *     summary: Update a sprocket by ID
 *     tags: [Sprockets]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: The sprocket ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Sprocket'
 *     responses:
 *       200:
 *         description: The updated sprocket
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Sprocket'
 *       404:
 *         description: Sprocket not found
 *       500:
 *         description: Server error
 */
router.put('/:id', sprocketsController.updateSprocket);

module.exports = router;
