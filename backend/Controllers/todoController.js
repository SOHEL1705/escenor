import todo from '../model/SchemaTodo.js';

export const addTodo=async(request,response)=>{
   try {
        const newTodo = await todo.create({
            data: request.body.data,
            TimeWhenCreated: Date.now()
        })

       await newTodo.save();
       
return(response.status(200).json(newTodo))

    } catch (error) {
        response.status(500).json(error.message)
    }

}

export const getallTodo=async(request,response)=>{
    try {
        
      const todos = await todo.find({}).sort({"TimeWhenCreated": -1})
       
return(response.status(200).json(todos))

    } catch (error) {
        response.status(500).json(error.message)
    }
}

export const toggeleTodo=async(request,response)=>{
  try {
        const todotoggle = await todo.findById(request.params.id);

        const Todo = await todo.findOneAndUpdate(
            { _id: request.params.id },
            { done: !todotoggle.done }
        )
        await Todo.save();
        return response.status(200).json(Todo);
    } catch (error) {
        response.status(500).json(error.message)
    }
}

export const updateTodo = async (request, response) => {
    try {
        await todo.findOneAndUpdate(
            { _id: request.params.id },
            { data: request.body.data }
        )

        const Todo = await todo.findById(request.params.id);

        return response.status(200).json(Todo);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}
export const deleteTodo = async (request, response) => {
    try {
        await todo.findByIdAndDelete(request.params.id)

        return response.status(200).json(Todo);
    } catch (error) {
        return response.status(500).json(error.message);
    }
}

