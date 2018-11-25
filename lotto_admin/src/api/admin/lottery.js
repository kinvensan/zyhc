import request from '@/plugin/axios'

export default {
  list(query) {
    return request({
      url: '/lottery/list',
      method: 'get',
      params: query
    })
  },
  create(data) {
    return request({
      url: '/lottery/create',
      method: 'post',
      data
    })
  },
  update(data) {
    return request({
      url: '/lottery/update',
      method: 'post',
      data
    })
  },
  destory(data) {
    return request({
      url: '/lottery/destory',
      method: 'post',
      data
    })
  },
  fetch(data) {
    return request({
      url: '/lottery/fetch',
      method: 'get',
      data
    })
  }
}
