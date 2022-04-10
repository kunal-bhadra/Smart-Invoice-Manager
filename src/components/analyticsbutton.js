import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContentText from '@mui/material/DialogContentText';
import Box from '@mui/material/Box';
import { styled } from "@mui/system";
import dayjs from 'dayjs';
import Grid from "@mui/material/Grid";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import axios from "axios";
import Alert from '@mui/material/Alert';


const popupSx = {
    '& .MuiDialog-paper': {
        backgroundColor: "rgba(44,66,80,255)",
        color: "rgb(218,225,227)",
      },
}


const dialogTextSx = {
    '& .MuiDialogContentText-root': {
        color: "rgb(218,225,227)",
    }
}


const styledDialogContentText = styled(DialogContentText, {})({
    color: "rgb(218,225,227)",
});


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



export default function AnalyticsView({
}) {
    const [open, setOpen] = useState(false);
    
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };


    const [viewStartClearDate, setViewStartClearDate] = useState(new Date('2022-01-10'));
    const [viewStartDueDate, setViewStartDueDate] = useState(new Date('2022-01-10'));
    const [viewEndClearDate, setViewEndClearDate] = useState(new Date('2022-01-10'));
    const [viewEndDueDate, setViewEndDueDate] = useState(new Date('2022-01-10'));
    const [viewStartBaselineCreateDate, setViewStartBaselineCreateDate] = useState(new Date('2022-01-10'));
    const [viewEndBaselineCreateDate, setViewEndBaselineCreateDate] = useState(new Date('2022-01-10'));
    const [viewInvoiceCurrency, setViewInvoiceCurrency] = useState("");



    const startViewClearDateChange = (newVSCDValue) => {
        setViewStartClearDate(newVSCDValue);
      };
    const startViewDueDateChange = (newVSDDValue) => {
        setViewStartDueDate(newVSDDValue);
    };
    const endViewClearDateChange = (newVECDValue) => {
        setViewEndClearDate(newVECDValue);
    };
    const endViewDueDateChange = (newVEDDValue) => {
        setViewEndDueDate(newVEDDValue);
    };
    const startViewBaselineCreateDateChange = (newVSCBCDValue) => {
        setViewStartBaselineCreateDate(newVSCBCDValue);
    };
    const endViewBaselineCreateDateChange = (newVECBCDValue) => {
        setViewEndBaselineCreateDate(newVECBCDValue);
    };




    // const editRecord = () => {
    //   let data = JSON.stringify({
    //       id: editID,
    //       invoice_currency: editInvoiceCurrency,
    //       cust_payment_terms: editCustPaymentTerms
    //       });
          
    //   axios.post(
    //       "http://localhost:8080/h2h-backend/edit",
    //       data,
    //       {headers:{"Content-Type" : "application/json"}}
    //       ).catch(function (error) {
    //           let e = error;
    //           if (error.response) {
    //               e = error.response.data;                   
    //               if (error.response.data && error.response.data.error) {
    //                   e = error.response.data.error;          
    //               }
    //           } else if (error.message) {
    //               e = error.message;
    //           } else {
    //               e = "Unknown error occured";
    //           }
    //           return e;
    //       });
      
    //       setOpen(false);
    // };


    
    return (
      <div>
        <StyledButton onClick={handleClickOpen} >
          Analytics View
        </StyledButton>
        <Dialog open={open} onClose={handleClose} sx={popupSx} fullWidth={true} maxWidth='sm'>
          <DialogTitle>Analytics View</DialogTitle>
          <DialogContent>
              <Grid container rowSpacing={0} columnSpacing={4}>
                  <Grid item xs={6}>
                    <styledDialogContentText>
                            Clear Date
                        </styledDialogContentText>
                    <Box 
                        mt={0}
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
                                    label="Start Date"
                                    inputFormat="MM/dd/yyyy"
                                    value={viewStartClearDate}
                                    onChange={startViewClearDateChange}
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
                    <Grid item xs={6}>
                        <styledDialogContentText>
                            Due Date
                        </styledDialogContentText>
                        <Box 
                        mt={0}
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
                                    label="Start Date"
                                    inputFormat="MM/dd/yyyy"
                                    value={viewStartDueDate}
                                    onChange={startViewDueDateChange}
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
                    <Grid item xs={6}>
                        <Box 
                        mt={0}
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
                                    label="End Date"
                                    inputFormat="MM/dd/yyyy"
                                    value={viewEndClearDate}
                                    onChange={endViewClearDateChange}
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
                    <Grid item xs={6}>
                        <Box 
                        mt={0}
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
                                    label="End Date"
                                    inputFormat="MM/dd/yyyy"
                                    value={viewEndDueDate}
                                    onChange={endViewDueDateChange}
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
                </Grid>
                <Grid container rowSpacing={0} columnSpacing={4}>
                    <Grid item xs={6} sx={{ pt: 2 }}>
                    <styledDialogContentText >
                            Baseline Create Date
                        </styledDialogContentText>
                    <Box 
                        mt={0}
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
                                    label="Start Date"
                                    inputFormat="MM/dd/yyyy"
                                    value={viewStartBaselineCreateDate}
                                    onChange={startViewBaselineCreateDateChange}
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
                    <Grid item xs={6} sx={{ pt: 2 }}>
                        <styledDialogContentText>
                            Invoice Currency
                        </styledDialogContentText>
                        <Box mt={0}
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
                                setViewInvoiceCurrency(event.target.value);
                            }}
                        />
                      </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box 
                        mt={0}
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
                                    label="End Date"
                                    inputFormat="MM/dd/yyyy"
                                    value={viewEndBaselineCreateDate}
                                    onChange={endViewBaselineCreateDateChange}
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
                </Grid>
            </DialogContent>
            <DialogActions >
                <StyledBottomButton onClick={handleClose}>Submit</StyledBottomButton>
                <StyledBottomButton onClick={handleClose}>Cancel</StyledBottomButton>
            </DialogActions>
        </Dialog>
        </div>
    );
}