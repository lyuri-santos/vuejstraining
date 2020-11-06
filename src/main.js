import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/app'
import 'firebase/auth'
// import 'primevue/resources/themes/nova-light/theme.css'
// import InputText from 'primevue/inputtext'
// import Button from 'primevue/button'
// import Toast from 'primevue/toast'
// import ToastService from 'primevue/toastservice'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: ''
}
firebase.initializeApp(firebaseConfig)

new Vue({
  router,
  render: h => h(App),
  firebase: firebase
}).$mount('#app')
