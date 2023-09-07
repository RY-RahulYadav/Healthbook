const express = require('express')
const LocalStrategy = require('passport-local');
const passport = require("passport")
const Router = express.Router();
const DoctorUser = require("../modals/doctorSchema.js");
const PatientUser = require('../modals/patientSchema.js');




// login route 
Router.post('/login', passport.authenticate("local-doctor"), function (req, res) {

    res.status(200).send("successfully login")
})

// signup route 
Router.post('/signup', async (req, res) => {

    const doctordetail = new DoctorUser({
        DoctorId: `D${(req.body.Doctorname)?.substring(0, 4)}${(req.body.AdharNo)?.substring(0, 4)}`,
        username: req.body.username,
        Doctorname: req.body.Doctorname,
        AdharNo: req.body.AdharNo,
        HospitalAddress: req.body.HospitalAddress,
        HospitalName: req.body.HospitalAddress,
        Gender: req.body.Gender,
        Email: req.body.Email,
        PhoneNo: req.body.PhoneNo,


    })

    const user = await DoctorUser.findOne({ username: req.body.username }).exec()


    if (user) {
        res.status(409).send("user exist already")
    }
    else {
        DoctorUser.register(doctordetail, req.body.password, (err, user) => {


            if (err) {

                res.status(500).send(err)
            }
            else {
                passport.authenticate("local-doctor")(req, res, async (err, user) => {
                    if (err) {
                        res.send(err)
                    }

                    else {


                        res.status(200).send("succesfully signup");

                    }

                })
            }
        })
    }

})


// get doctoe details route
Router.get("/getUser", (req, res) => {
    
    if (req.isAuthenticated() && req.user.userType === "doctor") {
        res.status(200).json(req.user);
    }
    else {
        res.status(401).send("unauthorized")
    }

})

// search patient details route
Router.post("/search/patient" , async (req, res)=>{
   
    if(req.isAuthenticated() && req.user.userType==="doctor"){
        const user = await PatientUser.findOne({ patientId: req.body.PatientId })
        if(user){
            console.log(user)
        res.status(200).json(user)
         }
        else{
          res.status(401).json({status:401, message:"Not found Patient"})
         }
    }
    else{
        res.status(401).json({status:401, message:'Not login'})
    }
})


// update patient details route 
Router.post("/addpatientDetail" , async (req,res)=>{
    
    
    if(req.isAuthenticated() && req.user.userType==="doctor" ){
        try{
             
            const doc = await PatientUser.findOneAndUpdate({patientId:req.body.PatientId} , {$push:{ patientRecord:{
                hospitalId:req.body.hospitalId,
                hospitalName:req.body.hospitalName,
                doctorName:req.body.doctorName,
                HospitalPhoneNo:req.body.HospitalPhoneNo,
                diseaseName:req.body.diseaseName,
                medicineName:req.body.medicineName,
                hospitalAddress:req.body.hospitalAddress,
                diagnosis:req.body.diagnosis,
                Date:req.body.Date,
                SpecialCare:req.body.SpecialCare,
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

// logout route 
Router.get('/logout', (req, res) => {
    if (req.isAuthenticated()) {
        req.logout((err) => {
            if (err) {
                res.status(500).send(err);
            }
            else {
                res.status(200).send("successfully logout")
            }
        })
    }
    else {
        res.status(401).send("unauthorized")
    }

})




module.exports = Router;