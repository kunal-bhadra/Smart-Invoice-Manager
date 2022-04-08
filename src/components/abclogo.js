import * as React from 'react';
import Grid from "@mui/material/Grid";
import abclogo from "./abc-logo.png"
import Box from '@mui/material/Box';


export default function ABClogo() {
    return (
      <Grid item xs>
          <Box ml={3} mt={1.3} sx={{display: "flex", alignItems: "left"}} > 
            <img
                src = {abclogo}
                alt=""
                className="img"
            />
          </Box>
      </Grid>
    );
  }