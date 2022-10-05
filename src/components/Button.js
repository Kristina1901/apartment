import Vue from 'vue'
const Button = Vue.component('btn-item', {
    render(createElement) {
       return createElement('button', this.$slots.default)
    }
})
export default Button