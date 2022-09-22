const sequelize = require("../config/database");
const Sequelize = require("sequelize");

const product = sequelize.define(
  "product",
  {
    id:{
      type:Sequelize.DataTypes.UUID,
      defaultValue:Sequelize.DataTypes.UUIDV4,
      primaryKey:true
    },
    name: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);
// capital.drop()



module.exports = product;
