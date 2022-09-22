const sequelize = require("../config/database");
const Sequelize = require("sequelize");
const maktab=require('./maktab')

const tuman = sequelize.define(
  "tuman",
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

tuman.hasMany(maktab,{onDelete:'CASCADE'})
maktab.belongsTo(tuman, { onDelete: "CASCADE" });

// tuman.drop()
// maktab.drop()
tuman.sync({alter:true})
maktab.sync({alter:true})

module.exports = tuman,maktab;
