import { useState } from "react";
import Card from "react-bootstrap/Card";
import { doneTodo, UpdateTodo,DeleteTodo } from "../redux/actions";
import { useDispatch } from "react-redux";
const Carding = ({ todo }) => {
  const [edit, setEdit] = useState(false);
  const [text, settext] = useState(todo.data);
  const dispatch = useDispatch();

  //Edit onsubmit
  const SubmitHandler = (e) => {
    e.preventDefault();
    setEdit((prevState) => !prevState);
    dispatch(UpdateTodo(todo._id, text));
  };
  
  return (
    <>
          <div className="constain_scroll">      
          <div className="first"> todolist     
    </div>
          <div className="second">      
          <div className="icons_list">
          
          <span className="icon" onClick={()=>{dispatch(DeleteTodo(todo._id)) }}>
            <i className=" fa-solid fa-trash" ></i>
          </span>
          <span
            className="icon"
            onClick={() => {
              setEdit((prevState) => !prevState);
            }}
            >
            <i className=" fa-solid fa-pen-to-square"></i>
          </span>
            </div>
       
      <Card.Body 
        className=" my-2 card-body"
        style={{
          textDecoration: todo.Done ? "line-through" : "",
          color: todo.done ? "gray" : "",
        }}
        onClick={() => dispatch(doneTodo(todo._id))}
        >
        <Card.Title
          style={{ display: edit ? "none" : " " }}
          className="card-title"
          >
          <span>{todo.data}</span>
        </Card.Title>
       
        <form
          style={{ display: edit ? "inline" : "none" }}
          onSubmit={SubmitHandler}
          >
          <input
            type="text"
            value={text}
            className="edit-todo"
            onChange={(e) => settext(e.target.value)}
            />
        </form>

        <Card.Text className="c-text"></Card.Text>
      </Card.Body>
      </div>
      </div>
    </>
  );
};
export default Carding;
