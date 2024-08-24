const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /expenses:
 *   get:
 *     summary: Retrieve a list of expenses
 *     responses:
 *       200:
 *         description: A list of expenses
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get('/', (req, res) => {
  // Your logic to get expenses
  res.json([]);
});

module.exports = router;
