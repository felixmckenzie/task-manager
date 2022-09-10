import React, {useState, useReducer} from "react";
import reducer from '../utils/reducer'
import Title from "./Title";
import Form from "./Form";
import TaskList from "./TaskList";
import uniqid from "uniqid";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

const App = () => {
  
  const initialState = {
  task: {
            text: "",
            id: null,
            editStatus: false,
          },
  list: [],
  newText: ""
}

const [store, dispatch] = useReducer(reducer, initialState)
const {task,list, newText} = store


const setTask = (text) =>{
  dispatch({
    type: 'setTask',
    payload: text,
    
  })
  }

  const handleSubmit = (event) =>{
    event.preventDefault()
    dispatch({
      type: 'addTaskToList',
      payload: task,
    })

  }

   const removeTask = (id) =>{
   dispatch({
    type: 'deleteTask',
    payload: id
   })
 }

 const updateEditStatus = (id) =>{
 dispatch({
  type: 'updateEditStatus',
  payload: id
 })

 }

const updateTaskText = (text) => {
dispatch({
  type: 'updateTaskText',
  payload: text
})
}

const updateList = (event, id) => {
 event.preventDefault()
dispatch({
  type: 'updateList',
  payload: id
})
 }
  
  return (
    <>
    <Container maxWidth="sm" >
    <Title/>
   <Form task={task} setTask={setTask} handleSubmit={handleSubmit} />
   <TaskList list={list} removeTask={removeTask} updateEditStatus={updateEditStatus} updateTaskText={updateTaskText} updateList={updateList} newText={newText} /> 
   </Container>
    </>
  )
}

export default App;
