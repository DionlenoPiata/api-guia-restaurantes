"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
  titulo: {
    type: String,
  },
  itens: [
    {
      nome: {
        type: String,
        required: true,
      },
      descricao: {
        type: String,
      },
      valor: {
        type: Number,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model("Cardapio", schema);
