const express = require('express')
const passport = require("passport")
const PatientUser = require("../modals/patientSchema.js")
const LocalStrategy = require('passport-local');
const Router = express.Router();




// login route 
Router.post('/login',passport.authenticate("local-patient") ,function(req, res) {

   res.status(200).send("succesfully login")
  })
    



// signup route 

Router.post('/signup' , (req, res)=>{
    const patientdetail= new PatientUser({
        patientId: `P${(req.body.patientname)?.substring(0,5)}${(req.body.AdharNo)?.substring(0,4)}`,
        patientname:req.body.patientname,
        username:req.body.username,
        AdharNo:req.body.AdharNo,
        patientAddress:req.body.patientAddress,
        Gender:req.body.Gender,
        Email:req.body.Email,
        PhoneNo:req.body.PhoneNo,
        DOB:req.body.dateBirth,
       
    })

    PatientUser.register( patientdetail ,  req.body.password , (err , user )=>{
     if(err){
        
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


// get patient user route  
Router.get("/getUser" , (req,res)=>{
  
    if(req.isAuthenticated() && req.user.userType==="patient"){
           res.status(200).json(req.user);
    }
    else{
        res.status(401).send("unauthorized")
    }
   
})


// logout route 
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