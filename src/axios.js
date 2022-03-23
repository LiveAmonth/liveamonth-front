import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080/v1/api/",
});
instance.defaults.headers.post["Content-type"] =
  "application/json;charset=utf-8";
instance.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

export default instance;
