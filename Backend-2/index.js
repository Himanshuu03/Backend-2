//importing express
const express = require("express");

//creating instance
const app = express();

//act as a mildware
app.use(express.json());

require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.listen(PORT,()=>{
    console.log("server started");
})

const todoRoute = require("./routes/todoRoute");

app.use("/api/v1",todoRoute);

const dbConnect = require("./config/database");
dbConnect();

app.get("/",(request,response)=>{
    response.send(`<h1>This is Homepage</h1>`)
})
