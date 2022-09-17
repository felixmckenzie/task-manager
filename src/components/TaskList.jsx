import React from "react";
import Item from "./Item";
import List from "@mui/material/List";

export default function TaskList({list, ...allOtherProps}) {
  return (
    <List sx={{padding: '10px', margin:'10px'}}>
      {list.map((task) => {
        return (
          <>
          <Item key={task.id} currentTask={task} props={allOtherProps}  />
          </>
        );
      })}
    </List>
  );
}

