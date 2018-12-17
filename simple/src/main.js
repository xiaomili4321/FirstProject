// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
// 引入element-ui
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
import App from './App'

Vue.use(ElementUI) // Vue中使用element-ui
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})
