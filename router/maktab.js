const express = require("express");
const Rout = express.Router();
const maktab = require("../controller/maktab");

Rout.route("/").get(maktab.getAll).post(maktab.add);

module.exports = Rout;
