const app=require('./middleware/app')
require('dotenv').config()
require('./config/database')
// require('./model/user')
app.listen(process.env.PORT,()=>{
  console.log(`${process.env.PORT} Listening`)
})