import * as React from 'react';
import Button from '@mui/material/Button';
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


const StyledButton = styled(Button, {})({
    backgroundColor: "rgba(39,61,74,255)",
    color: "rgb(218,225,227)",
    borderColor: "rgba(21,175,241,255)",
    fontSize: 13,
    margin: 0,
    borderRadius: 0, 
    height: 30,
    width: 150,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    ':hover': {
        backgroundColor: 'rgba(21,175,241,255)',
      }
});


export default function LeftButtonGroup({ 
    advanceSearch,
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
    setReloadTable,
}) {
    return (
        <Grid item xs={4.5} backgroundColor="rgba(39,61,74,255)">
            <StyledButtonGroup variant="outlined">
                <Predict 
                    disableEdit={disableEdit}
                    predDict={predDict}
                    setReloadTable={setReloadTable}
                />
                {/* <StyledButton>Analytics View</StyledButton> */}
                <AnalyticsView />
                <AdvanceSearch 
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
            </StyledButtonGroup>
        </Grid>
    );
  }