const Sequelize = require("sequelize");

const sequelize = new Sequelize("telegram", "postgres", "jam$0705", {
  // host: process.env.DB_HOST,
  // port:process.env.DB_PORT,
  dialect: "postgres",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("DB connected");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = sequelize;
