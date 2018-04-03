import Vue from 'vue'

import router from './router'

import App from './App.vue'

/* eslint-disable no-new */
new Vue({
  el: '#root',
  components: { App },
  router,
  template: '<App />'
})
