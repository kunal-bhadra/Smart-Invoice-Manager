import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { styled } from "@mui/system";
import axios from "axios";



const popupSx = {
    '& .MuiDialog-paper': {
        backgroundColor: "rgba(44,66,80,255)",
        color: "rgb(218,225,227)",
      },
}

const StyledBottomButton = styled(Button, {})({
    color: "rgb(218,225,227)",
    borderColor: "rgb(218,225,227)",
    fontSize: 13,
    margin: 0,
    borderRadius: 5, 
    height: 37.5,
    width: '100%',
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
});

const StyledButton = styled(Button, {})({
    backgroundColor: "rgba(39,61,74,255)",
    color: "rgb(218,225,227)",
    borderColor: "rgba(21,175,241,255)",
    fontSize: 13,
    margin: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 10,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 10,
    height: 30,
    width: 150,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    ':hover': {
        backgroundColor: 'rgba(21,175,241,255)',
      },
      ':disabled': {
        color: "rgb(218,225,227)",
      }
});



export default function Delete({
    editID,
    disableEdit,
}) {

    const [open, setOpen] = React.useState(false);
    
  
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };


    const deleteRecord = () => {

      let data = JSON.stringify({
          id: editID,
          });
          
      axios.post(
          "http://localhost:8080/h2h-backend/delete",
          data,
          {headers:{"Content-Type" : "application/json"}}
          ).catch(err=>{
            console.log("Error ", err);
        });

          setOpen(false);
    };

    

    return (
      <div>
        <StyledButton disabled={disableEdit} onClick={handleClickOpen}>
          Delete
        </StyledButton>
        <Dialog open={open} onClose={handleClose} sx={popupSx} fullWidth={true} maxWidth='sm'>
            <DialogTitle>Delete Record?</DialogTitle>
            <DialogContent>
                <DialogContentText sx={{color:"rgb(218,225,227)"}}>
                    Are you sure you want to delete this record?
                </DialogContentText>
            </DialogContent>
            <DialogActions >
                <StyledBottomButton onClick={deleteRecord}>Delete</StyledBottomButton>
                <StyledBottomButton onClick={handleClose}>Cancel</StyledBottomButton>
            </DialogActions>
        </Dialog>
        </div>
    );
}