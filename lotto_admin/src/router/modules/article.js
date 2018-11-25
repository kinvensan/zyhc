import layoutHeaderAside from '@/layout/header-aside'

const meta = { requiresAuth: true }

export default {
  path: '/article',
  name: 'article',
  meta,
  redirect: { name: 'article-index' },
  component: layoutHeaderAside,
  children: (pre => [
    { path: 'index', name: `${pre}index`, component: () => import('@/pages/article'), meta: { meta, title: '文章管理' }}
  ])('article-')
}
