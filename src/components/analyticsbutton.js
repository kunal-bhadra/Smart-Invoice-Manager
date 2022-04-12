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
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import {
    Chart as ChartJS,
    ArcElement,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
import CircularProgress from '@mui/material/CircularProgress';



ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });


const popupSx = {
    '& .MuiDialog-paper': {
        backgroundColor: "rgba(44,66,80,255)",
        color: "rgb(218,225,227)",
      },
}

const StyledDialogContentText = styled(DialogContentText, {})({
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



export default function AnalyticsView() {

    const [open, setOpen] = useState(false);
    const [openChart, setOpenChart] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [viewStartClearDate, setViewStartClearDate] = useState(new Date('2022-01-10'));
    const [viewStartDueDate, setViewStartDueDate] = useState(new Date('2022-01-10'));
    const [viewEndClearDate, setViewEndClearDate] = useState(new Date('2022-01-10'));
    const [viewEndDueDate, setViewEndDueDate] = useState(new Date('2022-01-10'));
    const [viewStartBaselineCreateDate, setViewStartBaselineCreateDate] = useState(new Date('2022-01-10'));
    const [viewEndBaselineCreateDate, setViewEndBaselineCreateDate] = useState(new Date('2022-01-10'));
    const [viewInvoiceCurrency, setViewInvoiceCurrency] = useState("");
    const [barDataChartJs, setbarDataChartJs] = useState({});
    const [PieDataChartJs, setPieDataChartJs] = useState({});


    const bar_options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'No. of Customers and Total Open Amount for every Business',
          },
        },
      };


    const handleClickOpen = () => {
        setOpen(true);
      };
    const handleClose = () => {
    setOpen(false);
    };
    const chartClickOpen = () => {
        setOpenChart(true);
    };
    const chartClickClose = () => {
        setOpenChart(false);
    };
      
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


    const sendChartData = async () => {

        setIsLoading(true);
        
        let bar_data = JSON.stringify({
            from_clear_date: dayjs(viewStartClearDate).format('YYYY-MM-DD'),
            to_clear_date: dayjs(viewEndClearDate).format('YYYY-MM-DD'),
            from_due_date: dayjs(viewStartDueDate).format('YYYY-MM-DD'),
            to_due_date: dayjs(viewEndDueDate).format('YYYY-MM-DD'),
            from_baseline_create_date: dayjs(viewStartBaselineCreateDate).format('YYYY-MM-DD'),
            to_baseline_create_date: dayjs(viewEndBaselineCreateDate).format('YYYY-MM-DD'),
            invoice_currency: viewInvoiceCurrency,
        });

        let pie_data = JSON.stringify({
            from_clear_date: dayjs(viewStartClearDate).format('YYYY-MM-DD'),
            to_clear_date: dayjs(viewEndClearDate).format('YYYY-MM-DD'),
            from_due_date: dayjs(viewStartDueDate).format('YYYY-MM-DD'),
            to_due_date: dayjs(viewEndDueDate).format('YYYY-MM-DD'),
            from_baseline_create_date: dayjs(viewStartBaselineCreateDate).format('YYYY-MM-DD'),
            to_baseline_create_date: dayjs(viewEndBaselineCreateDate).format('YYYY-MM-DD'),
        });


        await axios.post(
            "http://localhost:8080/h2h-backend/bardata",
            bar_data,
            {headers: {'Content-Type': 'application/json'}}
        ).then(res=>{
            const resData = res.data;
            const resSubstring = "[" + resData.substring(
                resData.indexOf("[") + 1, 
                resData.indexOf("]")
            ) + "]";
            const resJson = JSON.parse(resSubstring);  
            // console.log(typeof resJson, resJson);

            let labels = [];
            let barDataCust = [];
            let barDataAmount = [];
            for(let i = 0; i < resJson.length; i++){
                labels.push(resJson[i].business_name);
                barDataCust.push(resJson[i].num_of_customers);
                barDataAmount.push(resJson[i].sum_total_amount);
            }

            setbarDataChartJs({
                labels,
                datasets: [
                  {
                    label: 'No. of Customers',
                    data: barDataCust,
                    backgroundColor: '#1885a3',
                  },
                  {
                    label: 'Total Open Amount (in Thousands)',
                    data: barDataAmount,
                    backgroundColor: '#f3c567',
                  },
                ],
              });
              console.log("Bar Data: ", typeof barDataChartJs, barDataChartJs);

        }).catch(err=>{
            console.log("Error ", err);
        });


        await axios.post(
            "http://localhost:8080/h2h-backend/piedata",
            pie_data,
            {headers: {'Content-Type': 'application/json'}}
        ).then(res=>{
            const resPieData = res.data;
            const resPieSubstring = "[" + resPieData.substring(
                resPieData.indexOf("[") + 1, 
                resPieData.indexOf("]")
            ) + "]";
            const resPieJson = JSON.parse(resPieSubstring);  
            // console.log(typeof resPieJson, resPieJson);

            let pielabels = [];
            let pieDataCust = [];
            for(let i = 0; i < resPieJson.length; i++){
                pielabels.push(resPieJson[i].invoice_currency);
                pieDataCust.push(resPieJson[i].num_of_customers);
            }

            setPieDataChartJs({
                labels: pielabels,
                datasets: [
                    {
                    label: 'Invoice Currency Frequency',
                    data: pieDataCust,
                    backgroundColor: [
                        '#1885a3',
                        '#f3c567',
                    ]
                    }],
                })
                console.log("Pie Data: ", typeof PieDataChartJs, PieDataChartJs);
        
        }).catch(err=>{
            console.log("Error ", err);
        });
        
        setIsLoading(false);
        chartClickOpen();
    };

    
    
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
                    <StyledDialogContentText>
                            Clear Date
                        </StyledDialogContentText>
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
                                    label="From"
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
                        <StyledDialogContentText>
                            Due Date
                        </StyledDialogContentText>
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
                                    label="From"
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
                                    label="To"
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
                                    label="To"
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
                    <StyledDialogContentText >
                            Baseline Create Date
                        </StyledDialogContentText>
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
                                    label="From"
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
                        <StyledDialogContentText>
                            Invoice Currency
                        </StyledDialogContentText>
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
                                    label="To"
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
                <StyledBottomButton onClick={sendChartData}>
                    {isLoading===false && <Typography sx={{fontSize: 13, fontWeight: 'bold'}}>
                        Submit
                    </Typography>}
                    {isLoading===true && <Box sx={{ display: 'flex' }}>
                        <CircularProgress 
                            size={16.9}
                            sx={{color:"rgba(21,175,241,255)"}}
                        />
                    </Box>}
                </StyledBottomButton>
                {(Object.keys(PieDataChartJs).length !== 0) && <Dialog
                    fullScreen
                    open={openChart}
                    onClose={chartClickClose}
                    TransitionComponent={Transition}
                >
                    <AppBar 
                        sx={{ 
                            position: 'relative',
                            backgroundColor: "rgba(39,61,74,255)",
                            color: "rgb(218,225,227)",
                            }}>
                        <Toolbar>
                            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            Analytics View
                            </Typography>
                            <IconButton 
                            edge="start"
                            color="inherit"
                            onClick={chartClickClose}
                            aria-label="close"
                            >
                                <CloseIcon />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    <Grid container spacing={2}>
                        <Grid item xs={8} sx={{ pt: 2 }}>
                            <Bar options={bar_options} data={barDataChartJs}/>
                        </Grid>
                        <Grid item xs={4} sx={{ pt: 2 }}>
                            <Pie data={PieDataChartJs} />
                        </Grid>
                    </Grid> 
                </Dialog>}
                <StyledBottomButton onClick={handleClose}>Cancel</StyledBottomButton>
            </DialogActions>
        </Dialog>
        </div>
    );
}