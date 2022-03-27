import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import whitelogo from "./hrc_logo.png"


export default function HRClogo() {
    return (
      <Grid item xs={7}>
          <Box mt={2} sx={{display: "flex", alignItems: "left"}} > 
            <img
                src = {whitelogo}
                alt=""
                className="img"
            />
          </Box>
      </Grid>
    );
  }