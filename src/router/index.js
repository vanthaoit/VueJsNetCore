import Vue from 'vue'
import Router from 'vue-router'
import AppComponent from '@/components/App.Component'
import News from '../components/News.vue'
import Contact from '../components/Contact.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'AppComponent',
      component: AppComponent
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
