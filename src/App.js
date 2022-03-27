import './App.css';
import Container from '@mui/material/Container';

import DataTable from "./components/realtable";
import TableFooter from "./components/tablefooter";
import Grid from "@mui/material/Grid";

function App() {
  return (
    <div className="App">
      <Container maxWidth="false" disableGutters="true">
        <Grid container spacing={1}>
          <DataTable />
        </Grid>
        <Grid>
          <TableFooter />
        </Grid>
      </Container>
    </div>
  );
}


// function App() {
//   return (
//     <DataTable />
//   );
// }



export default App;
