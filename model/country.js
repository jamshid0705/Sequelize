const sequelize=require('../config/database')
const Sequelize=require('sequelize')
const capital=require('./capital')

const country=sequelize.define('country',{
  name:{
    type:Sequelize.DataTypes.STRING,
    allowNull:false
  }
},{
  timestamps:false
})

country.hasOne(capital, { onDelete: "CASCADE" });
capital.belongsTo(country,{onDelete:"CASCADE"})
// country.drop()
// capital.drop()
country.sync({alter:true})
capital.sync({ alter: true });


module.exports=country