import Axios from 'axios';

const API = Axios.create({
    baseURL: 'https://haode.com.br/estimateapp-api/' 
     
});

export default API;
