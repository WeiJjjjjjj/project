import axios from 'axios'

const http = axios.create({
    baseURL: '/proxyApi',
    timeout: 1000 * 20
})


// http.interceptors.request.use((config) => {
//     config.headers.token = localStorage.getItem('token');

//     return config;
// });

// http.interceptors.response.use((response) => {
//     // console.log(response);
//     return response;
// }, (err) => {
//     return Promise.reject(err);
// });

export default http;
