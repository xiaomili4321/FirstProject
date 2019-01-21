import Login from '../components/login/Login.vue';
import main from '../components/module/Container.vue';
import userInfo from '../components/module/Input.vue';
import test from '../components/module/Table.vue';
import addUser from '../components/module/AddUser.vue';
import userTable from '../components/module/PeopleTable.vue'
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter)
export default new VueRouter({
  base: '/dist',
  routes: [{
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/main',
      name: 'mainPage',
      component: main,
      children: [{
        path: '/main/userInfo',
        name: 'UserInfo',
        component: userInfo
      }, {
        path: '/main/test',
        name: 'test',
        component: test
      },{
        path:'/main/addUser',
        name:'addUser',
        component: addUser
      },{
        path:'/main/userTable',
        name:'userTable',
        component: userTable
      }]
    },
    // // 重定向
    {
      path: '/',
      redirect: '/login'
    },
  ]
})
