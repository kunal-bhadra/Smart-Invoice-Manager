import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { shadows } from '@mui/system';
import { createStyles, makeStyles } from '@mui/material';


const datagridSx = {
  '& .MuiDataGrid-columnHeaderTitle': {
    textOverflow: "clip",
    whiteSpace: "break-spaces",
    lineHeight: 1, 
  },
  "& .MuiDataGrid-columnHeaders": {
    backgroundColor: "rgba(39,61,74,255)",
    color: "rgb(218,225,227)",
    fontSize: 13
  },
  "& .MuiDataGrid-checkboxInput": {
    color: "rgb(218,225,227)",
  },
  "& .MuiDataGrid-virtualScrollerRenderZone": {
    "& .MuiDataGrid-row":{ 
      backgroundColor: "rgba(44,66,80,255)" ,
      color: "rgb(218,225,227)",
      fontSize: 12
    }
  },
  "& .MuiDataGrid-columnSeparator": {
    visibility: 'hidden'
  },
  "& .MuiDataGrid-footerContainer": {
    backgroundColor: "rgba(39,61,74,255)",
    boxShadow: 3,
    borderRadius: 1
  },
};


const columns = [
    { field: 'id', headerName: 'Sl No', width: 45, align: "center", headerAlign: 'center' },
    { field: 'business_code', headerName: 'Business Code', width: 90, align: "center", headerAlign: 'center' },
    { field: 'cust_number', headerName: 'Customer Number', width: 90, align: "center", headerAlign: 'center' },
    { field: 'clear_date', headerName: 'Clear Date', width: 90, align: "center", headerAlign: 'center' },
    { field: 'business_year', headerName: 'Business Year', width: 90, align: "center", headerAlign: 'center' },
    { field: 'doc_id', headerName: 'Document ID', width: 90, align: "center", headerAlign: 'center' },
    { field: 'posting_date', headerName: 'Posting Date', width: 90, align: "center", headerAlign: 'center' },
    { field: 'document_create_date', headerName: 'Document Create Date', width: 90, align: "center", headerAlign: 'center' },
    { field: 'due_in_date', headerName: 'Due Date', width: 90, align: "center", headerAlign: 'center' },
    { field: 'invoice_currency', headerName: 'Invoice Currency', width: 90, align: "center", headerAlign: 'center' },
    { field: 'document_type', headerName: 'Document Type', width: 90, align: "center", headerAlign: 'center' },
    { field: 'posting_id', headerName: 'Posting ID', width: 90, align: "center", headerAlign: 'center' },
    { field: 'total_open_amount', headerName: 'Total Open Amount', width: 90, align: "center", headerAlign: 'center' },
    { field: 'baseline_create_date', headerName: 'Baseline Create Date', width: 90, align: "center", headerAlign: 'center' },
    { field: 'cust_payment_terms', headerName: 'Customer Payment Terms', width: 90, align: "center", headerAlign: 'center' },
    { field: 'invoice_id', headerName: 'Invoice ID', width: 90, align: "center", headerAlign: 'center' },
];


