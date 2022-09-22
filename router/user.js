const express = require("express");
const Rout = express.Router();
const userController = require("../controller/user");

Rout.route("/tiklash").get(userController.tiklash);
Rout.route('/query').get(userController.alluserquery)
Rout.route("/solish").get(userController.solish);
Rout.route("/orand").get(userController.orand);
Rout.route("/order").get(userController.order);
Rout.route("/shart").get(userController.shart);
Rout.route('/exclude').get(userController.exclude)
Rout.route("/aggri").get(userController.aggri);
Rout.route("/findallattname").get(userController.findAllAttname);
Rout.route("/findallatt").get(userController.findAllAtt);
Rout.route('/findall').get(userController.findAll)
Rout.route('/findorcreated').post(userController.findorcreate)
Rout.route('/sum').get(userController.sum)
Rout.route('/group').get(userController.groupby)
Rout.route("/age").get(userController.getSumAge);
Rout.route("/").post(userController.buildUser).get(userController.getAll);
Rout.route("/:id")
  .patch(userController.updateuser)
  .delete(userController.deleteUser)
  .get(userController.getOne);

module.exports = Rout;
