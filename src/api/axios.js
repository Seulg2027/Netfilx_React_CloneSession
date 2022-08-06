import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params:{
        api_key:'a6a0c307c2ee20d7ab006b8e2cd8c398',
        language:"ko-KR",
    },
});

export default instance;