// 菜单 侧边栏
export default [
  { path: '/index', title: '首页', icon: 'home' },
  {
    title: '用户管理',
    icon: 'users',
    children: [
      { path: '/demo/page1', icon: 'table', title: '页面 1' },
      { path: '/demo/page2', title: '页面 2' },
      { path: '/demo/page3', title: '页面 3' }
    ]
  }, {
    title: '乐透管理',
    icon: 'diamond',
    path: '/lottery'
  }, {
    title: '文章管理',
    icon: 'table',
    path: '/article'
  }
]
