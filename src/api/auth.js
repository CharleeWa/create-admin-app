import storage from 'store'
import request from '@/utils/request'

const userApi = {
  Users: '/sys/users'
}

export function getToken () {
  return request({
    url: userApi.Users,
    method: 'get',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}
