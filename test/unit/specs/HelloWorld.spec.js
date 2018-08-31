import Vue from 'vue'
import AppComponent from '@/components/App.Component'

describe('App.Component.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(AppComponent)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .toEqual('Welcome to Your Vue.js App')
  })
})
