const { Schema, model } = require("mongoose");

const TipoSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
});

const Tipo = model("Tipo", TipoSchema, "tipos");

module.exports = {
  Tipo,
};
