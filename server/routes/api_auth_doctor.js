const express = require('express')
const LocalStrategy = require('passport-local');
const passport = require("passport")
const Router = express.Router();
const DoctorUser = require("../modals/doctorSchema.js")





Router.post('/login',passport.authenticate("local-doctor") ,function(req, res, next) {

    res.status(200).send("successfully login")
   })
     

   Router.post('/signup' , (req, res)=>{
    const doctordetail= new DoctorUser({
        DoctorId:req.body.DoctorId,
        Doctorname:req.body.Doctorname,
        username:req.body.username,
        doctorAddress:req.body.doctorAddress,
        HospitalAddress:req.body.HospitalAddress,
        gender:req.body.gender,
        email:req.body.email,
        phoneNo:req.body.phoneNo,
       
       
    })

    DoctorUser.register( doctordetail ,  req.body.password , (err , user )=>{
     if(err){
        console.log(err)
        res.status(500).send(err)
     }
     else{
         passport.authenticate("local-doctor")(req , res, async (err , user)=>{
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
    
    if(req.isAuthenticated() && req.user.userType==="doctor"){
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