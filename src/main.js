import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight', {
    bind(el, binding, vnode) {
        el.style.display = 'inline-block';
        el.style.paddingLeft = '.5em';
        el.style.paddingRight = '.5em';
        el.style.borderRadius = '5px';

        if(binding.arg == 'background') {
            el.style.backgroundColor = binding.value;
        } else {
            el.style.backgroundColor = '#ffef9e';
        }

        if(binding.modifiers['upper']) {
            el.style.textTransform = 'uppercase';
        }
    }
});

new Vue({
    el: '#app',
    render: h => h(App)
})
