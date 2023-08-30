const express = require('express');
const morgan = require('morgan');
const app = express();
const bodyParser = require('body-parser');
const dataRoutes = require('./routes/dataRoutes');
const authRoutes = require('./routes/authRoutes');
const config = require('./config.json');

app.use(bodyParser.json());

// Подключение логирования
app.use(morgan('combined'));

// Маршруты для данных и аутентификации
app.use('/', dataRoutes);
app.use('/auth', authRoutes);

// Обработчик ошибок сервера
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
});

const port = process.env.PORT || config.port;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});