require("dotenv").config();
const chalk = require("chalk");
const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  },
  (err) => {
    if (err) {
      console.log(chalk.red("No se ha podido conectar a la base de datos"));
      console.log(chalk.red(err.message));
      return;
    }
    console.log(chalk.yellow("Conectado a la base de datos"));
  }
);
