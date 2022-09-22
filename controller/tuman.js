const Maktab = require("../model/maktab");
const Tuman = require("../model/tuman");


const getAll = async (req, res) => {
  try {
    const tuman = await Tuman.findAll({include:Maktab,required:true});

    res.status(200).json({
      data: tuman,
    });
  } catch (error) {
    console.log(error.message);
  }
};

const add = async (req, res) => {
  try {
    const tuman = await Tuman.create({
      name:req.body.name,
    });
    res.status(200).json({
      data: tuman,
    });
  } catch (error) {
    console.log(error.message);
  }
};

//////// hasMany add
const hasManyAdd=async(req,res)=>{
  try {
    const tuman=await Tuman.findOne({where:{name:'Yunusobod'}})
    const maktab=await Maktab.findOne({where:{name:'1-maktab'}})
    await tuman.removeMaktabs(maktab)  // addMaktabs,removeMaktabs
    res.status(200).json({
      data:"success"
    })
  } catch (error) {
    console.log(error.message)
  }
}

////// count 
const count = async (req, res) => {
  try {
    const tuman = await Tuman.findOne({ where: { name: "Yunusobod" } });
    console.log(await tuman.countMaktabs())
    res.status(200).json({
      data: "success",
    });
  } catch (error) {
    console.log(error.message);
  }
};

///// delete
const deleteTuman = async (req, res) => {
  try {
    const tuman = await Tuman.destroy({ where: { name: "Yunusobod" } });
   
    res.status(200).json({
      data: "success",
    });
  } catch (error) {
    console.log(error.message);
  }
};

///////// set
const set= async (req, res) => {
  try {
    const tuman = await Tuman.findOne();
    const maktab = await Maktab.findOne();
    await maktab.setTuman(tuman);
    res.status(200).json({
      data: "success",
    });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { getAll, add ,hasManyAdd,count,deleteTuman,set};
