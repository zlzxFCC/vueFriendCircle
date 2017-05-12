import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store/'
import {routerMode} from './config/env'
import './config/rem'
import './config/share'
import FastClick from 'fastclick'
import axios from 'axios'
import VueMaterial from 'vue-material'

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}


Vue.prototype.$http = axios

Vue.use(VueMaterial)

Vue.use(VueRouter)

const router = new VueRouter({
	routes,
	mode: routerMode,
	strict: process.env.NODE_ENV !== 'production'
})

new Vue({
	router,
	store,
}).$mount('#app')
