const express = require('express');
const User = require('../models/User');
const { verifyToken } = require('../middleware/auth');
const router = express.Router();

// Get current user info
router.get('/current', verifyToken, async (req, res) => {
  try {
    const user = await User.findById(req.userId).select('-password');
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update user info
router.patch('/info', verifyToken, async (req, res) => {
  try {
    const { username, email } = req.body;
    const user = await User.findByIdAndUpdate(req.userId, { username, email }, { new: true });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update user avatar
router.patch('/avatar', verifyToken, async (req, res) => {
  try {
    const { avatar } = req.body;
    const user = await User.findByIdAndUpdate(req.userId, { avatar }, { new: true });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Remove user avatar
router.delete('/avatar', verifyToken, async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.userId, { avatar: null }, { new: true });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
