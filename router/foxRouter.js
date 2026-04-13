const express = require('express');
const router = express.Router();

// Controllers
const foxController = require("../controllers/foxController");

// Routes
router.get("/fox", foxController.getRandomFox);
router.get("/fox/new", foxController.getNewRandomFox);
router.post("/fox/vote", foxController.registerVote);
router.get("/fox/stats", foxController.getStats);

module.exports = router;