import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import '../src/assets/css/style.css'
import '../src/assets/css/ignore_for_wp.css'
import '../src/assets/css/responsive.css'
import '../src/assets/css/preset.css'
import '../src/assets/css/flaticon.css'
import '../src/assets/css/boxicons.css'
import '../src/assets/css/owl.carousel.min.css'
import '../src/assets/css/owl.theme.default.min.css'
import '../src/assets/css/owl.theme.default.min.css'
import '../src/assets/css/bootstrap.min.css'
import '../src/assets/css/lightcase.css'
import '../src/assets/css/animate.css'
import '../src/assets/js/jquery.js'
import '../src/assets/js/owl.carousel.min.js'
// import '../src/assets/js/theme.js'
import '../src/assets/js/jquery-ui.js'
import bootstrapVue from "bootstrap-vue";
import carousel from "vue-owl-carousel";

Vue.use(bootstrapVue);
Vue.use(carousel);
// import '../src/assets/js/extensions/revolution.extension.actions.min.js'
// import '../src/assets/js/jquery.themepunch.revolution.min.js'
// import '../src/assets/js/extensions/revolution.extension.carousel.min.js'
// import '../src/assets/js/extensions/revolution.extension.kenburn.min.js'
// import '../src/assets/js/extensions/revolution.extension.layeranimation.min.js'
// import '../src/assets/js/extensions/revolution.extension.migration.min.js'
// import '../src/assets/js/extensions/revolution.extension.navigation.min.js'
// import '../src/assets/js/extensions/revolution.extension.parallax.min.js'
// import '../src/assets/js/extensions/revolution.extension.slideanims.min.js'
// import '../src/assets/js/extensions/revolution.extension.video.min.js'




// "js/gmaps.js"
// "js/jquery.plugin.min.js"
// "js/jquery.countdown.min.js"

// "js/jquery.appear.js"
// "js/lightcase.js"

// "js/jquery.themepunch.tools.min.js"
// "js/theme.js"



// 
// import 'bootstrap/dist/js/bootstrap.min.js'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
