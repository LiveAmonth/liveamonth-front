import axios from "axios";

const API_URL = "http://localhost:8080/";
const configHeaders = {
  "content-type": "application/json; charset=utf-8",
};
const jwt = require("jsonwebtoken");

class AuthService {
  /**
   * 로그인
   */
  login(username, password) {
    let request = {
      loginId: username,
      password: password,
    };
    return axios
      .post(API_URL + "v1/api/auth/login", JSON.stringify(request), {
        headers: configHeaders,
      })
      .then((response) => {
        localStorage.setItem("tokenData", JSON.stringify(response.data.data));
        let user = jwt.decode(response.data.data.accessToken);
        localStorage.setItem("user", JSON.stringify(user.member));
        return user.member;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  /**
   * 로그아웃
   */
  logout() {
    // // LocalStorage 사용자 정보
    let tokenData = JSON.parse(localStorage.getItem("tokenData"));
    let data = {
      accessToken: tokenData.accessToken,
      refreshToken: tokenData.refreshToken,
    };

    return axios
      .post(API_URL + "v1/api/auth/logout", JSON.stringify(data), {
        headers: configHeaders,
      })
      .then((response) => {
        console.log(response.data.message);
        localStorage.removeItem("tokenData");
        localStorage.removeItem("user");
      });
  }
}

export default new AuthService();
