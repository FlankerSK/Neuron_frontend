// 目的是为了给axios做进一步封装，加上请求拦截器
import axios from 'axios'

// 创建一个 axios 实例
const service = axios.create({
    timeout: 5000,
})

// 请求拦截器
service.interceptors.request.use(
    (req) => {
        const headers = req.headers
        let token = ''
        try {
            token = localStorage.getItem('token')
        } catch (e) {
            token = ''
        }
        if (!headers.Authorization) {
            headers.Authorization = `Bearer ${token}`
        }
        return req
    },
    (error) => {
        //错误请求时的处理
        return Promise.reject(error)
    },
)

//响应拦截器
service.interceptors.response.use(
    (response) => {
        //对响应数据进行处理

        return response.data
    },
    (error) => {

        return Promise.reject(error)
    },
)
export default service