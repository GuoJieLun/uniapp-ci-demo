import Vue from 'vue'
import App from './App'
import sensors from './utils/sensorsdata.min'

console.log('sensors', sensors)
sensors.setPara({
  name: 'sensors',
  server_url: 'https://tclcrawler.tcl.com.cn/sa?project=Tcloudtest',
  // 全埋点控制开关
  autoTrack: {
    appLaunch: true, // 默认为 true，false 则关闭 $MPLaunch 事件采集
    appShow: true, // 默认为 true，false 则关闭 $MPShow 事件采集
    appHide: true, // 默认为 true，false 则关闭 $MPHide 事件采集
    pageShow: true, // 默认为 true，false 则关闭 $MPViewScreen 事件采集
    pageShare: true, // 默认为 true，false 则关闭 $MPShare 事件采集
    mpClick: false, // 默认为 false，true 则开启 $MPClick 事件采集
    mpFavorite: true // 默认为 true，false 则关闭 $MPAddFavorites 事件采集
  },
  // 自定义渠道追踪参数，如source_channel: ["custom_param"]
  source_channel: [],
  // 是否允许控制台打印查看埋点数据(建议开启查看)
  show_log: true,
  // 是否允许修改 onShareAppMessage 里 return 的 path，用来增加(登录 ID，分享层级，当前的 path)，在 app onShow 中自动获取这些参数来查看具体分享来源、层级等
  allow_amend_share_path: true
})

sensors.init()
Vue.config.productionTip = false
Vue.prototype.$sensors = sensors
App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()
