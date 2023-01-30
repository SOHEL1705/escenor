import React,{useEffect}from 'react'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import {getallTodoitem} from '../redux/actions/index';
import { useDispatch, useSelector } from 'react-redux';
import Carding from './Carding';
const Todos = (props) => {
    const dispatch = useDispatch()
     const todos = useSelector(state => state.todos);

    useEffect(()=>{
        dispatch(getallTodoitem())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
  return (
 <>
 <Container>
<ul>
  <Card className='cardmain' style={{ border:"none", width: '20rem' }}>{todos.map(todo=>{return(
    <Carding  key={todo._id}
    todo={todo}/>
    )
    
  }) }
    </Card>
    </ul>
  </Container>
 </>
  )
}

export default Todos
