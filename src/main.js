import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import { library } from '@fortawesome/fontawesome-svg-core'
import { 
    faFile, faTasks, faList, faAngleLeft, faSignOutAlt, faBars, faCircle, 
    faArrowCircleRight, faTimes, faQuestionCircle, faInfoCircle, faUserCircle, 
    faBook, faMapMarkerAlt, faPencilAlt,  faPlus, faSpinner,faQuoteLeft, faQuestion,
    faSyncAlt, faThumbsUp,faThumbsDown
    } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHackerrank, faGoogle } from '@fortawesome/free-brands-svg-icons'
import {faBell, faFileAlt} from '@fortawesome/free-regular-svg-icons'

library.add(faFile, faHackerrank, faTasks, faList, faAngleLeft, faBell, 
    faSignOutAlt, faBars, faCircle, faGoogle, faArrowCircleRight, faTimes, 
    faQuestionCircle, faInfoCircle, faUserCircle, faBook, faMapMarkerAlt, 
    faPencilAlt, faFileAlt, faPlus, faSpinner, faQuoteLeft, faQuestion,
    faSyncAlt,faThumbsUp,faThumbsDown
    )
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.prototype.$http = axios;
const token = store.state.token
if (token) {
    Vue.prototype.$http.defaults.headers.common["Authorization"] =
        "Bearer" + token;
}

Vue.filter('cutString', value => {
    return value.substr(0, 10)
})

Vue.filter('cutTime', value => {
    return value.substr(11, 5)
})

Vue.filter('strCapitalize', value => {
    return value.toLowerCase()
        .split(' ')
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(' ')
})

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
