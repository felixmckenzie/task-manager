import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Item({currentTask, props}) {
const {removeTask, updateEditStatus, newText, updateTaskText, updateList} = props
  
  
  const handleNewText = (event) => {
    updateTaskText(event.target.value);
  };

  const textComponent = (
    <ListItem
      sx={{ borderTop: "1px solid lightgrey",borderBottom: "1px solid lightgrey" ,borderRadius: "2", marginBottom: "8px", marginLeft:"auto", marginRight:"auto"}}
    >
      <ListItemText primary={currentTask.text} />
      <IconButton onClick={() => updateEditStatus(currentTask.id)}>
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
    <ListItem fullWidth>
      <form onSubmit={(event) => updateList(event, currentTask.id)}>
        <TextField
          size="small"
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
      </form>
    </ListItem>
  );

  return <>{currentTask.editStatus ? editingComponent : textComponent}</>;
}
