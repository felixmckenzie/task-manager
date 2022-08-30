import React, { Component } from "react";
import ListItems from "./LIstItem";
import List from "@mui/material/List";
import EditListItem from "./EditListItem";

class Overview extends Component {
  render() {
    const { tasks, newText,removeTask, updateEditStatus, updateTaskText, updateEditedTaskOnSubmit } = this.props;
    return (
      <List>
        {tasks.map((task) => {
          return (
            <>
            {task.editStatus ? (
             <EditListItem  newText={newText} currentTask={task} updateTaskText={updateTaskText} updateEditedTaskOnSubmit={updateEditedTaskOnSubmit} />
            ):
            (
              <ListItems
              key={task.id}
              task={task}
              removeTask={removeTask}
              updateEditStatus={updateEditStatus}
            />
            )
            }
            </>
          );
        })}
      </List>
    );
  }
}

export default Overview;
