import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import RefreshIcon from '@mui/icons-material/Refresh';
import { styled } from '@mui/system';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';





const iconSx = {
    height: 30,
    width: 30,
    backgroundColor: "rgba(39,61,74,255)",
    color: "rgba(21,175,241,255)",
    border: "1px solid rgba(21,175,241,255)",
    borderRadius: "15%",
    ':hover': {
        backgroundColor: 'rgba(21,175,241,255)',
        color: "rgb(218,225,227)",
      },
    marginTop: "25px",
}


export default function RefreshButton({
    setIsStale,
    isStale
}) {
    const [loading, setLoading] = React.useState(true);

    return (
        <Grid item xs={0.5} backgroundColor="rgba(39,61,74,255)" >
            <IconButton 
            aria-label="refresh" 
            size="small" 
            sx={iconSx}
            onClick={() => {
                setIsStale(true);
            }}
            >
                {isStale===true && <Box sx={{ display: 'flex' }}>
                    <CircularProgress 
                        size={16.9}
                        sx={{color:"rgba(21,175,241,255)"}}
                    />
                </Box>}
                {isStale===false && <RefreshIcon sx={{fontSize: "18px"}}/>}
            </IconButton>
        </Grid>
    );
  }

