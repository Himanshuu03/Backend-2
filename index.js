//Creating server
const express = require("express");

//Creating server Instance
const app = express();

//Load config fro env file
require("dotenv").config();
const PORT = process.env.PORT || 4000 ;

//act as mildware (to parse json request body)
app.use(express.json());


//Importing Routes
const todoRoutes = require("./routes/todos");

//mount the todo API Routes
app.use("/api/v1",todoRoutes);

//Start the Server
app.listen(PORT,()=>{
    console.log(`server has started at ${PORT}`);
})

//Connect to the database
const dbConnect = require("./config/database");
dbConnect();

//default Route
app.get("/",(request,response)=>{
    response.send(`<h1>This is Homepage</h1>`)
})