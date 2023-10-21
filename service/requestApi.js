import axios from 'axios'
const requestApi = axios.create({
  baseURL: 'https://hacker-news.firebaseio.com/v0',
  timeout: 30000,
})

requestApi.interceptors.request.use(
  (config) => {
    return config
  }
)

requestApi.interceptors.response.use(
  (res) => {
     return res 
  },
  (error) => {
    console.log(error);
    throw error
  }
)
export default requestApi