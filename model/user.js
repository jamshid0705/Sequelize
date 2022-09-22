const Sequelize = require("sequelize");
const sequelize = require("../config/database");

const user = sequelize.define(
  "user",
  {
    user_id: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true, // bitta oshib borishi
    },
    username: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
      get(){
        const kattaharf=this.getDataValue('username')
        return kattaharf.toUpperCase()
      }
    },
    password: {
      type: Sequelize.DataTypes.STRING,
      set(value){
        return this.setDataValue('password',value+1)
      }
    },
    age: {
      type: Sequelize.DataTypes.INTEGER,
      defaultValue: 22,
      validate:{
        juftmi(){
          if(this.age%2==0){
            return true
          }
          else{
            throw new Error('Toq son')
          }
        }
      }
    },
    name: {
      type: Sequelize.DataTypes.STRING,
    },
    aboutme:{
      type:Sequelize.DataTypes.VIRTUAL,
      get(){
        return `${this.name} ${this.password}`
      }
    },
    email:{
      type:Sequelize.DataTypes.STRING,
      unique:true,
      validate:{
        isEmail:{
          msg:'Siz email kiriting !'
        }
      }
    }
  },
  {
    timestamps: true,
    freezeTableName: true,
    paranoid:true 
  }
);

// user.drop()
user.sync({ alter: true });

module.exports = user;
