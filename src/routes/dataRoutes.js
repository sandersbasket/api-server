const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataController');
const authController = require('../controllers/authController');

// Применяем аутентификацию ко всем методам
router.use(authController.authenticate);

router.get('/data', dataController.getAllData); // Определение маршрута для получения всех данных.
router.post('/data', dataController.insertData); // Определение маршрута для вставки новых значений в базу данных.
router.put('/data/:id', dataController.updateData); // Определение маршрута для обновления значений в базе данных.
router.delete('/data/:id', dataController.deleteData); // Определение маршрута для удаления значений из базы данных.

module.exports = router;