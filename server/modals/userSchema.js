const mongoose = require("mongoose")
const {schema} = mongoose

const User = new schema({
    patientId:{
        name:String,
        type:require
    },
    name:{
        type:String,
        require:true,

    },
    username:{
        type:String,
        require:true,
    },
    patientAddress:{
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
        diseaseName:String,
        medicineName:String,
        hospitalAddress:String

     }]

})
