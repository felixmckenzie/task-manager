import React, { useState, useReducer } from "react";
import reducer from "../utils/reducer";
import Title from "./Title";
import Form from "./Form";
import TaskList from "./TaskList";
import uniqid from "uniqid";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider} from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#ff0266",
      light: "#ffddc1",
      dark: "#c97b63",
    },
    secondary: {
      main: "#ffde03",
      light: "#fffffb",
      dark: "#a69b967",
    },
  },
});

const App = () => {
  const initialState = {
    task: {
      text: "",
      id: null,
      editStatus: false,
    },
    list: [],
    newText: "",
  };

  const [store, dispatch] = useReducer(reducer, initialState);
  const { task, list, newText } = store;

  const setTask = (text) => {
    dispatch({
      type: "setTask",
      payload: text,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: "addTaskToList",
      payload: task,
    });
  };

  const removeTask = (id) => {
    dispatch({
      type: "deleteTask",
      payload: id,
    });
  };

  const updateEditStatus = (id) => {
    dispatch({
      type: "updateEditStatus",
      payload: id,
    });
  };

  const updateTaskText = (text) => {
    dispatch({
      type: "updateTaskText",
      payload: text,
    });
  };

  const updateList = (event, id) => {
    event.preventDefault();
    dispatch({
      type: "updateList",
      payload: id,
    });
  };

  return (
    <>
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm" sx={{backgroundColor: 'secondary.main', padding:'10px', marginTop:'20px'}}>
        <Title />
        <Form task={task} setTask={setTask} handleSubmit={handleSubmit} />
        <TaskList
          list={list}
          removeTask={removeTask}
          updateEditStatus={updateEditStatus}
          updateTaskText={updateTaskText}
          updateList={updateList}
          newText={newText}
        />
      </Container>
      </ThemeProvider>
    </>
  );
};

export default App;
