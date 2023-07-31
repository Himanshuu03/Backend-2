//Basic Utility 
const express = require("express");
//Creating router instance
const router = express.Router();


//Importing controller ->
const {createTodo} = require("../controllers/createTodo");


//Creating a route for createTodo
router.post("/createTodo",createTodo);

module.exports = router