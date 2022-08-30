import React, { Component } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Checkbox from "@mui/material/Checkbox";
import ListItem from "@mui/material/ListItem";

class ListItems extends Component {
  

  render() {
    const {task, updateEditStatus, removeTask} = this.props
    return (
        <ListItem key={task.id}>
              <ListItemAvatar>
                <Checkbox />
              </ListItemAvatar>
              <ListItemText primary={task.text} />
              <IconButton onClick={() => updateEditStatus(task.id)}>
                <EditIcon />
              </IconButton>
              <IconButton
                onClick={() => removeTask(task.id)}
                edge="end"
                aria-label="delete"
              >
                <DeleteIcon />
              </IconButton>
            </ListItem>
    );
  }
}

export default ListItems;
