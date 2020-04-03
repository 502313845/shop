import Vue from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'
import {Button} from 'mint-ui'
Vue.component(Button.name, Button)
import './mock/mockServer'
new Vue({
        el:'#app',

        render:h => h(App),
        router,
        store



})