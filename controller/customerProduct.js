const Customer = require("../model/customer");
const Product = require("../model/product");
const ProductCustomer=require('../model/customer')

// const getAll = async (req, res) => {
//   try {
//     const customer = await Customer.findAll({ include: Product });

//     res.status(200).json({
//       data: customer,
//     });
//   } catch (error) {
//     console.log(error.message);
//   }
// };

const add = async (req, res) => {
  try {
    const customer = await ProductCustomer.create(req.body);
    res.status(200).json({
      data: customer,
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { add };
