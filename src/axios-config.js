import axios from "axios";

const instance = axios.create({
    baseURL: 'https://burger-8a883-default-rtdb.asia-southeast1.firebasedatabase.app'
});

export default instance;