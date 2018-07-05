import moment from 'moment'
import 'moment/locale/pt-br'

export default {
    install(Vue) {
        moment.locale('pt-br')
        Vue.filter('moment-date', (val) => moment(val).format('DD/MM/YYYY'))
        Vue.filter('moment-datetime', (val) => moment(val).format('DD/MM/YYYY - hh:mm:ss'))
        Vue.filter('moment-time', (val) => moment(val).format('hh:mm:ss'))
        Vue.prototype.$moment = moment
    }
}
