import layoutHeaderAside from '@/layout/header-aside'

const meta = { requiresAuth: true }

export default {
  path: '/lottery',
  name: 'lottery',
  meta,
  redirect: { name: 'lottery-index' },
  component: layoutHeaderAside,
  children: (pre => [
    { path: 'index', name: `${pre}index`, component: () => import('@/pages/lottery'), meta: { meta, title: '乐透管理' }}
  ])('lottery-')
}
