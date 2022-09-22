const Customer = require("../model/customer");
const Product=require('../model/product')

const getAll = async (req, res) => {
  try {
    const customer = await Customer.findAll({include:Product}); //[{model:Product},{model:country}] ikkta tablega ulangan bolsa

    res.status(200).json({
      data: customer,
    });
  } catch (error) {
    console.log(error.message);
  }
};

const add = async (req, res) => {
  try {
    const customer = await Customer.create(req.body);
    res.status(200).json({
      data: customer,
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { getAll, add };
