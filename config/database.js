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
        // In the provided code, process.exit(1) is a Node.js method used to terminate the current process with a non-zero exit code. The 1 passed as an argument to process.exit() indicates an error condition. When a process exits with a non-zero code, it typically signifies that the process encountered an error during its execution.
    })
}


//exporting the connection
module.exports = dbConnect;