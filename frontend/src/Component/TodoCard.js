//todoform
import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import {useDispatch} from 'react-redux'
import Button from 'react-bootstrap/Button';
import {addnewTodoitem} from '../redux/actions/index'




const TodoCard = () => {
  const[input,setinput]=useState("") //input state
  const dispatch = useDispatch()

  const SubmitHandler =(e)=>{
    e.preventDefault( )
    dispatch(addnewTodoitem(input))
    setinput('')
  }
  
  
  const onInputChange = (e) => {
    setinput(e.target.value);
}
  return (
   <>
   <Form onSubmit={SubmitHandler}>
        <Form.Label><span> LISTITEM</span></Form.Label>
      <Form.Group className="mb-3" controlId="formBasicEmail">

        <Form.Control 
        value={input}
        className='InputTodo' 
        type="text" 
        onChange={onInputChange}
        placeholder="Enter Todo Here" />
      </Form.Group>
 
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
   </>
  )
}

export default TodoCard
