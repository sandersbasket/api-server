const dataModel = require('../db/dataModel');

/**
 * Класс для работы с запросами.
*/

class DataController {

  /**
   * Получение всех данных из базы данных и отправляет ответ пользователю.
   * @param {Object} req - Объект запроса от клиента.
   * @param {Object} res - Объект ответа сервера для отправки данных клиенту.
  */

  getAllData(req, res) {
    dataModel.getAllData((err, rows) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' }); // если произошла ошибка в полученнии данных, отправляем статус 500 и сообщение о ошибке
      } 

      if (rows.length === 0) {
        return res.status(404).json({ error: 'No data found' }); // если база данных пустая
      }

      return res.status(200).json(rows); // успешное получение значений из базы данных
    });
  }

  /**
   * Вставляет новые значения в базу данных и отправляет ответ пользователю.
   * @param {Object} req - Объект запроса от клиента.
   * @param {Object} res - Объект ответа сервера для отправки данных клиенту.
  */

  insertData(req, res) {
    const content = req.body.content;

    if (!content) {
      return res.status(400).json({ error: 'Content is required' }); // если отсутствует тело запроса, то отправляет сообщение о ошибке и статус 400
    } 

    dataModel.insertData(content, err => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' }); // если произошла ошибка с базой данных, то отправляет сообщение о ошибке и статус 500
      } 

      return res.status(201).json({ message: 'Data inserted successfully'}); // успешная вставка новых значений в базу данных
    });
  }

  /**
   * Обновляет данные в базе данных и отправляет ответ пользователю.
   * @param {Object} req - Объект запроса от клиента.
   * @param {Object} res - Объект ответа сервера для отправки данных клиенту.
  */

  updateData(req, res) {
    const id = req.params.id;
    const content = req.body.content;

    if (!content) {
      return res.status(400).json({ error: 'Content is required' });  // если отсутствует тело запроса, то отправляет сообщение о ошибке и статус 400
    } 

    dataModel.updateData(id, content, err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' }); // если произошла ошибка с базой данных, то отправляет сообщение о ошибке и статус 500
      } 

      return res.status(200).json({ message: 'Data updated successfully' }); // успешное обновление данных в базе данных
    }); 
  }

  /**
   * Удаляет данные в базе данных и отправляет ответ пользователю.
   * @param {Object} req - Объект запроса от клиента.
   * @param {Object} res - Объект ответа сервера для отправки данных клиенту.
  */


  deleteData(req, res) {
    const id = req.params.id;

    dataModel.deleteData(id, err => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Internal Server Error' }); // если произошла ошибка с базой данных, то отправляет сообщение о ошибке и статус 500
      } 

      return res.status(200).json({ message: 'Data deleted successfully' }); // успешное удаление значения из базы данных
    });
  }
}

module.exports = new DataController();