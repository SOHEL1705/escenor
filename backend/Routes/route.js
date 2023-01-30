import express from 'express'
import {addTodo,getallTodo,toggeleTodo,updateTodo,deleteTodo} from '../Controllers/todoController.js'
import {Register} from '../Controllers/UserController.js'
import { Login } from '../Controllers/authController.js'

const  route = express.Router()


route.post('/todos',addTodo)
route.get('/todos',getallTodo)
route.get('/todos/:id',toggeleTodo)
route.put('/todos/:id', updateTodo);
route.delete('/todos/:id', deleteTodo);


//LOGIN_ROUTES
route.post('/api/users', Register)
route.post('/api/auth', Login)


 export default route; 