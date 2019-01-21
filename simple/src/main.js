// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
// 引入element-ui
import VueRouter from 'vue-router'
import router from './router/index'
import 'element-ui/lib/theme-chalk/index.css';
import './sass/common.css';
import i18n from './i18n/i18n'
import ElementUI from 'element-ui';
import App from './App'
Vue.use(VueRouter)
Vue.use(ElementUI) // Vue中使用element-ui
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: {
    App
  },
  template: '<App/>'
})