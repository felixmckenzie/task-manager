import React, {useReducer} from "react";
import reducer from "../utils/reducer";
import Title from "./Title";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import NavBar from "./NavBar";
import uniqid from "uniqid";
import Container from "@mui/material/Container";
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";
import { CustomThemeProvider} from "../utils/ThemeContext";
import Layout from "./Layout";

const App = () => {
  const initialState = {
    task: {
      text: "",
      id: null,
      editStatus: null,
    },
    list: [],
    newText: "",
  };

  const [store, dispatch] = useReducer(reducer, initialState);
  const { task, list, newText } = store;
  
  


  const setTask = (text) => {
   const task = {text: text, id: uniqid(), editStatus: false}
    dispatch({
      type: "setTask",
      payload: task,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: "addTaskToList",
      payload: task,
    });

    dispatch({
      type: "setTask",
      payload: initialState.task,
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
    
    <CustomThemeProvider>
    <Layout>
    <NavBar/>
    <Container maxWidth="sm" sx={{ padding:'10px', marginTop:'20px'}}>
        <Title />
     <NewTaskForm task={task} setTask={setTask} handleSubmit={handleSubmit} />
    </Container>
    <Grid container spacing={3} style={{justifyContent:"center", marginTop:"20px"}}  >
     <Grid item xs={4}  style={{paddingLeft:"0", paddingRight:"0", minHeight:"400px" }}  >
     <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >Today</Typography>
        <TaskList
          list={list}
          removeTask={removeTask}
          updateEditStatus={updateEditStatus}
          updateTaskText={updateTaskText}
          updateList={updateList}
          newText={newText}
        />
        </Grid>
       </Grid>
       </Layout>
       </CustomThemeProvider>
    
  );
};

export default App;
