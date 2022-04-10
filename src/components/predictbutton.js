import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from "@mui/system";
import axios from "axios";


const StyledButton = styled(Button, {})({
    backgroundColor: "rgba(21,175,241,255)",
    color: "rgb(218,225,227)",
    borderColor: "#FFFFFF",
    fontSize: 13,
    margin: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 0,
    height: 30,
    width: 150,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    ':hover': {
        backgroundColor: "rgba(21,175,241,255)",
        color: "rgb(218,225,227)",
        borderColor: '#FFFFFF',
      },
    ':disabled': {
        backgroundColor: "rgba(21,175,241,255)",
        color: "rgb(218,225,227)",
        borderColor: '#FFFFFF',
    }
});



export default function Predict({
    disableEdit,
    predDict,
    setReloadTable,
    reloadTable
}) {

    const getPrediction = async () => {

        let response = await axios.post(
            "http://127.0.0.1:5000/",
            predDict,
            {headers:{"Content-Type" : "application/json"}}
        ).catch(function (error) {
            let e = error;
            if (error.response) {
                e = error.response.data;
                if (error.response.data && error.response.data.error) {
                    e = error.response.data.error;
                }
            } else if (error.message) {
                e = error.message;
            } else {
                e = "Unknown error occured";
            }
            return e;
        });

        response.data.forEach(async (data) => {
            let str = "doc_id=" + parseInt(data.doc_id) + "&aging_bucket=" + data.aging_bucket;
            console.log(str)
            
            let preddata = JSON.stringify({
                doc_id: data.doc_id,
                aging_bucket: data.aging_bucket
            });
            
            await axios.post(
                "http://localhost:8080/h2h-backend/editpredict",
                preddata,
                {headers:{"Content-Type" : "application/json"}}
                ).catch(function (error) {
                    let e = error;
                    if (error.response) {
                        e = error.response.data;                   
                        if (error.response.data && error.response.data.error) {
                            e = error.response.data.error;          
                        }
                    } else if (error.message) {
                        e = error.message;
                    } else {
                        e = "Unknown error occured";
                    }
                    return e;
                }
            );
        }); 
        window.location.reload();
        // setReloadTable("something");
    };

    
    return (
      <div>
        <StyledButton disabled={disableEdit} onClick={getPrediction}>
          Predict
        </StyledButton>
        </div>
    );
}
