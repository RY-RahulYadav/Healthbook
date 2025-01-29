require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const connectTomongodb = require('./database.js')
const session = require("express-session")
const passport= require("passport")
const PatientUser = require("./modals/patientSchema.js")
const LocalStrategy = require('passport-local');
const DoctorUser = require('./modals/doctorSchema.js');
const cors = require('cors')


const port = process.env.PORT||3000;
const app = express();
connectTomongodb();
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors({
  origin: ['http://localhost:5173' , "https://healthbook-two.vercel.app"], 
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Allow cookies and credentials

}));
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  // httpOnly: true,
  cookie: { 
       secure:false}
}))

app.use(passport.initialize())
app.use(passport.session())


passport.use('local-patient',new LocalStrategy(PatientUser.authenticate()));
passport.use('local-doctor',new LocalStrategy( DoctorUser.authenticate()));


passport.serializeUser((user, done) => {
  done(null, { id: user.id, userType: user.userType }); 
});


passport.deserializeUser( async (User, done) => {
  const model = User.userType === "patient" ? PatientUser : DoctorUser;

 await model.findById(User.id)
        .exec()
        .then(user => {
            done(null, user);
        })
        .catch(err => {
            done(err, null);
        });
});


app.use('/api/auth/patient' , require("./routes/api_auth_patient.js"));
app.use('/api/auth/doctor' , require("./routes/api_auth_doctor.js"));





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

