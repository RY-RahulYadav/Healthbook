require('dotenv').config();
const mongoose = require('mongoose');



async function connectTomongodb() {
    await mongoose.connect(process.env.MONGO_URL).then(() => { console.log("mongodb connect") }).catch((err) => { console.log(err) });
}



module.exports = connectTomongodb;
