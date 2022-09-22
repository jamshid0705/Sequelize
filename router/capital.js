const express = require("express");
const Rout = express.Router();
const capital = require("../controller/capital");

Rout.route("/").get(capital.getAll).post(capital.add);

module.exports = Rout;
