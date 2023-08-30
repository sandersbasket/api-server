const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/authenticate', authController.authenticate); // Определение маршрута для запроса на /authenticate.

module.exports = router;