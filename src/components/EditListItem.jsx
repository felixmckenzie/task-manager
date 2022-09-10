import React from 'react';
import ListItem from "@mui/material/ListItem";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


export default function EditListItem({currentTask, newText, updateTaskText, updateList}) {

    const handleNewText = (event) => {
      updateTaskText(event.target.value)
    }

  return (
    <ListItem>
        <form onSubmit={(event) => updateList(event, currentTask.id)}>
        <TextField size="small" fullWidth value={newText} onChange={handleNewText} />
        <Button sx={{margin: 1}}  variant="contained" type="submit" value="submit" > Submit</Button>
        </form>
    </ListItem>
  )
}




