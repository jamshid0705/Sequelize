const Maktab = require("../model/maktab");
const Tuman= require("../model/tuman")

const getAll = async (req, res) => {
  try {
    const maktab = await Maktab.findAll({include:Tuman});

    res.status(200).json({
      data: maktab,
    });
  } catch (error) {
    console.log(error.message);
  }
};

const add = async (req, res) => {
  try {
    const maktab = await Maktab.create({
      name:req.body.name,
      tumanId:req.body.tumanId
    });
    res.status(200).json({
      data: maktab,
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { getAll, add };
