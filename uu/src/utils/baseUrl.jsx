import axios  from "axios"

const api = axios.create({
    // baseURL : "https://storyclub-backend.onrender.com"
    // baseURL : "http://localhost:3000"
    baseURL:"https://storyclub-backend-1.onrender.com"
})

api.interceptors.request.use(

    function (config){
       
        return config;
    }

)
api.interceptors.request.use(

)
export default api;