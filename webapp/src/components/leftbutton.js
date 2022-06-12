import * as React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";
import AdvanceSearch from "./advancesearch";
import Predict from "./predictbutton";
import AnalyticsView from "./analyticsbutton";



const StyledButtonGroup = styled(ButtonGroup, {})({
    height: 80,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
});



export default function LeftButtonGroup({ 
    setAdvanceSearch,
    searchDocID,
    setSearchDocID,
    searchInvoiceID,
    setSearchInvoiceID,
    searchCustNum,
    setSearchCustNum,
    searchBizzYear,
    setSearchBizzYear,
    disableEdit,
    predDict,
    setIsStale,
}) {
    return (
        <Grid item xs={4.5} backgroundColor="rgba(39,61,74,255)" >
            <StyledButtonGroup variant="outlined">
                <Predict 
                    disableEdit={disableEdit}
                    predDict={predDict}
                    setIsStale={setIsStale}
                />
                <AnalyticsView />
                <AdvanceSearch 
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
            </StyledButtonGroup>
        </Grid>
    );
  }