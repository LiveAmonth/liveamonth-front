import axios from "@/axios";

class CityService {
  async getTotalCityInfos(cityName) {
    try {
      const res = await axios.get(`city/${cityName}/total-infos`);
      return res.data.data;
    } catch (err) {
      console.log(err);
    }
  }

  async getFoodsAndView(cityName) {
    try {
      const res = await axios.get(`city/${cityName}/foods-and-view`);
      return res.data.data;
    } catch (err) {
      console.log(err);
    }
  }
}

export default new CityService();
