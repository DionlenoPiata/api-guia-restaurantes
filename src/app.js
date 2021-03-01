"use strict";

const express = require("express");
const mongoose = require("mongoose");
const config = require("./config");

const app = express();

// conectar ao banco de dados
mongoose.connect(config.conectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

// carrega models
const User = require("./models/user");
const Restaurante = require("./models/restaurante");
const Cardapio = require("./models/cardapio");

// routers
const indexRoute = require("./routes/index-route");
const userRoute = require("./routes/user-route");
const RestauranteRoute = require("./routes/restaurante-route");
const CardapioRoute = require("./routes/cardapio-route");

// middleware de conversao de dados
app.use(express.json());

// habilita o CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, authorization"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

// rotas da aplicacao
app.use("/", indexRoute);
app.use("/user" + "s", userRoute);
app.use("/restaurante" + "s", RestauranteRoute);
app.use("/cardapio" + "s", CardapioRoute);

module.exports = app;
