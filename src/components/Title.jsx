import React from 'react'
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Title() {
  return (
    <Box sx={{ my: 4 }}>
          <Grid container justifyContent="center">
            <Typography variant="h4" component="h1" gutterBottom>
              ENTER A TASK:
            </Typography>
          </Grid>
        </Box>
  )
}
