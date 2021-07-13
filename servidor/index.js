const morgan = require("morgan");
const express = require("express");
const app = require("./init");
const { errorGeneral, error404 } = require("./errores");
const rutasTipos = require("./rutas/tipos");

const Tipo = require("../db/modelos/Tipo");

app.use(morgan("dev"));
app.use(express.json());

const middleware1 = (req, res, next) => {
  console.log("Paso 1");
  next();
};
const listarTipos = async () => {
  const tipos = await Tipo.find();
  console.log(tipos);
  return tipos;
};
listarTipos();

/* const mostrarTipo = async (idTipo) => {
  const tipo = await Tipo.findById(idTipo);
  console.log(tipo);
  return tipo;
}; */
mostrarTipo(60ed9da94f7dc16e4ea0eb8c)

app.use(middleware1);

app.use("/tipos", rutasTipos);

app.use(error404);
app.use(errorGeneral);
