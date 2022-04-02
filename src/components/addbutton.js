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
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';


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
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 10,
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



export default function Add() {
  const [open, setOpen] = React.useState(false);
  

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [value, setValue] = React.useState(new Date('2022-01-10T21:11:54'));

  const handleChange = (newValue) => {
    setValue(newValue);
  };
  
  return (
    <div>
      <StyledButton onClick={handleClickOpen}>
        Add
      </StyledButton>
      <Dialog open={open} onClose={handleClose} sx={popupSx} fullWidth='true' maxWidth='xl'>
        <DialogTitle>Add</DialogTitle>
        <DialogContent>
            <Grid container rowSpacing={0} columnSpacing={4.5}>
                <Grid item xs={3}>
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
                    placeholder="Business Code" 
                    variant="outlined" 
                    size="small" 
                    sx={{input: {textAlign: "left"}}} 
                    onChange={(event) => {
                        // setSearchDocID(event.target.value);
                    }}
                    />
                    </Box>
                </Grid>
                <Grid item xs={3}>
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
                    placeholder="Customer Number" 
                    variant="outlined" 
                    size="small" 
                    sx={{input: {textAlign: "left"}}} 
                    onChange={(event) => {
                        // setSearchInvoiceID(event.target.value);
                    }}
                    />
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <Box 
                    mt={1.6}
                    component="form"
                    sx={{
                        '& > :not(style)': { 
                            m: 1, 
                            width: '27ch', 
                            height: 40,
                            backgroundColor: "white", 
                            borderRadius: 1,
                        },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DesktopDatePicker
                                label="Clear Date"
                                inputFormat="MM/dd/yyyy"
                                value={value}
                                onChange={handleChange}
                                InputProps={{
                                    disableUnderline: true
                                  }}
                                renderInput={(params) => 
                                <TextField 
                                    {...params} 
                                    variant="standard"
                                    size="small"
                                    sx={{ 
                                        px: 2, 
                                    }}
                                />
                                }   
                            />
                        </LocalizationProvider>
                    </Box>
                </Grid>
                <Grid item xs={3}>
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
                        placeholder="Business Year" 
                        size="small"
                        variant="outlined" 
                        sx={{
                            input: {textAlign: "left"}}} 
                        onChange={(event) => {
                            // setSearchBizzYear(event.target.value);
                        }}
                        />
                    </Box>
                </Grid>
                <Grid item xs={3}>
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
                        placeholder="Document ID" 
                        size="small"
                        variant="outlined" 
                        sx={{
                            input: {textAlign: "left"}}} 
                        onChange={(event) => {
                            // setSearchBizzYear(event.target.value);
                        }}
                        />
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <Box 
                    mt={1.6}
                    component="form"
                    sx={{
                        '& > :not(style)': { 
                            m: 1, 
                            width: '27ch', 
                            height: 40,
                            backgroundColor: "white", 
                            borderRadius: 1,
                        },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DesktopDatePicker
                                label="Posting Date"
                                inputFormat="MM/dd/yyyy"
                                value={value}
                                onChange={handleChange}
                                InputProps={{
                                    disableUnderline: true
                                  }}
                                renderInput={(params) => 
                                <TextField 
                                    {...params} 
                                    variant="standard"
                                    size="small"
                                    sx={{ 
                                        px: 2, 
                                    }}
                                />
                                }   
                            />
                        </LocalizationProvider>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <Box 
                    mt={1.6}
                    component="form"
                    sx={{
                        '& > :not(style)': { 
                            m: 1, 
                            width: '27ch', 
                            height: 40,
                            backgroundColor: "white", 
                            borderRadius: 1,
                        },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DesktopDatePicker
                                label="Document Create Date"
                                inputFormat="MM/dd/yyyy"
                                value={value}
                                onChange={handleChange}
                                InputProps={{
                                    disableUnderline: true
                                  }}
                                renderInput={(params) => 
                                <TextField 
                                    {...params} 
                                    variant="standard"
                                    size="small"
                                    sx={{ 
                                        px: 2, 
                                    }}
                                />
                                }   
                            />
                        </LocalizationProvider>
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <Box 
                    mt={1.6}
                    component="form"
                    sx={{
                        '& > :not(style)': { 
                            m: 1, 
                            width: '27ch', 
                            height: 40,
                            backgroundColor: "white", 
                            borderRadius: 1,
                        },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DesktopDatePicker
                                label="Due Date"
                                inputFormat="MM/dd/yyyy"
                                value={value}
                                onChange={handleChange}
                                InputProps={{
                                    disableUnderline: true
                                  }}
                                renderInput={(params) => 
                                <TextField 
                                    {...params} 
                                    variant="standard"
                                    size="small"
                                    sx={{ 
                                        px: 2, 
                                    }}
                                />
                                }   
                            />
                        </LocalizationProvider>
                    </Box>
                </Grid>
                <Grid item xs={3}>
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
                        size="small"
                        variant="outlined" 
                        sx={{
                            input: {textAlign: "left"}}} 
                        onChange={(event) => {
                            // setSearchBizzYear(event.target.value);
                        }}
                        />
                    </Box>
                </Grid>
                <Grid item xs={3}>
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
                        placeholder="Document Type" 
                        size="small"
                        variant="outlined" 
                        sx={{
                            input: {textAlign: "left"}}} 
                        onChange={(event) => {
                            // setSearchBizzYear(event.target.value);
                        }}
                        />
                    </Box>
                </Grid>
                <Grid item xs={3}>
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
                        placeholder="Posting ID" 
                        size="small"
                        variant="outlined" 
                        sx={{
                            input: {textAlign: "left"}}} 
                        onChange={(event) => {
                            // setSearchBizzYear(event.target.value);
                        }}
                        />
                    </Box>
                </Grid>
                <Grid item xs={3}>
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
                        placeholder="Total Open Amount" 
                        size="small"
                        variant="outlined" 
                        sx={{
                            input: {textAlign: "left"}}} 
                        onChange={(event) => {
                            // setSearchBizzYear(event.target.value);
                        }}
                        />
                    </Box>
                </Grid>
                <Grid item xs={3}>
                    <Box 
                    mt={1.6}
                    component="form"
                    sx={{
                        '& > :not(style)': { 
                            m: 1, 
                            width: '27ch', 
                            height: 40,
                            backgroundColor: "white", 
                            borderRadius: 1,
                        },
                    }}
                    noValidate
                    autoComplete="off"
                    >
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DesktopDatePicker
                                label="Baseline Create Date"
                                inputFormat="MM/dd/yyyy"
                                value={value}
                                onChange={handleChange}
                                InputProps={{
                                    disableUnderline: true
                                  }}
                                renderInput={(params) => 
                                <TextField 
                                    {...params} 
                                    variant="standard"
                                    size="small"
                                    sx={{ 
                                        px: 2, 
                                    }}
                                />
                                }   
                            />
                        </LocalizationProvider>
                    </Box>
                </Grid>
                <Grid item xs={3}>
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
                        size="small"
                        variant="outlined" 
                        sx={{
                            input: {textAlign: "left"}}} 
                        onChange={(event) => {
                            // setSearchBizzYear(event.target.value);
                        }}
                        />
                    </Box>
                </Grid>
                <Grid item xs={3}>
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
                        placeholder="Invoice ID" 
                        size="small"
                        variant="outlined" 
                        sx={{
                            input: {textAlign: "left"}}} 
                        onChange={(event) => {
                            // setSearchBizzYear(event.target.value);
                        }}
                        />
                    </Box>
                </Grid>
            </Grid>
        </DialogContent>
        <DialogActions >
            <StyledBottomButton onClick={handleClose}>Add</StyledBottomButton>
            <StyledBottomButton onClick={handleClose}>Cancel</StyledBottomButton>
        </DialogActions>
      </Dialog>
    </div>
  );
}
