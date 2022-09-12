import React from "react";
import ListItems from "./ListItem";
import List from "@mui/material/List";
import EditListItem from "./EditListItem";

export default function TaskList({list, removeTask, updateEditStatus, newText, updateTaskText, updateList}) {
  return (
    <List sx={{padding: '10px', margin:'10px'}}>
      {list.map((task) => {
        return (
          <>
          {task.editStatus ? 
          (
            <EditListItem currentTask={task} newText={newText} updateTaskText={updateTaskText} updateList={updateList} />
          ) :
        (
          <ListItems key={task.id} task={task} removeTask={removeTask} updateEditStatus={updateEditStatus} />
        )
        }
          </>
        );
      })}
    </List>
  );
}

