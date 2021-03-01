"use strict";

const express = require("express");
const router = express.Router();

const controller = require("../controllers/cardapio-controller");
const authService = require("../services/auth-service");

router.get("/", controller.get);
router.post("/search/", controller.get);
router.post("/search/:by", controller.postBy);
router.post("/", authService.isAdmin, controller.post);
router.put("/:id", authService.isAdmin, controller.put);
router.delete("/:id", authService.isAdmin, controller.delete);

module.exports = router;
