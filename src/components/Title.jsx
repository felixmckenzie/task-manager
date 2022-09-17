import React from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Title() {
  return (
    <Box sx={{ my: 4, display: "flex", justifyContent: "center" }} >
            <Typography variant="h4" component="h1" gutterBottom>
              ENTER TASK
            </Typography>
        </Box>
  )
}
