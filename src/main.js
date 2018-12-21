import Vue from 'vue'
import App from './examples/事件.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
