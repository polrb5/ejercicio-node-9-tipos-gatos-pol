const morgan = require("morgan");
const express = require("express");
const app = require("./init");
const { errorGeneral, error404 } = require("./errores");
const Tipo = require("../db/modelos/Tipo");

app.use(morgan("dev"));
app.use(express.json());

app.get("/tipos", async (req, res, next) => {
  const tipos = await Tipo.find();
  console.log(tipos);
  res.json(tipos);
});

app.use(error404);
app.use(errorGeneral);
