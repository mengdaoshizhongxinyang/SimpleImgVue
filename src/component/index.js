import SimpleImgVue from "./SimpleImgVue.vue";

SimpleImgVue.install = Vue => Vue.component(SimpleImgVue.name, SimpleImgVue) // 给组件配置install方法 

export default SimpleImgVue;