import axios from "axios";
const instance = axios.create({
    baseURL: 'http://localhost:1010/',
    timeout:5000,
});
instance.interceptors.request.use(
    config =>{
        if (localStorage.getItem('token')){
            config.headers.satoken = localStorage.getItem('token')
        }
        return config;
    },
    error => {
        return Promise.reject(error)
    }
)
export default instance