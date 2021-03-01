"use strict";

const express = require("express");
const router = express.Router();

const controller = require("../controllers/restaurante-controller");
const authService = require("../services/auth-service");

router.get("/", authService.isAdmin, controller.get);
router.post("/search/", authService.authorize, controller.get);
router.post("/search/:by", authService.authorize, controller.postBy);
router.post("/", authService.isAdmin, controller.post);
router.put("/:id", authService.isAdmin, controller.put);
router.delete("/:id", authService.isAdmin, controller.delete);

module.exports = router;
