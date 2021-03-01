"use strict";

const { Parser } = require("json2csv");
const dao = require("../dao/restaurante-dao");

exports.get = async (req, res, next) => {
  try {
    const { page = 1 } = req.query;
    const filter = req.body.filter;
    const populate = req.body.populate;

    let data = await dao.get(page, filter, populate);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({
      message: "Falha ao processar a requisição!",
      error: e.message,
    });
  }
};

exports.postBy = async (req, res, next) => {
  try {
    const { page = 1 } = req.query;
    const by = {
      [req.body.by]: req.params.by,
    };
    const findOne = req.body.findOne;
    const filter = req.body.filter;
    const populate = req.body.populate;

    let data = await dao.findBy(page, by, findOne, filter, populate);
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({
      message: "Falha ao processar a requisição!",
      error: e.message,
    });
  }
};

exports.post = async (req, res, next) => {
  try {
    let data = await dao.create(req.body);
    res.status(201).send({
      id: data._id,
      message: "Cadastro realizado com sucesso!",
    });
  } catch (e) {
    res.status(500).send({
      message: "Falha ao processar a requisição!",
      error: e.message,
    });
  }
};

exports.put = async (req, res, next) => {
  try {
    await dao.update(req.params.id, req.body);
    res.status(200).send({
      message: "Atualizado com sucesso!",
    });
  } catch (e) {
    res.status(500).send({
      message: "Falha ao processar a requisição!",
      error: e.message,
    });
  }
};

exports.delete = async (req, res, next) => {
  try {
    await dao.delete(req.params.id);
    res.status(200).send({
      message: "Removido com sucesso!",
    });
  } catch (e) {
    res.status(500).send({
      message: "Falha ao processar a requisição!",
      error: e.message,
    });
  }
};
exports.getCsv = async (req, res, next) => {
  try {
    let restaurantes = await dao.get();

    const fields = ["_id", "nome", "telefone", "descricao", "localizacao"];

    const json2csv = new Parser({ fields });
    const csv = json2csv.parse(restaurantes);
    res.header("Content-Type", "text/csv");
    res.attachment("restaurantes.csv");
    return res.status(200).send(csv);
  } catch (e) {
    console.log("error:", e);
    res.status(500).send({
      message: "Falha ao processar a requisição!",
      error: e.message,
    });
  }
};
