import React, { Component } from "react";
import Overview from "./Overview";
import uniqid from "uniqid";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import Box from "@mui/material/Box";

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: {
        text: "",
        id: null,
        editStatus: false,
      },
      newText: "",
      tasks: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  handleChange(event) {
    this.setState({
      task: { text: event.target.value, id: uniqid() },
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: { text: "" },
    });
  }

  removeTask(id) {
    this.setState((prevState) => {
      return { tasks: prevState.tasks.filter((task) => task.id !== id) };
    });
  }

  updateEditStatus = (id) => {
    this.setState((prevState) => {
      const updatedTasks = prevState.tasks.map((task) => {
        return task.id === id
          ? task.editStatus
            ? { ...task, editStatus: false }
            : { ...task, editStatus: true }
          : task;
      });
      return { tasks: updatedTasks };
    });
  };

  updateEditedTaskOnSubmit = (event, id) => {
    event.preventDefault();
    this.setState((prevState) =>{
      const editedTasks = prevState.tasks.map((task)=>{
       return task.id === id ? {text: this.state.newText, id: task.id ,editStatus:false} : task
      })
     return {tasks: editedTasks, newText: " "}
    })
   
  };

  updateTaskText = (event) => {
    this.setState({
      newText: event.target.value,
    })
  };

  render() {
    const { task, tasks, newText} = this.state;
    return (
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Grid container justifyContent="center">
            <Typography variant="h4" component="h1" gutterBottom>
              Enter a Task:
            </Typography>
          </Grid>
        </Box>
        <form onSubmit={this.handleSubmit}>
          <TextField
            size="small"
            fullWidth
            type="text"
            value={task.text}
            onChange={this.handleChange}
          />
          <Grid container justifyContent="flex-end">
            <Button
              sx={{ margin: 1 }}
              variant="contained"
              type="submit"
              value="submit"
            >
              {" "}
              Submit
            </Button>
          </Grid>
        </form>
        <Overview
          tasks={tasks}
          newText={newText}
          removeTask={this.removeTask}
          updateEditStatus={this.updateEditStatus}
          updateTaskText={this.updateTaskText}
          updateEditedTaskOnSubmit={this.updateEditedTaskOnSubmit}
        />
      </Container>
    );
  }
}

export default App;
