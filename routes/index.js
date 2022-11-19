const express = require("express");
const StorageController = require("../controllers/storage.controller");

const router = express.Router();
const controller = new StorageController();

router.post("/", controller.post);

module.exports = router;
