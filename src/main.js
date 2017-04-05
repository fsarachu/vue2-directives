import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight', {
    bind(el, binding, vnode) {
        el.style.display = 'inline-block';
        el.style.paddingLeft = '.5em';
        el.style.paddingRight = '.5em';
        el.style.borderRadius = '5px';
        el.style.backgroundColor = binding.value;
    }
});

new Vue({
    el: '#app',
    render: h => h(App)
})
