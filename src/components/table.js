import * as React from 'react';
import { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { getData } from '../services/data';


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
  "& .MuiToolbar-root": {
    color: "rgb(218,225,227)"
  },
  "& .MuiDataGrid-selectedRowCount": {
    color: "rgb(218,225,227)"
  }
};


const columns = [
    { field: 'id', headerName: 'Sl No', width: 45, align: "center", headerAlign: 'center' },
    { field: 'business_code', headerName: 'Business Code', width: 90, align: "center", headerAlign: 'center' },
    { field: 'cust_number', headerName: 'Customer Number', width: 90, align: "center", headerAlign: 'center' },
    { field: 'clear_date', headerName: 'Clear Date', width: 90, align: "center", headerAlign: 'center' },
    { field: 'buisness_year', headerName: 'Business Year', width: 90, align: "center", headerAlign: 'center' },
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


export default function DataTable({ searchInput }) {
  const [pageSize, setPageSize] = React.useState(10);
  
  const [data, setData] = React.useState([]);
  useEffect(async () => {
    setData(await getData());
  }, [])

  const rows = searchInput
    ? data.filter((data) => data.cust_number.toString().match(new RegExp("^" + searchInput, "gi")))
    : data;

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