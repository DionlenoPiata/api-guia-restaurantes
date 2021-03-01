"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  nome: {
    type: String,
    required: true,
  },
  telefone: {
    type: String,
  },
  descricao: {
    type: String,
  },
  localizacao: {
    type: {
      type: String,
    },
    coordinates: [Number],
  },
  cardapio: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Cardapio",
  },
});

schema.index({ localizacao: "2dsphere" });

module.exports = mongoose.model("Restaurante", schema);
