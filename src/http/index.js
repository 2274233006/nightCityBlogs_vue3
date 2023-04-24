import axios from "axios";
const instance = axios.create({
    baseURL: 'http://localhost:1010/',
    timeout:1000,
    headers: {
        'satoken': localStorage.getItem('token')
    }
});
export default instance