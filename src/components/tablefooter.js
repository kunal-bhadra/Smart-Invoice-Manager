import React from "react";
import { Paper } from '@mui/material';
import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";


const StyledPaper = styled(Paper, {})({
    backgroundColor: "rgba(39,61,74,255)",
    color: "rgb(218,225,227)",
    fontSize: 12,
    margin: "auto",
    borderRadius: 1, 
    height: 69,
    width: '100%',
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
});


export default function TableFooter() {
    return (
        <Grid item xs={12}>
            <StyledPaper elevation={0}>
                © 2022 Highradius. All Rights Reserved.
            </StyledPaper>
        </Grid>
    )
}
