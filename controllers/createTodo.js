//Import Model ->
const Todo = require("../models/Todo");

//Router Handler ->
exports.createTodo = async(resquest,response)=>{
    try{
        const {title,description} = resquest.body;
        //Create a new Todo Obj and insert in DB
        const result = await Todo.create({title,description});
        //send a json response with a success flag
        response.status(200).json(
            {
                success:true,
                data:result,
                message:"Entry Created Successfully", 
            }
        );
    }catch(error){
        console.error(error);
        response.status(500).json(
            {
                success:false,
                data:"internal server message",
                message:err.message,
            }
        );
    }
}