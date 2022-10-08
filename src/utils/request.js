import axios from 'axios'
// eslint-disable-next-line no-undef
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 2000
})

service.interceptors.request.use(
  config => {
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
      return Promise.reject(new Error(message))
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default service
