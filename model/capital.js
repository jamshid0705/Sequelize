const sequelize = require("../config/database");
const Sequelize = require("sequelize");

const capital = sequelize.define(
  "capital",
  {
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

// capital.sync({alter:true})
module.exports = capital;
