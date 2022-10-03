const mongoose = require('mongoose');
const console = require('../service/console');

const DB = process.env.DATABASE_COMPASS.replace('<password>', process.env.DATABASE_PASSWORD);

mongoose.connect(DB).then(() => {
  console.log('資料庫連線成功1');
}).catch((error) => {
  console.log(error);
});
