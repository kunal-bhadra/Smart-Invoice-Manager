import './App.css';
import { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from "@mui/material/Grid";
import DataTable from "./components/table";
import TableFooter from "./components/tablefooter";
import LeftButtonGroup from "./components/leftbutton";
import RightButtonGroup from "./components/rightbutton";
import SearchInput from "./components/searchfield";
import HRClogo from "./components/hrclogo"
import ABClogo from "./components/abclogo";



function App() {
  const [searchInput, setSearchInput] = useState("");
   
  const [advanceSearch, setAdvanceSearch] = useState(false);
  const [searchDocID, setSearchDocID] = useState(""); 
  const [searchInvoiceID, setSearchInvoiceID] = useState(""); 
  const [searchCustNum, setSearchCustNum] = useState(""); 
  const [searchBizzYear, setSearchBizzYear] = useState(""); 
  
  return (
    <div className="App">
      <Container maxWidth="false" disableGutters={true}>
        <Grid container spacing={0}>
          <ABClogo />
          <HRClogo />
        </Grid>
        <Grid container spacing={0}>
          <LeftButtonGroup 
            advanceSearch={advanceSearch}
            setAdvanceSearch={setAdvanceSearch}
            searchDocID={searchDocID}
            setSearchDocID={setSearchDocID}
            searchInvoiceID={searchInvoiceID}
            setSearchInvoiceID={setSearchInvoiceID}
            searchCustNum={searchCustNum}
            setSearchCustNum={setSearchCustNum}
            searchBizzYear={searchBizzYear}
            setSearchBizzYear={setSearchBizzYear}
          />
          <SearchInput 
            searchInput={searchInput} 
            setSearchInput={setSearchInput} 
          />
          <RightButtonGroup />
        </Grid>
        <Grid container spacing={0}>
          <DataTable 
            searchInput={searchInput} 
            advanceSearch={advanceSearch}
            searchDocID={searchDocID}
            searchInvoiceID={searchInvoiceID}
            searchCustNum={searchCustNum}
            searchBizzYear={searchBizzYear}
          />
          <TableFooter />
        </Grid>
      </Container>
    </div>
  );
}


export default App;
