import axios from "@/axios";


class CityService {
  async getTotalCityInfos(cityName) {
    try {
      const res = await axios.get(`city/${cityName}/total-infos`);
      return res.data;
    }catch (err){
      console.log(err);
    }
  }

  async getFoodsAndView(cityName) {
    const res = await axios.get(
      API_URL + "/v1/api/city/" + cityName + "/foods-and-view"
    );
    return res.data;
  }

  separateDetail(totalCityInfo) {
    return {
      cityName: totalCityInfo.cityName,
      content: totalCityInfo.content,
      image: totalCityInfo.image
    };
  }

  separateTransports(totalCityInfo) {
    return totalCityInfo.transports;
  }

  separateWeathers(totalCityInfo) {
    return totalCityInfo.weathers;
  }

  separateFoods(FoodsAndView) {
    return FoodsAndView.foodInfos;
  }

  separateView(FoodsAndView) {
    return FoodsAndView.viewInfos;
  }
}

export default new CityService();
