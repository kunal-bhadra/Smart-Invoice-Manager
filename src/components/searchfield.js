import * as React from 'react';
import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";


export default function SearchInput({ searchInput, setSearchInput }) {

  return (
    <Grid item xs={3}>
        <Box mt={1.6}
            component="form"
            sx={{
                '& > :not(style)': { m: 1, width: '20ch', backgroundColor: "white", borderRadius: 1},
            }}
            noValidate
            autoComplete="off"
        >
        <TextField 
          placeholder="Search Customer ID" 
          variant="outlined" 
          size="small" 
          sx={{input: {textAlign: "left"}}} 
          onChange={(event) => {
            setSearchInput(event.target.value);
            console.log(searchInput);
          }}
        />
        </Box>
    </Grid>
  );
}
