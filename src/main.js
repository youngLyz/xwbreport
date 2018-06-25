// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'jquery'
import 'swiper/dist/css/swiper.css'

import 'css/reset.css'
import 'css/iconfont/iconfont.css'
import 'css/jqDialog.css'

resize();
window.onresize = function(){
	resize()
};
function resize(){
	var htmlW = document.documentElement.clientWidth||document.body.clientWidth;	
	if(htmlW>767){
		htmlW = 768;
	}
	document.documentElement.style.fontSize = htmlW/10+'px';
}


Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
