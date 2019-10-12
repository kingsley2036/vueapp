import router from 'vue-router'
import Vue from 'vue'
import HelloWorld from '../components/HelloWorld'

Vue.use(router)
// eslint-disable-next-line new-cap
export default new router({
  routes: [{
    path: '/hello',
    component: HelloWorld
  }]
})
