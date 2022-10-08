import request from '@/utils/request'
export function loginAPI(data) {
  return request({
    url: '/sys/login',
    method: 'post',
    data
  })
}
