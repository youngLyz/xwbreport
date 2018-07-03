import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import ReportIndex from '@/pages/report/Index'
import ReportForm from '@/pages/form/Form'
import ReportDetail from '@/pages/detail/Detail'

import App from '@/App'

Vue.use(Router)
Router.prototype.go = function () {
  this.isBack = true
  window.history.go(-1)
}

export default new Router({
  //mode: 'history',
  routes: [
    {
      path: '/',
      component: App,
      children: [
          {
            path: '/index',name: 'ReportIndex',component: ReportIndex
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
      
    }
    
  ]
})
