import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {URL_API_ENDPOINT, AUTHORIZATION, HEADER_CONTENT_TYPE_URLENDCODED} from '../common/system.constants'

const ApiService = {
  init () {
    Vue.use(VueAxios, axios)
    Vue.axios.defaults.baseURL = URL_API_ENDPOINT
  },

  setHeader () {
    Vue.axios.defaults.headers.common[AUTHORIZATION] = HEADER_CONTENT_TYPE_URLENDCODED
  },

  get (resource, slug = '') {
    return Vue.axios.get(`${resource}/${slug}`).catch((error) => {
      throw new Error(`[RWV] ApiService ${error}`)
    })
  },

  post (resource, params) {
    return Vue.axios.post(`${resource}`, params)
  },

  update (resource, slug, params) {
    return Vue.axios.put(`${resource}/${slug}`, params)
  },

  delete (resource) {
    return Vue.axios
      .delete(resource)
      .catch((error) => {
        throw new Error(`[RWV] ApiService ${error}`)
      })
  }
}
export default ApiService
