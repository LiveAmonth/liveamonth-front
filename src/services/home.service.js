import axios from "axios";
const configHeaders = {
  "content-type": "application/json; charset=utf-8",
};
const request ={
  orderBy: "VIEW",
  limit: 5
}
class HomeService {
  getSlideInfos() {
    return axios.get("city/slide-infos").then((response) => {
      localStorage.setItem("slideInfos", JSON.stringify(response.data.data));
      return response.data.data;
    });
  }

  getTopReviews() {
    return axios.post("reviews/other",JSON.stringify(request),{ headers: configHeaders}).then((response) => {
      localStorage.setItem("topReviews", JSON.stringify(response.data.data));
      return response.data.data;
    }).catch((err) => {
      console.log(err);
    });

  }
  getTopSchedules() {
    return axios.post("schedules/other",JSON.stringify(request),{ headers: configHeaders}).then((response) => {
      localStorage.setItem("topSchedules", JSON.stringify(response.data.data));
      return response.data.data;
    }).catch((err) => {
      console.log(err);
    });
  }
}

export default new HomeService();
