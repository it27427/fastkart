const dotenv = require('dotenv');
dotenv.config();

const dev = {
  app: {
    port: process.env.PORT || 8000,
  },
  db: {
    url: process.env.DB_URL || 'mongodb://localhost:27017/fastkart',
  },
};

module.exports = dev;
