const db = require('./db');

/**
  * Класс для работы с базой данных.
*/

class DataModel {
  /**
   * Получает все данные из базы данных.
   * @param {Function} callback - Callback-функция, вызываемая после выполнения запроса.
  */

  getAllData(callback) {
    db.all('SELECT * FROM data', [], callback); // SQL запрос к базе данных (получение всех значений)
  }

  /**
   * Вставляет новые данные в базу данных.
   * @param {string} data - Данные для вставки.
   * @param {Function} callback - Callback-функция, вызываемая после выполнения запроса.
  */

  insertData(data, callback) {
    db.run('INSERT INTO data (content) VALUES (?)', [data], callback); // SQL запрос к базе данных (вставка новых значений)
  }

  /**
   * Обновляет данные в базе данных по ID.
   * @param {number} id - ID данных, которые нужно обновить.
   * @param {string} data - Новые данные.
   * @param {Function} callback - Callback-функция, вызываемая после выполнения запроса.
  */

  updateData(id, data, callback) {
    db.run('UPDATE data SET content = ? WHERE id = ?', [data, id], callback); // SQL запрос к базе данных (обновление значений)
  }

  /**
   * Удаляет данные из базы данных по ID.
   * @param {number} id - ID данных, для удаления.
   * @param {Function} callback - Callback-функция, вызываемая после выполнения запроса.
  */

  deleteData(id, callback) {
    db.run('DELETE FROM data WHERE id = ?', [id], callback); // SQL запрос к базе данных (удаление значения)
  }
}

module.exports = new DataModel();