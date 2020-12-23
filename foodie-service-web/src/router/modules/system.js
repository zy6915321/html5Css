import layoutHeaderAside from '@/layout/header-aside'

// 由于懒加载页面太多的话会造成webpack热更新太慢，所以开发环境不使用懒加载，只有生产环境使用懒加载
const _import = require('@/libs/util.import.' + process.env.NODE_ENV)

const meta = { auth: true }

export default {
  path: '/system',
  name: 'system',
  meta,
  redirect: { name: 'system-index' },
  component: layoutHeaderAside,
  children: (pre => [
    {
      path: 'datasource',
      name: `${pre}datasource`,
      component: _import('system/datasource'),
      meta: {
        ...meta,
        title: '数据源管理'
      }
    },
    {
      path: 'param',
      name: `${pre}param`,
      component: _import('system/param'),
      meta: {
        ...meta,
        title: '系统参数管理'
      }
    }
  ])('system-')
}
