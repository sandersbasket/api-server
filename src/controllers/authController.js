const config = require('../config.json');

/**
 * Класс для работы с авторизацией.
*/

class AuthController {
  /**
   * Проверяет аутентификацию пользователя с помощью API-ключа.
   * Если ключ совпадает с нужным значением, передает действие следующей функции (param 3).
   * Если нет отправляет пользователю код ошибки 401 (Unauthorized).
   * @param {Object} req - Объект запроса от клиента.
   * @param {Object} res - Объект ответа сервера для отправки данных клиенту.
   * @param {Function} next - Функция для передачи действия.
  */

  authenticate(req, res, next) {
    const apiKey = req.headers['api-key']; // получение API-KEY

    if (apiKey != config.api_key) { // Проверка на значение из [../config.json]
      return res.status(401).json({ error: 'Unauthorized' }); // Вывод ошибки и статуса 401
    } 

    return next(); // запуск следующей функции в случае, если значения совпали
  }
}
  
module.exports = new AuthController();