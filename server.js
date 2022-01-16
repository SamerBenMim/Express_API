//entry point file  , env var / database config ...

const mongoose = require('mongoose')
const dotenv=require('dotenv'); // .env
dotenv.config({path :'./config.env'})
const app= require("./app")  


const DB = process.env.DATABASE.replace('<PASSWORD>',process.env.DATABASE_PASSWORD)
mongoose.connect(DB,{
useNewUrlParser:true,
useCreateIndex:true,
useFindAndModify:false,
useUnifiedTopology: true
}).then(() =>{
    console.log("db connexion successful !!");
})


app.listen(process.env.PORT,()=>{
    console.log('app running on port '+ process.env.PORT);
});