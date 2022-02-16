import axios from "axios";

const API_URL = 'http://localhost:8080/';

class AuthService{
    /**
     * 로그인
     */
    login(username, password){
        return axios.post(API_URL+'v1/api/login',{
            username: username,
            password: password
        })
            .then(response =>{
                if(response.data.accessToken){
                    localStorage.setItem('user', JSON.stringify(response.data));
                }
            })
    }
}