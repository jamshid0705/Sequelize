const User = require("./../model/user");
const sequelize = require("./../config/database");
const Sequelize = require("sequelize");

const buildUser = async (req, res) => {
  try {
    const user = await User.create(req.body);

    // await user.save()
    res.status(200).json({
      data: user,
    });
  } catch (error) {
    console.log(error);
    res.status(200).json({
      data: error.message,
    });
  }
};

const updateuser = async (req, res) => {
  try {
    const user = await User.update(
      { age: 15 },
      { where: { user_id: req.params.id }, returning: true }
    );

    res.status(200).json({
      data: user,
    });
  } catch (error) {
    console.log(error.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.destroy({
      where: { user_id: req.params.id },
      returning: true,
    });

    res.status(200).json({
      status: "Narmanli ochdi !",
      data: user,
    });
  } catch (error) {
    console.log(error.message);
  }
};

const getAll = async (req, res) => {
  try {
    // console.log(req.query.limit)
    const user = await User.findAll();
    res.status(200).json({
      data: user,
    });
  } catch (error) {
    console.log(error.message);
  }
};

const getOne = async (req, res) => {
  try {
    const user = await User.findOne({ where: { user_id: req.params.id } });

    res.status(200).json({
      data: user,
    });
  } catch (error) {
    console.log(error.message);
  }
};

///////////// lt gt lte gte ////////////////
const getSumAge = async (req, res) => {
  try {
    const user = await User.findAll({
      where: { age: { [Sequelize.Op.lt]: 34 } },
    });
    res.status(200).json({
      data: user,
    });
  } catch (error) {
    console.log(error.message);
  }
};

////////////// summma //////////
const sum = async (req, res) => {
  try {
    const user = await User.sum("age");
    res.status(200).json({
      data: user,
    });
  } catch (error) {
    console.log(error.message);
  }
};

///////// find or create /////////
const findorcreate = async (req, res) => {
  try {
    const user = await User.findOrCreate({
      where: { username: req.body.username },
    });
    const [result, created] = user;
    console.log(result, created);
    if (!created) {
      res.status(200).json({
        status: "Siz tizimda mavjudsiz!",
      });
    } else {
      res.status(200).json({
        status: "success",
        data: result,
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

///////////////////////////////// test //////////////////////////////////////////////
const findAll = async (req, res) => {
  try {
    const user = await User.findAll();
    res.status(200).json({
      data: user,
    });
  } catch (error) {
    console.log(error.message);
  }
};

///// SELECT name,age FROM user;
const findAllAtt = async (req, res) => {
  try {
    const user = await User.findAll({ attributes: ["name", "age"] });
    res.status(200).json({
      data: user,
    });
  } catch (error) {
    console.log(error.message);
  }
};

////// SELECT name as username,age FROM user;

const findAllAttname = async (req, res) => {
  try {
    const user = await User.findAll({
      attributes: [["name", "username"], "age"],
    });
    res.status(200).json({
      data: user,
    });
  } catch (error) {
    console.log(error.message);
  }
};

const aggri = async (req, res) => {
  try {
    const user = await User.findAll({
      attributes: [[sequelize.fn("SUM", sequelize.col("age")), "SummaAge"]],
    });
    res.status(200).json({
      data: user,
    });
  } catch (error) {
    console.log(error.message);
  }
};

const exclude = async (req, res) => {
  try {
    const user = await User.findAll({ attributes: { exclude: ["name"] } });
    res.status(200).json({
      data: user,
    });
  } catch (error) {
    console.log(error.message);
  }
};

/// SELECT name FROM user WHERE age=23;

const shart = async (req, res) => {
  try {
    const user = await User.findAll({
      attributes: ["name"],
      where: { age: 22 },
    });
    res.status(200).json({
      data: user,
    });
  } catch (error) {
    console.log(error.message);
  }
};

const order = async (req, res) => {
  try {
    const user = await User.findAll({
      order: [
        ["age", "DESC"],
        ["username", "ASC"],
      ],
    });
    res.status(200).json({
      data: user,
    });
  } catch (error) {
    console.log(error.message);
  }
};
////////////  group by ////////////
const groupby = async (req, res) => {
  try {
    const user = await User.findAll({
      attributes: [
        [sequelize.fn("COUNT", sequelize.col("username")), "soni"],
        "username",
      ],
      group: ["username"],
    });
    res.status(200).json({
      data: user,
    });
  } catch (error) {
    console.log(error.message);
  }
};

//////////// or and //////////
const orand = async (req, res) => {
  try {
    const user = await User.findAll({
      where: { [Sequelize.Op.and]: [{ age: 20 }, { age: 21 }] },
    });
    res.status(200).json({
      data: user,
    });
  } catch (error) {
    console.log(error.message);
  }
};

//////////// solishtirish //////////
const solish = async (req, res) => {
  try {
    const user = await User.findAll({
      where: { age: { [Sequelize.Op.gt]: 25 } },
    });
    res.status(200).json({
      data: user,
    });
  } catch (error) {
    console.log(error.message);
  }
};

/////////// ////////
const alluserquery = async (req, res) => {
  try {
    const user = await sequelize.query(`SELECT * FROM user`);
    res.status(200).json({
      data: user.row,
    });
  } catch (error) {}
};

const login = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const user = await sequelize.query(
      `SELECT * FROM user WHERE email=${email}`
    );

    res.status(200).json({
      data: user.rows,
    });
  } catch (error) {}
};

const tiklash=async(req,res)=>{
  try {
    await User.restore()
    res.status(200).json({
      data:'tiklandi'
    })
  } catch (error) {
    
  }
}

module.exports = {
  tiklash,
  login,
  alluserquery,
  solish,
  orand,
  order,
  shart,
  exclude,
  aggri,
  findAllAttname,
  findAllAtt,
  buildUser,
  updateuser,
  deleteUser,
  getAll,
  getOne,
  getSumAge,
  groupby,
  sum,
  findorcreate,
  findAll,
};
