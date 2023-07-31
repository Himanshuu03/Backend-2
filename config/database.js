//Creating mongoose Instance
const mongoose = require("mongoose");


//To use env variables -> all the data get loaded in process(object)
require("dotenv").config();


//Connection between backend and Database 
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


//exporting the connection
module.exports = dbConnect;