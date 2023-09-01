const express = require('express')
const passport = require("passport")
const PatientUser = require("../modals/patientSchema.js")
const LocalStrategy = require('passport-local');
const Router = express.Router();





Router.post('/login',passport.authenticate("local-patient") ,function(req, res, next) {

   res.status(200).send("succesfully login")
  })
    



// })

Router.post('/signup' , (req, res)=>{
    const patientdetail= new PatientUser({
        patientId: `P${(req.body.patientname)?.substring(0,4)}${(req.body.AdharNo)?.substring(0,4)}`,
        patientname:req.body.patientname,
        username:req.body.username,
        AdharNo:req.body.AdharNo,
        patientAddress:req.body.patientAddress,
        Gender:req.body.gender,
        Email:req.body.email,
        PhoneNo:req.body.phoneNo,
        DOB:req.body.dateBirth,
       
    })

    PatientUser.register( patientdetail ,  req.body.password , (err , user )=>{
     if(err){
        console.log(err)
        res.status(500).send(err)
     }
     else{
         passport.authenticate("local-patient")(req , res, async (err , user)=>{
            if(err){
                 res.send(err)
            }
            else{
                
                res.status(200).send("succesfully singup");
            }

      })
     }
    })
    
})



Router.get("/getUser" , (req,res)=>{
  
    if(req.isAuthenticated() && req.user.userType==="patient"){
           res.status(200).json(req.user);
    }
    else{
        res.status(401).send("unauthorized")
    }
   
})

Router.get('/logout' , (req, res)=>{
    if(req.isAuthenticated()){
        req.logout((err)=>{
            if(err){
                res.status(500).send(err);
            }
            else{
                res.status(200).send("successfully logout")
            }
        })
    }
    else{
       res.status(401).send("unauthorized")
    }
   
})

module.exports=Router;