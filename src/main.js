import Vue from 'vue'
import App from './App.vue'
import LiButton from './components/button.vue'
import LiDialog from './components/dialog.vue'
import './assets/fonts/iconfont.css'

Vue.config.productionTip = false

Vue.component(LiButton.name, LiButton)
Vue.component(LiDialog.name, LiDialog)

new Vue({
  render: h => h(App)
}).$mount('#app')
