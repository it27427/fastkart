const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/db');

connectDB();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser);
app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('<h1>Hello from Express</h1>');
});

module.exports = app;
