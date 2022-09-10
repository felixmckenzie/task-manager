import React from 'react'
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

export default function Form({task, handleSubmit, setTask}) {
 
const handleChange = (event) => {
    setTask(event.target.value)
}

    return (
   <form onSubmit={handleSubmit}>
    <TextField
      size="small"
      fullWidth
      type="text"
      value={task.text}
      onChange={handleChange}
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
  )
}
