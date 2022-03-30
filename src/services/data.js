import axios from "axios";
export const getData = async () => {
    let response = await axios.get('http://localhost:8080/h2h-backend/fetchdata');

    console.log(response.data);
    return response.data;
}
