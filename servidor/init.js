const chalk = require("chalk");
const express = require("express");
const { errorServidor } = require("./errores");

const app = express();
const puerto = process.env.PORT || 4001;

const server = app.listen(puerto, (err) => {
  if (err) {
    console.log(chalk.red("No se ha podido levantar el servidor"));
    return;
  }
  console.log(chalk.yellow(`\nServidor escuchando en el puerto ${puerto}`));
});

server.on("error", (err) => errorServidor(err, puerto));

module.exports = app;
