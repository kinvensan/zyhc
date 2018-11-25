import request from '@/plugin/axios'

export default {
  list(data) {
    return request({
      url: '/article/list',
      method: 'post',
      data
    })
  },
  create(data) {
    return request({
      url: '/article/create',
      method: 'post',
      data
    })
  },
  update(data) {
    return request({
      url: '/article/update',
      method: 'post',
      data
    })
  },
  destory(data) {
    return request({
      url: '/article/destory',
      method: 'post',
      data
    })
  },
  fetch(data) {
    return request({
      url: '/article/fetch',
      method: 'post',
      data
    })
  }
}
