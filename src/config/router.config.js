
import { BasicLayout, UserLayout } from '@/layouts'

export const asyncRouterMap = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: '操作面板' },
    redirect: '/dashboard/workplace',
    children: [
      {
        path: '/dashboard/workplace',
        name: 'dashboard',
        component: () => import('@/views/dashboard/workplace'),
        meta: { title: '操作面板', keepAlive: true, icon: 'account-book', permission: ['dashboard'] }
      },
      {
        path: '/page-one/index',
        name: 'page-one',
        component: () => import('@/views/page-one/index'),
        meta: { title: '页面一', keepAlive: true, icon: 'account-book', permission: ['pageOne'] }
      },
      {
        path: '/page-two/index',
        name: 'page-two',
        component: () => import('@/views/page-two/index'),
        meta: { title: '页面二', keepAlive: true, icon: 'account-book', permission: ['pageTwo'] }
      }
    ]
  },
  {
    path: '*',
    redirect: '/404',
    hidden: true
  }
]

export const constantRouterMap = [
  {
    path: '/user',
    component: UserLayout,
    redirect: '/user/login',
    hidden: true,
    children: [
      {
        path: '/user/login',
        name: 'login',
        component: () => import(/* webpackChunkName: "user" */ '@/views/user/login')
      }
    ]
  },
  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/exception/404')
  }
]
