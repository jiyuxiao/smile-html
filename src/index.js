import Toast from './components/toast/index.js';

const components = [
  Toast
]

const install = function(Vue, opts = {}) {
  components.map(component => {
    Vue.component(component.name, component);
  })
}

/* 支持使用标签的方式引入 */
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

//导出组件
export {
  install,
  Toast
}