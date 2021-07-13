const express = require("express");
const Tipo = require("../../db/modelos/Tipo");

const router = express.Router();

router.get("/", async (req, res, next) => {
  const tipos = await Tipo.find();
  if (!tipos) {
    const nuevoError = new Error("No se han podido listar los tipos de gatos");
    nuevoError.codigo = 400;
    return next(nuevoError);
  }
  console.log(tipos);
  res.json(tipos);
});

router.get("/:idTipo", async (req, res, next) => {
  const { idTipo } = req.params;
  const tipo = await Tipo.findById(idTipo);
  if (!tipo) {
    const nuevoError = new Error(
      `No existe este tipo de gato con la id: ${idTipo}`
    );
    nuevoError.codigo = 400;
    return next(nuevoError);
  }
  console.log(tipo);
  res.json(tipo);
});

module.exports = router;