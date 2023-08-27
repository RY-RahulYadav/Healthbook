require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const port = process.env.PORT||3000
const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use()

app.get("/" , (req,res)=>{

    res.send('<h1 style="text-align:center">Welcome to my healthcare server</h1>');
})


app.listen( port  , (err)=>{
  if(err){
    console.log(err);
  }

  else{
    console.log("server start");

  }
})

