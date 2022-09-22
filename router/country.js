const express=require('express')
const Rout=express.Router()
const country=require('../controller/country')
Rout.route("/get").get(country.country);
Rout.route("/getonecon").get(country.getOnecountry);
Rout.route('/delete').delete(country.deleteCountry)
Rout.route('/getcapital').get(country.getCapital)
Rout.route('/create').get(country.createCapital)
Rout.route('/').get(country.getAll).post(country.add)


module.exports=Rout