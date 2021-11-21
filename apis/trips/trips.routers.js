const express = require("express");
const { tripListFetch } = require("./trips.controllers");

const router = express.Router();

router.get("/", tripListFetch);

module.exports = router;
