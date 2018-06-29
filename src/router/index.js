import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import ReportIndex from '@/pages/report/Index'
import ReportForm from '@/pages/form/Form'
import ReportDetail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  //mode: 'history',
  routes: [
    {
      path: '/',
      name: 'ReportIndex',
      component: ReportIndex
    },
    {
      path: '/form/:id',
      name: 'ReportForm',
      component: ReportForm
    },
    {
      path: '/detail/:id',
      name: 'ReportDetail',
      component: ReportDetail
    }
  ]
})
