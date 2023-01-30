import axios from 'axios';
import React,{useState}from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

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
const newFunction = (e)=>{
    const HOST = "http://localhost:8000/api/auth";
    axios.post(HOST,{email:data.email,password:data.password}).then(res=>{
        console.log(res.data)
        if(res.data.message=='Logged in successfuly'){
            // alert(res.data.message)
            navigate('/Home')
            
        }
        else{
            alert(res.data.message)
        }
    },
    err=>{
        console.log(err)
    }

    )
    e.preventDefault()
}

const HandleSubmit = async (e)=>{
    // alert('')
    // 
    try {
    const HOST = "http://localhost:8000/api/auth";
    const {data:res}= await axios.post(HOST.data)
    localStorage.setItem('token',res.data)
    // window.location('/Home')
    console.log(res.message)
    console.log(res.data)
    } catch (error) {
        if (
            error.response &&
            error.response.status >= 400 &&
            error.response.status <= 500
        ) {
            setError(error.response.data.message);
        }
    }
    e.preventDefault()
}

  return (
    <>
    <Container>
    {error && <div className={"error_msg"}>{error}</div>}
<div className='container'>
    <h1>LOGIN</h1>
    <Form onSubmit={newFunction}>
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
      {/* <Link to ='/Register'>
      <Button variant="Secondry">
     REGISTER
      </Button></Link> */}
          </div>
    </Form>
    </div>
    </Container>
    </>
  );
}





export default Login