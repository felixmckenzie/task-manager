import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Checkbox } from "@mui/material";

export default function Item({ currentTask, newText, dispatch }) {
  const handleNewText = (event) => {
    updateTaskText(event.target.value);
  };
  const removeTask = (id) => {
    dispatch({
      type: "deleteTask",
      payload: id,
    });
  };

  const updateIsEditing = (id) => {
    dispatch({
      type: "updateIsEditing",
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

  const completeTask = (id) => {
    dispatch({
      type: "completeTask",
      payload: id,
    });
  };

  const textComponent = (
    <ListItem
      sx={{
        borderTop: "1px solid lightgrey",
        borderBottom: "1px solid lightgrey",
        borderRadius: "2",
        marginBottom: "8px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Checkbox onClick={() => completeTask(currentTask.id)} />
      <ListItemText
        primary={currentTask.text}
        secondary={currentTask.completed ? "completed" : "pending"}
      />
      <IconButton onClick={() => updateIsEditing(currentTask.id)}>
        <EditIcon />
      </IconButton>
      <IconButton
        onClick={() => removeTask(currentTask.id)}
        edge="end"
        aria-label="delete"
      >
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );

  const editingComponent = (
    <ListItem>
      <form onSubmit={(event) => updateList(event, currentTask.id)}>
        <TextField
          size="large"
          fullWidth
          value={newText}
          onChange={handleNewText}
        />
        <Button
          sx={{ margin: 1 }}
          variant="contained"
          type="submit"
          value="submit"
        >
          {" "}
          Submit
        </Button>
        <Button
          sx={{ margin: 1 }}
          variant="contained"
          onClick={() => updateIsEditing(currentTask.id)}
        >
          Cancel
        </Button>
      </form>
    </ListItem>
  );

  return <>{currentTask.isEditing ? editingComponent : textComponent}</>;
}
