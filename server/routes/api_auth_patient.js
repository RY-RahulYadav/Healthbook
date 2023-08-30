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
        patientId: req.body.patientId,
        patientname:req.body.patientname,
        username:req.body.username,
        patientAddress:req.body.patientAddress,
        gender:req.body.gender,
                email:req.body.email,
                phoneNo:req.body.phoneNo,
       
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

Router.post("/addpatientDetail" , async (req,res)=>{
    
    
    if(req.isAuthenticated()){
        try{

            const doc = await PatientUser.findOneAndUpdate({patientId:req.body.patientId} , {$push:{ patientRecord:{
                hospitalId:req.body.hospitalId,
                hospitalName:req.body.hospitalName,
                doctorName:req.body.doctorName,
                diseaseName:req.body.diseaseName,
                medicineName:req.body.medicineName,
                
                hospitalAddress:req.body.hospitalAddress,
                diagnosis:req.body.diagnosis,
                remarks:req.body.remarks
             }}} , {new:true})
            
             res.status(200).json(doc)
        }
        catch(err){
             res.status(500).send(err)
        }
    }
    else{
        res.status(401).send("unauthorized")
    }

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