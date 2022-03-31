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
  return (
    <div className="App">
      <Container maxWidth="false" disableGutters="true">
        <Grid container spacing={0}>
          <ABClogo />
          <HRClogo />
        </Grid>
        <Grid container spacing={0}>
          <LeftButtonGroup />
          <SearchInput searchInput={searchInput} setSearchInput={setSearchInput} />
          <RightButtonGroup />
        </Grid>
        <Grid container spacing={0}>
          <DataTable searchInput={searchInput} />
          <TableFooter />
        </Grid>
      </Container>
    </div>
  );
}


export default App;
