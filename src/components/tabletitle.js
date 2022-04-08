import React from "react";
import { Paper } from '@mui/material';
import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";


const StyledPaper = styled(Paper, {})({
    backgroundColor: "#2c4250",
    color: "rgb(218,225,227)",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 25,
    marginTop: 4,
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "left"
});


export default function TableTitle() {
    return (
        <Grid item xs={12}>
            <StyledPaper elevation={0}>
                Invoice List
            </StyledPaper>
        </Grid>
    )
}