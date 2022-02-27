import axios from "axios";
const API_URL = "http://localhost:8080";
class CityService {
  getTotalCityInfos(cityName) {
    console.log("시티 서비스 : get total city info");
    return axios
      .get(API_URL + "/v1/api/city/" + cityName + "/total-infos")
      .then((response) => {
        return response.data.data;
      });
  }
  getFoodsAndView(cityName) {
    return axios
      .get(API_URL + "/v1/api/city/" + cityName + "/foods-and-view")
      .then((response) => {
        return response.data.data;
      });
  }
}

export default new CityService();
