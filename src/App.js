import './App.css';
import Container from '@mui/material/Container';
import Grid from "@mui/material/Grid";
import DataTable from "./components/table";
import TableFooter from "./components/tablefooter";
import LeftButtonGroup from "./components/leftbutton";
import RightButtonGroup from "./components/rightbutton";
import SearchInput from "./components/searchfield";


function App() {
  return (
    <div className="App">
      <Container maxWidth="false" disableGutters="true">
        <Grid container spacing={0}>
          <LeftButtonGroup />
          <SearchInput />
          <RightButtonGroup />
        </Grid>
        <Grid container spacing={0}>
          <DataTable />
          <TableFooter />
        </Grid>
      </Container>
    </div>
  );
}


export default App;
