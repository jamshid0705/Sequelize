const express = require("express");
const Rout = express.Router();
const customer = require("../controller/customer");

Rout.route("/").get(customer.getAll).post(customer.add);

module.exports = Rout;
