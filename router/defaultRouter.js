const express = require('express');
const router = express.Router();

// Controllers
const { defaultController } = require("../controllers/defaultController");

// Routes
router.get("/", defaultController);

module.exports = router;