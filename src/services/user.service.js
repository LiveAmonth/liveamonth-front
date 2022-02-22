import axios from "axios";

const API_URL = "http://localhost:8080/";

class AuthService {
  /**
   * 로그인
   */
  login(username, password) {
    return axios
      .post(API_URL + "v1/api/login", {
        username: username,
        password: password,
      })
      .then((response) => {
        if (response.data.accessToken) {
          localStorage.setItem("token", JSON.stringify(response.data));
        }
        return response.data;
      });
  }

  /**
   * 로그아웃
   */
  logout() {
    // LocalStorage 사용자 정보
    let token = JSON.parse(localStorage.getItem("token"));
    let data = {
      accessToken: token.accessToken,
      refreshToken: token.refreshToken
    };

    return axios
      .post(API_URL + "v1/api/logout", JSON.stringify(data), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log(response);
        localStorage.removeItem("token");
      });
  }
}

export default new AuthService();
