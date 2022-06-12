import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
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
  const [errorMessage, setErrorMessage] = useState("");

  
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const checkAll = () => {
    if (addBizzCode !== "" && addCustNumber !== 0 && addClearDate !== "" && addBizzYear !== 0 && addDocId !== "" && addPostingDate !== "" && addDocCreateDate !== "" && addDueDate !== "" && addInvoiceCurrency !== "" && addDocType !== "" && addPostingId !== "" && addTotalOpenAmount !== "" && addBaselineCreateDate !== "" && addCustPaymentTerms !== "" && addInvoiceId !== "") {
        addRecord();
        setOpen(false);
    } else {
        setErrorMessage('All fields not provided')
    }
  }
 

  const [addBizzCode, setAddBizzCode] = useState("");
  const [addCustNumber, setAddCustNumber] = useState(0);
  const [addClearDate, setAddClearDate] = useState(new Date('2022-01-10'));
  const [addBizzYear, setAddBizzYear] = useState(0);
  const [addDocId, setAddDocId] = useState("");
  const [addPostingDate, setAddPostingDate] = useState(new Date('2022-01-10'));
  const [addDocCreateDate, setAddDocCreateDate] = useState(new Date('2022-01-10'));
  const [addDueDate, setAddDueDate] = useState(new Date('2022-01-10'));
  const [addInvoiceCurrency, setAddInvoiceCurrency] = useState("");
  const [addDocType, setAddDocType] = useState("");
  const [addPostingId, setAddPostingId] = useState("");
  const [addTotalOpenAmount, setAddTotalOpenAmount] = useState("");
  const [addBaselineCreateDate, setAddBaselineCreateDate] = useState(new Date('2022-01-10'));
  const [addCustPaymentTerms, setAddCustPaymentTerms] = useState("");
  const [addInvoiceId, setAddInvoiceId] = useState("");

  
  const clearDateChange = (newCDValue) => {
    setAddClearDate(newCDValue);
  };
  const postingDateChange = (newPDValue) => {
    setAddPostingDate(newPDValue);
  };
  const docCreateDateChange = (newDCDValue) => {
    setAddDocCreateDate(newDCDValue);
  };
  const dueDateChange = (newDDValue) => {
    setAddDueDate(newDDValue);
  };
  const baselineCreateDateChange = (newBCDValue) => {
    setAddBaselineCreateDate(newBCDValue);
  };
  

  const addRecord = () => {
    let data = JSON.stringify({
        business_code: addBizzCode,
        cust_number: addCustNumber,
        clear_date: dayjs(addClearDate).format('YYYY-MM-DD'),
        buisness_year: addBizzYear,
        doc_id: addDocId,
        posting_date: dayjs(addPostingDate).format('YYYY-MM-DD'),
        document_create_date: dayjs(addDocCreateDate).format('YYYY-MM-DD'),
        due_in_date: dayjs(addDueDate).format('YYYY-MM-DD'),
        invoice_currency: addInvoiceCurrency,
        document_type: addDocType,
        posting_id: addPostingId,
        total_open_amount: addTotalOpenAmount,
        baseline_create_date: dayjs(addBaselineCreateDate).format('YYYY-MM-DD'),
        cust_payment_terms: addCustPaymentTerms,
        invoice_id: addInvoiceId
        });
        
    axios.post(
        "http://localhost:8080/h2h-backend/insert",
        data,
        {headers:{"Content-Type" : "application/json"}}
        ).catch(err=>{
            console.log("Error ", err);
        });
    
        setOpen(false);
  };

  
  return (
    <div>
      <StyledButton onClick={handleClickOpen}>
        Add
      </StyledButton>
      <Dialog open={open} onClose={handleClose} sx={popupSx} fullWidth={true} maxWidth='xl'>
        <DialogTitle>Add</DialogTitle>
        {errorMessage && <Alert severity="warning">Please enter values in all fields to add this record!</Alert>}
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
                        setAddBizzCode(event.target.value);
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
                        setAddCustNumber(event.target.value);
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
                                value={addClearDate}
                                onChange={clearDateChange}
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
                            setAddBizzYear(event.target.value);
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
                            setAddDocId(event.target.value);
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
                                value={addPostingDate}
                                onChange={postingDateChange}
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
                                value={addDocCreateDate}
                                onChange={docCreateDateChange}
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
                                value={addDueDate}
                                onChange={dueDateChange}
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
                            setAddInvoiceCurrency(event.target.value);
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
                            setAddDocType(event.target.value);
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
                            setAddPostingId(event.target.value);
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
                            setAddTotalOpenAmount(event.target.value);
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
                                value={addBaselineCreateDate}
                                onChange={baselineCreateDateChange}
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
                            setAddCustPaymentTerms(event.target.value);
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
                            setAddInvoiceId(event.target.value);
                        }}
                        />
                    </Box>
                </Grid>
            </Grid>
        </DialogContent>
        <DialogActions >
            <StyledBottomButton onClick={checkAll}>Add</StyledBottomButton>
            <StyledBottomButton onClick={handleClose}>Cancel</StyledBottomButton>
        </DialogActions>
      </Dialog>
    </div>
  );
}