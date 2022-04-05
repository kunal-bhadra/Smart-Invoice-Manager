import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import { styled } from "@mui/system";
import Grid from "@mui/material/Grid";


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
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    height: 30,
    width: 150,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    ':hover': {
        backgroundColor: 'rgba(21,175,241,255)',
      }
});


export default function Edit() {
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
          Edit
        </StyledButton>
        <Dialog open={open} onClose={handleClose} sx={popupSx} fullWidth={true} maxWidth='sm'>
          <DialogTitle>Edit</DialogTitle>
          <DialogContent>
              <Grid container rowSpacing={0} columnSpacing={4}>
                  <Grid item xs={6}>
                      <Box mt={1.6}
                          component="form"
                          sx={{
                              '& > :not(style)': { 
                                  m: 1, 
                                  width: '27ch', 
                                  backgroundColor: "white", 
                                  borderRadius: 1},
                          }}
                          noValidate
                          autoComplete="off"
                        >
                        <TextField 
                            placeholder="Invoice Currency" 
                            variant="outlined" 
                            size="small" 
                            sx={{input: {textAlign: "left"}}} 
                            onChange={(event) => {
                                // setSearchDocID(event.target.value);
                            }}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                      <Box mt={1.6}
                          component="form"
                          sx={{
                              '& > :not(style)': { 
                                  m: 1, 
                                  width: '27ch', 
                                  backgroundColor: "white", 
                                  borderRadius: 1},
                          }}
                          noValidate
                          autoComplete="off"
                        >
                        <TextField 
                            placeholder="Customer Payment Terms" 
                            variant="outlined" 
                            size="small" 
                            sx={{input: {textAlign: "left"}}} 
                            onChange={(event) => {
                                // setSearchDocID(event.target.value);
                            }}
                        />
                      </Box>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions >
                <StyledBottomButton onClick={handleClose}>Edit</StyledBottomButton>
                <StyledBottomButton onClick={handleClose}>Cancel</StyledBottomButton>
            </DialogActions>
        </Dialog>
        </div>
    );
}