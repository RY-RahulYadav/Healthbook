const mongoose = require("mongoose")

const passportLocalMongoose = require('passport-local-mongoose')
const { Schema } = mongoose

const doctorSchema = new Schema({
    userType:{
        type:String,
        default:"doctor"
    },
    DoctorId:{
        type:String,
        require:true
    },
    Doctorname:{
        type:String,
        require:true,

    },
    username:{
        type:String,
        require:true,
    },
    HospitalAddress:{
        type:String,
        require:true
    },
    doctorHospital:{
        type:String,
        require:true
    },
    gender:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phoneNo:{
        type:Number,
        require:true
    },
   
    password:{
        type:String,
        require:true
    }
    

})
doctorSchema.plugin(passportLocalMongoose)
const DoctorUser = mongoose.model('DoctorUser', doctorSchema);
module.exports = DoctorUser;