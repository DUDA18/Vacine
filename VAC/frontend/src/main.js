// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import VueRouter from 'vue-router'
import vacinaComponent from './components/pages/Vacina/vacinaComponent.vue'
import pacienteComponent from './components/pages/cadastroPaciente/pacienteComponent.vue'
import estabelecimentoComponent from './components/pages/estabelecimento/estabelecimentoComponent.vue'
Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  {path: '/vacina', component: vacinaComponent},
  {path: '/', name: 'cadastro', component: pacienteComponent},
  {path: '/estabelecimento', component: estabelecimentoComponent}
]
const Router = new VueRouter({
  routes
})
new Vue({
  
  Router,
  render: h => h(App)
 
}).$mount('#app')
