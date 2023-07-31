const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect=()=>{
    mongoose.connect((process.env.DATABASE_URL),{
        useNewUrlParser :true,
        useUnifiedTopology:true
    })
    .then(()=>{
        console.log("db connected succesful");
    })
    .catch(()=>{
        console.log("db connected unsuccesfull")
        process.exit(1);
    })
}

module.exports = dbConnect;