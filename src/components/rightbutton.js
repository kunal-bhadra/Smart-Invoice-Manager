import * as React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";
import Add from "./addbutton";
import Edit from "./editbutton";
import Delete from "./deletebutton";



const StyledButtonGroup = styled(ButtonGroup, {})({
    height: 80,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
});



export default function RightButtonGroup({
    editID,
    disableEdit
}) {

    return (
        <Grid item xs={5} backgroundColor="rgba(39,61,74,255)">
            <StyledButtonGroup variant="outlined" >
                <Add />
                <Edit 
                    editID={editID}
                    disableEdit={disableEdit}
                />
                <Delete 
                    editID={editID}
                    disableEdit={disableEdit}
                />
            </StyledButtonGroup>
        </Grid>
    );
  }