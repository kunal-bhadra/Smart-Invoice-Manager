import * as React from 'react';
import Button from '@mui/material/Button';
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


export default function RightButtonGroup({
    editID,
    disableEdit
}) {
    return (
        <Grid item xs={5}>
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