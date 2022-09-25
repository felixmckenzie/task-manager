import React from "react";
import Item from "./Item";
import List from "@mui/material/List";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function TaskList({ list, ...allOtherProps }) {

  const getDate = () => {
    let currentDate = new Date();
    let dd = String(currentDate.getDate()).padStart(2, "0");
    let mm = String(currentDate.getMonth() + 1).padStart(2, "0"); 
    let yyyy = currentDate.getFullYear();
    let today = `${dd} ${mm} ${yyyy}`
    return today
  };

  return (
    <Grid container spacing={3} style={{ justifyContent: "center", marginTop: "20px" }}>
      <Grid item xs={4} style={{ paddingLeft: "0", paddingRight: "0" }}>
        <Typography variant="h5" align="center"noWrap sx={{ flex: 1 }} >
          Today <span style={{color: "grey", fontSize:"18px"}}>{getDate()}</span>
        </Typography>
        <List sx={{ padding: "10px", margin: "10px" }}>
          {list.map((task) => {
            return (
              <>
                <Item key={task.id} currentTask={task} props={allOtherProps} />
              </>
            );
          })}
        </List>
      </Grid>
    </Grid>
  );
}
