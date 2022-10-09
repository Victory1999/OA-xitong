import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
// eslint-disable-next-line no-undef
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 2000
})

service.interceptors.request.use(
  config => {
    const token = store.getters.token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    // return response
    const { success, message } = response.data
    if (success) {
      return response.data
    } else {
      Message.error(message)
      return Promise.reject(new Error(message))
    }
  },
  error => {
    Message.error(error.response.data.message)
    return Promise.reject(error)
  }
)

export default service
