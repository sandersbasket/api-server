const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.resolve(__dirname, 'database.db'); // получение пути DB.
const db = new sqlite3.Database(dbPath); // созданиее объекта DB, для дальнейшей работы 

module.exports = db; 