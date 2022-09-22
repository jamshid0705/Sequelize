const express=require('express')
const Rout=express.Router()
const customerProduct=require('../controller/customerProduct')

Rout.route('/procos').post(customerProduct.add)

module.exports=Rout