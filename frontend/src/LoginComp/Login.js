import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import React,{useState}from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import "../Component/Todo.css"

const Login = () => {
    const [error, setError] = useState("");
    const [data,setdata]=useState(
        {email:"",
        password:""}
    );
const HandleChane = ({currentTarget:input})=>{
    setdata({...data,[input.name]:input.value})
}
const navigate=useNavigate();
const HandleSubmit = (e)=>{
    const HOST = "http://localhost:8000/api/auth";
    axios.post(HOST,{email:data.email,password:data.password}).then(res=>{
        console.log(res.data)
        if(res.data.message=='Logged in successfuly'){
            
            navigate('/Home')
            
        }
        else{
            setError(res.data.message)
        }
    },
    err=>{
        console.log(err)
    }

    )
    e.preventDefault()
}
  return (
    <>
    {error &&  <Alert>{error}</Alert>}
    <Container>
   
<div className='container'>
    <Form className='container_Log' onSubmit={HandleSubmit}>
    <h1>LOGIN</h1>
    <Form.Group className="mb-3"   controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control
        onChange={HandleChane}
        name='email' 
        value={data.email}
        required 
        type="email" 
        placeholder="Enter email" />
    </Form.Group>

    

    <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control 
        onChange={HandleChane}
        name='password' 
        value={data.password}
        required 
        type="password" 
        placeholder="Password" />
    </Form.Group>

     <div className='btn'>
      <Button variant="primary"
      type="submit">
   LOGIN
      </Button>
      <Link to ='/Register'>
      <Button variant="Secondry">
     REGISTER
      </Button></Link>
          </div>
    </Form>
    </div>
    </Container>
    </>
  );
}





export default Login