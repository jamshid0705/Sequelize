const sequelize = require("../config/database");
const Sequelize = require("sequelize");
const product = require("./product");

const customer = sequelize.define(
  "customer",
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


const ProductCustomer = sequelize.define(
  "productcostumer",
  {
    id: {
      type: Sequelize.DataTypes.UUID,
      defaultValue: Sequelize.DataTypes.UUIDV4,
      primaryKey: true,
    }
  },
  {
    timestamps: false,
  }
);
customer.belongsToMany(product, { through: ProductCustomer });
product.belongsToMany(customer, { through: ProductCustomer });
// customer.drop()
// product.drop()
// ProductCustomer.drop()
customer.sync({ alter: true });
product.sync({ alter: true });
ProductCustomer.sync({alter:true})

module.exports = customer,ProductCustomer;
