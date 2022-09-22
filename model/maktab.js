const sequelize = require("../config/database");
const Sequelize = require("sequelize");

const maktab = sequelize.define(
  "maktab",
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

module.exports = maktab;
