import Vue from 'vue'
import store from './store'
import App from './App.vue'
import router from './router'
new Vue({
        el:'#app',

        render:h => h(App),
        router,
        store



})