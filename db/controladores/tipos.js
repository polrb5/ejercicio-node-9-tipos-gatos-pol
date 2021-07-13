const Tipo = require("../modelos/Tipo");

const listarTipos = async () => {
  const tipos = await Tipo.find();
  return tipos;
};

const mostrarTipo = async (idTipo) => {
  const tipo = await Tipo.findById(idTipo);
  return tipo;
};

module.exports = { listarTipos, mostrarTipo };
