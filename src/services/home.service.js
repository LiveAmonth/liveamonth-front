import axios from "axios";
const API_URL = "http://localhost:8080/";

class HomeService {
  getSlideInfos() {
    return axios.get(API_URL + "/v1/api/city/slide-infos").then((response) => {
      localStorage.setItem("slideInfos", JSON.stringify(response.data));
      return response.data;
    });
  }
}

export default new HomeService();
