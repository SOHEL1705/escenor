import axios from "axios";
import {
  ADD_TODO,
  GET_ALL_TODO,
  TOGGLE_DONE_TODO,
  EDIT_TODO,
  DELETE_TODO,
} from "./types";
const HOST = "http://localhost:8000";

export const addnewTodoitem = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${HOST}/todos`, { data });

    dispatch({ type: ADD_TODO, payload: res.data });
  } catch (error) {
    console.log("Error while calling addNewTodo API ", error.message);
  }
};

export const getallTodoitem = () => async (dispatch) => {
  try {
    const res = await axios.get(`${HOST}/todos`);

    dispatch({ type: GET_ALL_TODO, payload: res.data });
  } catch (error) {
    console.log("Error while calling getAllTodos API ", error.message);
  }
};

export const doneTodo = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`${HOST}/todos/${id}`);

    dispatch({ type: TOGGLE_DONE_TODO, payload: res.data });
  } catch (error) {
    console.log("Error while calling getAllTodos API ", error.message);
  }
};

export const UpdateTodo = (id, data) => async (dispatch) => {
  try {
    const res = await axios.put(`${HOST}/todos/${id}`, { data });

    dispatch({ type: EDIT_TODO, payload: res.data });
  } catch (error) {
    console.log("Error while calling updateTodo API ", error.message);
  }
};
export const DeleteTodo = (id) => async (dispatch) => {
  try {
    const res = await axios.delete(`${HOST}/todos/${id}`);

    dispatch({ type: DELETE_TODO, payload: res.data });
  } catch (error) {
    console.log("Error while calling deleteTodo API ", error.message);
  }
};
