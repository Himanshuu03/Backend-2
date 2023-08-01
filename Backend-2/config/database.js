//importing mongoose and creating instance
const mongoose = require("mongoose");

require("dotenv").config();

const dbConnect = () =>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser :true,
        useUnifiedTopology:true
    })
    .then(()=>{
        console.log("db connected succesfully");
    })
    .catch(()=>{
        console.log("db connection Unsuccesfully");
        process.exit(1);
    })
}

module.exports= dbConnect;