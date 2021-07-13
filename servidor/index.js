const morgan = require("morgan");
const express = require("express");
const app = require("./init");
const { errorGeneral, error404 } = require("./errores");
const rutasTipos = require("./rutas/tipos");

app.use(morgan("dev"));
app.use(express.json());

app.use("/tipos", rutasTipos);

app.use(error404);
app.use(errorGeneral);
