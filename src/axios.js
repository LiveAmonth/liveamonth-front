import axios from "axios";

axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
const instance = axios.create({
    baseURL: "http://localhost:8080/api/v1/",
});

export default instance;
