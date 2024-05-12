const app = require('./app');
const colors = require('colors');

app.listen(PORT, () => {
  console.log(
    `Server is listening at http://localhost:${PORT} in ${process.env.NODE_ENV} mode`
      .bgGreen
  );
});
