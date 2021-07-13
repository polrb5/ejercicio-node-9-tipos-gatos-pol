const chalk = require("chalk");
const express = require("express");

const app = express();
const puerto = process.env.PUERTO || 4001;

app.listen(puerto, (err) => {
  if (err) {
    console.log(chalk.red("No se ha podido levantar el servidor"));
    return;
  }
  console.log(chalk.yellow(`\nServidor escuchando en el puerto ${puerto}`));
});

module.exports = app;
