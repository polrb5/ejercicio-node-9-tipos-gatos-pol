const { Schema, model } = require("mongoose");

// Creamos el schema de un alumno
const TipoSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
});

// Creamos el modelo alumno
const Tipo = model("Tipo", TipoSchema, "tipos");

module.exports = {
  Tipo,
};
