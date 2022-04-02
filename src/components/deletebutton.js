import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { styled } from "@mui/system";


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
      }
});




export default function Delete() {
    const [open, setOpen] = React.useState(false);
    
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    
    return (
      <div>
        <StyledButton onClick={handleClickOpen}>
          Delete
        </StyledButton>
        <Dialog open={open} onClose={handleClose} sx={popupSx} fullWidth='true' maxWidth='sm'>
            <DialogTitle>Delete Records?</DialogTitle>
            <DialogContent>
                <DialogContentText sx={{color:"rgb(218,225,227)"}}>
                    Are you sure you want to delete these record[s]?
                </DialogContentText>
            </DialogContent>
            <DialogActions >
                <StyledBottomButton onClick={handleClose}>Delete</StyledBottomButton>
                <StyledBottomButton onClick={handleClose}>Cancel</StyledBottomButton>
            </DialogActions>
        </Dialog>
        </div>
    );
}