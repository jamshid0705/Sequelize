const express = require("express");
const app = express();
const userRout = require("../router/user");
const countryRout=require("../router/country")
const capitalRout=require("../router/capital")
const tumanRout=require('../router/tuman')
const maktabRout=require('../router/maktab')
const customerRout=require('../router/customer')
const productRout=require('../router/product')
const procosRout=require('../router/customerProduct')
app.use(express.json());

app.use('/api/v1/procos',procosRout)
app.use("/api/v1/customer",customerRout)
app.use("/api/v1/product",productRout)
app.use("/api/v1/tuman",tumanRout)
app.use("/api/v1/maktab",maktabRout)
app.use("/api/v1/country",countryRout)
app.use("/api/v1/capital", capitalRout);
app.use("/api/v1/users", userRout);
module.exports = app;
