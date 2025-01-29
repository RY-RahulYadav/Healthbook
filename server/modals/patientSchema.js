const mongoose = require("mongoose")
const passportLocalMongoose = require("passport-local-mongoose")
const { Schema } = mongoose

const patientSchema = new Schema({
    userType:{
        type:String,
        default:"patient"
    },
    patientId:{
        type:String,
        require:true
    },
    patientname:{
        type:String,
        require:true,

    },
    username:{
        type:String,
        require:true,
    },
    AdharNo:{
        type:String,
        require:true,
    },
    patientAddress:{
        type:String,
        require:true
    },
    Gender:{
        type:String,
        require:true
    },
    Email:{
        type:String,
        require:true
    },
    PhoneNo:{
        type:String,
        require:true
    },
   DOB:{
    type:String,
    require:true
   },
    password:{
        type:String,
        require:true
     },
     patientRecord:[{
        hospitalId:String,
        hospitalName:String,
        doctorName:String,
        HospitalPhoneNo:String,
        diseaseName:String,
        medicineName:String,
        hospitalAddress:String,
        diagnosis:String,
        Date:String,
        SpecialCare:String,
        remarks:String
     }]

})

patientSchema.plugin(passportLocalMongoose)
const PatientUser = mongoose.model('PatientUser', patientSchema);
module.exports = PatientUser;
