const express = require("express");
const Rout = express.Router();
const product = require("../controller/product");

Rout.route("/").get(product.getAll).post(product.add);

module.exports = Rout;
