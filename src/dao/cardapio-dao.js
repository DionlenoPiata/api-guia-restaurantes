"use strict";

const mongoose = require("mongoose");
const config = require("../config");
const Document = mongoose.model("Cardapio");

exports.get = async (page, filter, populate) => {
  var res;

  const limit = Math.max(1, config.limit);
  const pagination = {
    skip: (Math.max(1, page) - 1) * limit,
    limit: limit,
  };

  if (populate) {
    res = await Document.find({}, filter, pagination).populate(populate);
    return res;
  }
  res = await Document.find({}, filter, pagination);
  return res;
};

exports.findBy = async (page, by, findOne, filter, populate) => {
  var res;

  const limit = Math.max(1, config.limit);
  const pagination = {
    skip: (Math.max(1, page) - 1) * limit,
    limit: limit,
  };

  if (findOne) {
    if (populate) {
      res = await Document.findOne(by, filter, pagination).populate(populate);
    } else {
      res = await Document.findOne(by, filter, pagination);
    }
    return res;
  }
  if (populate) {
    res = await Document.find(by, filter, pagination).populate(populate);
    return res;
  }

  res = await Document.find(by, filter, pagination);
  return res;
};

exports.create = async (data) => {
  var document = new Document(data);
  const res = await document.save();
  return res;
};

exports.update = async (id, data) => {
  await Document.findByIdAndUpdate(id, {
    $set: data,
  });
};

exports.delete = async (id) => {
  await Document.findByIdAndDelete(id);
};