const rows = [
    { id: 1, business_code: 'U001', cust_number: 200769623, clear_date: '2020-02-11', business_year: 2020, doc_id: 1930438491, 
    posting_date: '2020-01-26', document_create_date: '2020-01-25', due_in_date: '2020-02-10', invoice_currency: 'USD', document_type: 'RV',
    posting_id: 1, total_open_amount: 54273.28, baseline_create_date: '2020-01-26', cust_payment_terms: 'NAH4', invoice_id: 1930438491 },
    { id: 2, business_code: 'U001', cust_number: 200769623, clear_date: '2020-02-11', business_year: 2020, doc_id: 1930438491, 
    posting_date: '2020-01-26', document_create_date: '2020-01-25', due_in_date: '2020-02-10', invoice_currency: 'USD', document_type: 'RV',
    posting_id: 1, total_open_amount: 54273.28, baseline_create_date: '2020-01-26', cust_payment_terms: 'NAH4', invoice_id: 1930438491 },
    { id: 3, business_code: 'U001', cust_number: 200769623, clear_date: '2020-02-11', business_year: 2020, doc_id: 1930438491, 
    posting_date: '2020-01-26', document_create_date: '2020-01-25', due_in_date: '2020-02-10', invoice_currency: 'USD', document_type: 'RV',
    posting_id: 1, total_open_amount: 54273.28, baseline_create_date: '2020-01-26', cust_payment_terms: 'NAH4', invoice_id: 1930438491 },
    { id: 4, business_code: 'U001', cust_number: 200769623, clear_date: '2020-02-11', business_year: 2020, doc_id: 1930438491, 
    posting_date: '2020-01-26', document_create_date: '2020-01-25', due_in_date: '2020-02-10', invoice_currency: 'USD', document_type: 'RV',
    posting_id: 1, total_open_amount: 54273.28, baseline_create_date: '2020-01-26', cust_payment_terms: 'NAH4', invoice_id: 1930438491 },
    { id: 5, business_code: 'U001', cust_number: 200769623, clear_date: '2020-02-11', business_year: 2020, doc_id: 1930438491, 
    posting_date: '2020-01-26', document_create_date: '2020-01-25', due_in_date: '2020-02-10', invoice_currency: 'USD', document_type: 'RV',
    posting_id: 1, total_open_amount: 54273.28, baseline_create_date: '2020-01-26', cust_payment_terms: 'NAH4', invoice_id: 1930438491 },
    { id: 6, business_code: 'U001', cust_number: 200769623, clear_date: '2020-02-11', business_year: 2020, doc_id: 1930438491, 
    posting_date: '2020-01-26', document_create_date: '2020-01-25', due_in_date: '2020-02-10', invoice_currency: 'USD', document_type: 'RV',
    posting_id: 1, total_open_amount: 54273.28, baseline_create_date: '2020-01-26', cust_payment_terms: 'NAH4', invoice_id: 1930438491 },
    { id: 7, business_code: 'U001', cust_number: 200769623, clear_date: '2020-02-11', business_year: 2020, doc_id: 1930438491, 
    posting_date: '2020-01-26', document_create_date: '2020-01-25', due_in_date: '2020-02-10', invoice_currency: 'USD', document_type: 'RV',
    posting_id: 1, total_open_amount: 54273.28, baseline_create_date: '2020-01-26', cust_payment_terms: 'NAH4', invoice_id: 1930438491 },
    { id: 8, business_code: 'U001', cust_number: 200769623, clear_date: '2020-02-11', business_year: 2020, doc_id: 1930438491, 
    posting_date: '2020-01-26', document_create_date: '2020-01-25', due_in_date: '2020-02-10', invoice_currency: 'USD', document_type: 'RV',
    posting_id: 1, total_open_amount: 54273.28, baseline_create_date: '2020-01-26', cust_payment_terms: 'NAH4', invoice_id: 1930438491 },
    { id: 9, business_code: 'U001', cust_number: 200769623, clear_date: '2020-02-11', business_year: 2020, doc_id: 1930438491, 
    posting_date: '2020-01-26', document_create_date: '2020-01-25', due_in_date: '2020-02-10', invoice_currency: 'USD', document_type: 'RV',
    posting_id: 1, total_open_amount: 54273.28, baseline_create_date: '2020-01-26', cust_payment_terms: 'NAH4', invoice_id: 1930438491 },
    { id: 10, business_code: 'U001', cust_number: 200769623, clear_date: '2020-02-11', business_year: 2020, doc_id: 1930438491, 
    posting_date: '2020-01-26', document_create_date: '2020-01-25', due_in_date: '2020-02-10', invoice_currency: 'USD', document_type: 'RV',
    posting_id: 1, total_open_amount: 54273.28, baseline_create_date: '2020-01-26', cust_payment_terms: 'NAH4', invoice_id: 1930438491 },
    { id: 11, business_code: 'U001', cust_number: 200769623, clear_date: '2020-02-11', business_year: 2020, doc_id: 1930438491, 
    posting_date: '2020-01-26', document_create_date: '2020-01-25', due_in_date: '2020-02-10', invoice_currency: 'USD', document_type: 'RV',
    posting_id: 1, total_open_amount: 54273.28, baseline_create_date: '2020-01-26', cust_payment_terms: 'NAH4', invoice_id: 1930438491 },
    { id: 12, business_code: 'U001', cust_number: 200769623, clear_date: '2020-02-11', business_year: 2020, doc_id: 1930438491, 
    posting_date: '2020-01-26', document_create_date: '2020-01-25', due_in_date: '2020-02-10', invoice_currency: 'USD', document_type: 'RV',
    posting_id: 1, total_open_amount: 54273.28, baseline_create_date: '2020-01-26', cust_payment_terms: 'NAH4', invoice_id: 1930438491 },
    { id: 13, business_code: 'U001', cust_number: 200769623, clear_date: '2020-02-11', business_year: 2020, doc_id: 1930438491, 
    posting_date: '2020-01-26', document_create_date: '2020-01-25', due_in_date: '2020-02-10', invoice_currency: 'USD', document_type: 'RV',
    posting_id: 1, total_open_amount: 54273.28, baseline_create_date: '2020-01-26', cust_payment_terms: 'NAH4', invoice_id: 1930438491 },
    { id: 14, business_code: 'U001', cust_number: 200769623, clear_date: '2020-02-11', business_year: 2020, doc_id: 1930438491, 
    posting_date: '2020-01-26', document_create_date: '2020-01-25', due_in_date: '2020-02-10', invoice_currency: 'USD', document_type: 'RV',
    posting_id: 1, total_open_amount: 54273.28, baseline_create_date: '2020-01-26', cust_payment_terms: 'NAH4', invoice_id: 1930438491 },
    { id: 15, business_code: 'U001', cust_number: 200769623, clear_date: '2020-02-11', business_year: 2020, doc_id: 1930438491, 
    posting_date: '2020-01-26', document_create_date: '2020-01-25', due_in_date: '2020-02-10', invoice_currency: 'USD', document_type: 'RV',
    posting_id: 1, total_open_amount: 54273.28, baseline_create_date: '2020-01-26', cust_payment_terms: 'NAH4', invoice_id: 1930438491 },
];


export default function DataTable() {
  const [pageSize, setPageSize] = React.useState(10);
  
    return (
      <div style={{ width: '100%' }}>
        <DataGrid
            rows={rows} 
            columns={columns}
            checkboxSelection={true}
            autoHeight={true}
            density='compact'
            rowHeight='40'
            headerHeight={80}
            disableColumnMenu={true}
            disableSelectionOnClick={true}
            sx={datagridSx}

            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[5, 10, 15]}
            pagination
        />
      </div>
    );
  }