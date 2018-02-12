// require vue and vue modules
import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'

// pages
import Home from './components/Home.vue'
import Classes from './components/Classes.vue'
import Game from './components/Game.vue'
import Three from './components/Three.vue'
import Gamedev from './components/GameDev.vue'


// elements
Vue.component('game-component', require('./components/elements/GameDemoComponent.vue'))
Vue.component('gamedev-component', require('./components/elements/GameDevComponent.vue'))
Vue.component('three-component', require('./components/elements/ThreeDemoComponent.vue'))
Vue.component('site-navigation', require('./components/elements/Navigation.vue'))
Vue.component('site-overlay', require('./components/elements/Overlay.vue'))
Vue.component('site-header', require('./components/elements/Header.vue'))
Vue.component('site-footer', require('./components/elements/Footer.vue'))


// phaser elements
Vue.component('phaser-master', require('./components/documentation/MasterManager.vue'))
Vue.component('phaser-controls', require('./components/documentation/ControllerManager.vue'))
Vue.component('phaser-bitmap', require('./components/documentation/BitmapManager.vue'))
Vue.component('phaser-sprite', require('./components/documentation/SpriteManager.vue'))
Vue.component('phaser-text', require('./components/documentation/TextManager.vue'))
Vue.component('phaser-mouse', require('./components/documentation/MouseManager.vue'))
Vue.component('phaser-bitmap', require('./components/documentation/BitmapManager.vue'))
Vue.component('phaser-group', require('./components/documentation/GroupManager.vue'))

Vue.use(Router)
Vue.use(VueResource);

// set routes
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/classes',
      name: 'Classes',
      component: Classes
    },
    {
      path: '/phaser',
      name: 'Phaser',
      component: Game
    },
    {
      path: '/phaserdev',
      name: 'Phaser Dev',
      component: Gamedev
    },
    {
      path: '/three',
      name: 'Three',
      component: Three
    }
  ]
})
