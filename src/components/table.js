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
    { field: 'id', headerName: 'Sl No', width: 60, align: "center", headerAlign: 'center' },
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


export default function DataTable({ 
  searchInput, 
  advanceSearch,
  searchDocID,
  searchInvoiceID,
  searchCustNum,
  searchBizzYear,
  setEditID,
  setDisableEdit
}) {
  const [pageSize, setPageSize] = React.useState(10);
  
  const [data, setData] = React.useState([]);
  useEffect(async () => {
    setData(await getData());
  }, [])

  // const rows = searchInput
  //   ? data.filter((data) => data.cust_number.toString().match(new RegExp("^" + searchInput, "gi")))
  //   : data;


  let rows=[]
  if (advanceSearch === true) {
    rows = data.filter((item) => {
      return (
        item.doc_id.toString().match(new RegExp("^" + searchDocID, "gi")) &&
        item.invoice_id.toString().match(new RegExp("^" + searchInvoiceID, "gi")) &&
        item.cust_number.toString().match(new RegExp("^" + searchCustNum, "gi")) &&
        item.buisness_year.toString().match(new RegExp("^" + searchBizzYear, "gi"))
      )
    });
  } else {
    rows = searchInput
      ? data.filter((item) => item.cust_number.toString().match(new RegExp("^" + searchInput, "gi")))
      : data;
  }
  

    return (
      <div style={{ width: '100%' }}>
        <DataGrid
            rows={rows}
            columns={columns}
            autoHeight={true}
            density='compact'
            rowHeight={40}
            headerHeight={80}
            disableColumnMenu={true}
            disableSelectionOnClick={true}
            sx={datagridSx}
            
            checkboxSelection={true}
            onSelectionModelChange={itm => {
              let idSet = new Set(itm)
              const [first] = idSet;
              setEditID(first);
              // console.log(setEditID);

              if (idSet.size === 0){
                setDisableEdit(true);
              } else {
                setDisableEdit(false);
              }
              // console.log(setDisableEdit);
            }}

            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[5, 10, 15]}
            pagination
        />
      </div>
    );
  }