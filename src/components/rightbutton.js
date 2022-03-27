import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";


const StyledButtonGroup = styled(ButtonGroup, {})({
    height: 80,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
});


const StyledButton = styled(Button, {})({
    backgroundColor: "rgba(39,61,74,255)",
    color: "rgb(218,225,227)",
    borderColor: "rgba(21,175,241,255)",
    fontSize: 13,
    margin: 0,
    borderRadius: 10, 
    height: 30,
    width: 150,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    ':hover': {
        backgroundColor: 'rgba(21,175,241,255)',
      }
});


export default function RightButtonGroup() {
    return (
        <Grid item xs={4.5}>
            <StyledButtonGroup variant="outlined" >
                <StyledButton>Add</StyledButton>
                <StyledButton>Edit</StyledButton>
                <StyledButton>Delete</StyledButton>
            </StyledButtonGroup>
        </Grid>
    );
  }