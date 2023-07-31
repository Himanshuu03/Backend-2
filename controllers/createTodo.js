const Todo = require("../models/Todo");

exports.createTodo = async(resquest,response)=>{
    try{
        const {title,description} = resquest.body;
        const result = await Todo.create({title,description});
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