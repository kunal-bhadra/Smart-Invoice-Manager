import './App.css';
import { useState } from 'react';
import Container from '@mui/material/Container';
import Grid from "@mui/material/Grid";
import DataTable from "./components/table";
import TableFooter from "./components/tablefooter";
import LeftButtonGroup from "./components/leftbutton";
import RefreshButton from "./components/refreshbutton"
import RightButtonGroup from "./components/rightbutton";
import SearchInput from "./components/searchfield";
import HRClogo from "./components/hrclogo"
import ABClogo from "./components/abclogo";
import TableTitle from "./components/tabletitle"



function App() {

  const [searchInput, setSearchInput] = useState("");
   
  const [advanceSearch, setAdvanceSearch] = useState(false);
  const [searchDocID, setSearchDocID] = useState(""); 
  const [searchInvoiceID, setSearchInvoiceID] = useState(""); 
  const [searchCustNum, setSearchCustNum] = useState(""); 
  const [searchBizzYear, setSearchBizzYear] = useState(""); 

  const [editID, setEditID] = useState("");
  const [disableEdit, setDisableEdit] = useState(true);

  const [predDict, setPredDict] = useState("");

  const [isStale, setIsStale] = useState(true); 

   

  return (
    <div className="App">
      <Container maxWidth="false" disableGutters={true}>
        <Grid container spacing={0}>
          <ABClogo />
          <HRClogo />
          <TableTitle />
        </Grid>
        <Grid container spacing={0}>
          <LeftButtonGroup 
            setAdvanceSearch={setAdvanceSearch}
            searchDocID={searchDocID}
            setSearchDocID={setSearchDocID}
            searchInvoiceID={searchInvoiceID}
            setSearchInvoiceID={setSearchInvoiceID}
            searchCustNum={searchCustNum}
            setSearchCustNum={setSearchCustNum}
            searchBizzYear={searchBizzYear}
            setSearchBizzYear={setSearchBizzYear}
            disableEdit={disableEdit}
            predDict={predDict}
            setIsStale={setIsStale}
          />
          <RefreshButton 
            setIsStale={setIsStale}
            isStale={isStale}
          />
          <SearchInput 
            searchInput={searchInput} 
            setSearchInput={setSearchInput} 
          />
          <RightButtonGroup 
            editID={editID}
            disableEdit={disableEdit}
          />
        </Grid>
        <Grid container spacing={0}>
          <DataTable 
            searchInput={searchInput} 
            advanceSearch={advanceSearch}
            searchDocID={searchDocID}
            searchInvoiceID={searchInvoiceID}
            searchCustNum={searchCustNum}
            searchBizzYear={searchBizzYear}
            setEditID={setEditID}
            setDisableEdit={setDisableEdit}
            setPredDict={setPredDict}
            isStale={isStale}
            setIsStale={setIsStale}
          />
          <TableFooter />
        </Grid>
      </Container>
    </div>
  );
}


export default App;     