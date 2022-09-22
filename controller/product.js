const Product = require("../model/product");
const Customer=require('../model/customer')

const getAll = async (req, res) => {
  try {
    const product = await Product.findAll();

    res.status(200).json({
      data: product,
    });
  } catch (error) {
    console.log(error.message);
  }
};

const add = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json({
      data: product,
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { getAll, add };
