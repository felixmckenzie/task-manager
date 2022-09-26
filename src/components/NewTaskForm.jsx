import React, {useState} from 'react'
import uniqid from "uniqid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

export default function NewTaskForm({addTaskToList}) {
 
const initialFormState = {
    text: "",
    id: null,
    isEditing: null,
    status: null,
    created: null
}

const[formData, setFormData] = useState(initialFormState)

const handleChange = (event) => {
    const date = String(new Date())
    const newTask ={text: event.target.value, id: uniqid(), isEditing: false, status: "pending", created: date}
    console.log(newTask)
    setFormData(newTask)
}
const handleSubmit = (event) =>{
  event.preventDefault()
  addTaskToList(formData)
  setFormData(initialFormState)
}

    return (
   <form onSubmit={handleSubmit}>
    <TextField
      size="small"
      fullWidth
      type="text"
      value={formData.text}
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
