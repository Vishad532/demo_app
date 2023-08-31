import axios from 'axios';

axios.interceptors.request.use(async (request) => {
    request.headers['X-RapidAPI-Key'] = process.env.REACT_APP_API_KEY;
    request.headers['X-RapidAPI-Host'] = 'instagram28.p.rapidapi.com';
    console.log("request", request)
    return request;
});

export default {
    get: axios.get,
    post: axios.post,
    delete: axios.delete,
    patch: axios.patch,
    put: axios.put
};
