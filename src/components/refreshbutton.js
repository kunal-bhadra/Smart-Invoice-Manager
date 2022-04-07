import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import RefreshIcon from '@mui/icons-material/Refresh';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';


const iconSx = {
    height: '55%',
    width: '75%',
    backgroundColor: "rgba(39,61,74,255)",
    color: "rgba(21,175,241,255)",
    border: "1px solid rgba(21,175,241,255)",
    borderRadius: "15%",
    ':hover': {
        backgroundColor: 'rgba(21,175,241,255)',
        color: "rgb(218,225,227)",
      }
}


export default function RefreshButton() {
    return (
        <Grid item xs={0.5} mt={3.05} >
            <IconButton 
            aria-label="refresh" 
            size="small" 
            sx={iconSx}
            onClick={() => {
                window.location.reload();
            }}
            >
                <RefreshIcon sx={{fontSize: "18px"}}/>
            </IconButton>
        </Grid>
    );
  }
