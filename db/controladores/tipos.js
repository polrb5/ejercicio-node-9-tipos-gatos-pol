const Tipo = require("../modelos/Tipo");

const listarTipos = async () => {
  const tipos = await Tipo.find();
  return tipos;
};

const mostrarTipo = async (idTipo) => {
  const tipo = await Tipo.findById(idTipo);
  return tipo;
};

const modificarTipo = async (idTipo, tipoModificado) => {
  const tipoAModificar = await Tipo.findByIdAndUpdate(idTipo, {
    tipo: tipoModificado,
  });
  return tipoAModificar;
};

const crearTipoNuevo = async (nuevoTipo) => {
  const tipo = Tipo.create({ tipo: nuevoTipo });
  return tipo;
};

const borrarTipo = async (idTipo) => {
  const tipoBorrado = await Tipo.findByIdAndDelete(idTipo);
  return tipoBorrado;
};

module.exports = {
  listarTipos,
  mostrarTipo,
  crearTipoNuevo,
  borrarTipo,
  modificarTipo,
};
