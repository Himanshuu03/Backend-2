const Todo = require("../models/todoModel");

const createTodo = async(request,response)=>{
    try {
        const{title,description} = request.body;
        const result = await Todo.create({title,description});
        response.send("Data send succesfully");
    } catch (error) {
        response.send(error);
    }
}

module.exports = createTodo;