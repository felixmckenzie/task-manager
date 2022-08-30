import React, {Component} from 'react';
import ListItem from "@mui/material/ListItem";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

class EditListItem extends Component{


    render(){
        const {currentTask , newText, updateTaskText,updateEditedTaskOnSubmit} = this.props
        return(
            <>
            <ListItem>
                <form onSubmit={(event)=> updateEditedTaskOnSubmit(event, currentTask.id)}>
                <TextField size="small" fullWidth value={newText} onChange={updateTaskText} />
                <Button sx={{margin: 1}}  variant="contained" type="submit" value="submit" > Submit</Button>
                </form>
                <Button sx={{margin: 1}}  variant="contained">Cancel</Button>
            </ListItem>
            </>
        )
    }
}

export default EditListItem