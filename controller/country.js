const Capital = require("../model/capital");
const Country = require("../model/country");

const getAll = async (req, res) => {
  try {
    const country = await Country.findAll({include:Capital}); // required:true

    res.status(200).json({
      data: country,
    });
  } catch (error) {
    console.log(error.message);
  }
};

const add = async (req, res) => {
  try {
    const country = await Country.create(req.body);
    res.status(200).json({
      data: country,
    });
  } catch (error) {
    console.log(error.message);
  }
};

////////////////

const country=async(req,res)=>{
  try {
    const country=await Country.findOne({where:{name:"London"}})
    const capital = await Capital.findOne({ where: { name: "maskva" } });
    await country.setCapital(capital)

    res.status(200).json({
      data:'success'
    })
  } catch (error) {
    console.log(error.message)
  }
}

////////////

const getOnecountry=async(req,res)=>{
  try {
    const country = await Country.findOne({ where: { name: "London" } });
    console.log(await country.getCapital());
    res.status(200).json({
      data: "success"
    });
  } catch (error) {
    console.log(error.message)
  }
}

////////////

const createCapital=async(req,res)=>{
  try {
    const country=await Country.create({where:{name:"Tojikistan"}})
    // await country.createCapital({ name: "Washington" });
    console.log(await country.createCapital({where:{name:"Dushanbe"}}))
    res.status(200).json({
      data: "success",
    });
  } catch (error) {
    console.log(error.message)
  }
}

////////////

const getCapital=async(req,res)=>{
  try {
    const country=await Country.findOne({where:{name:"Uzbekistan"}})
    console.log(country)
    const capital = await Capital.findOne({ where: { name: "tashkent" } });
    console.log(await capital.setCountry(country))
     res.status(200).json({
       data: "success",
     });
  } catch (error) {
    console.log(error.message)
  }
}


//////////

const deleteCountry=async(req,res)=>{
  try {
    await Country.destroy({where:{name:"Uzbekistan"}})
    res.status(200).json({
      data: "success",
    });
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = { getAll, add ,country,getOnecountry,createCapital,getCapital,deleteCountry};
