const express = require("express");
const Rout = express.Router();
const tuman = require("../controller/tuman");

Rout.route("/set").get(tuman.set);
Rout.route("/delete").delete(tuman.deleteTuman)
Rout.route("/count").get(tuman.count)
Rout.route('/hasadd').get(tuman.hasManyAdd)
Rout.route("/").get(tuman.getAll).post(tuman.add);

module.exports = Rout;
