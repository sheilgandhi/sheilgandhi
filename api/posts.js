import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.rss2json.com/v1/",
});

export default instance;