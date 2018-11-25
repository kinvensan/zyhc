import request from '@/plugin/axios'
export default {
  list(query) {
    return request({
      url: '/user/list',
      method: 'get',
      params: query
    })
  },
  create(data) {
    return request({
      url: '/user/create',
      method: 'post',
      data
    })
  },
  update(data) {
    return request({
      url: '/user/update',
      method: 'post',
      data
    })
  },
  destory(data) {
    return request({
      url: '/user/destory',
      method: 'post',
      data
    })
  },
  fetch(data) {
    return request({
      url: '/user/fetch',
      method: 'get',
      data
    })
  },
  resetPassword(data) {
    return request({
      url: '/user/restpassword',
      method: 'post',
      data
    })
  }
}
