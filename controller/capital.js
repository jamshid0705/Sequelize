const Capital = require("../model/capital");
const  Country  = require("../model/country");

const getAll = async (req, res) => {
  try {
    const capital = await Capital.findAll({
      include:Country
    });

    res.status(200).json({
      data: capital,
    });
  } catch (error) {
    console.log(error.message);
  }
};

const add = async (req, res) => {
  try {
    const capital = await Capital.create({
      name: req.body.name,
      countryId: req.body.countryId,
    });
    res.status(200).json({
      data: capital,
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { getAll, add };
