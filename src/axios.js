import axios from "axios";

axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
const instance = axios.create({
    baseURL: "http://localhost:8080/v1/api/",
});

export default instance;
