import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home/Home.vue';

/**
 * Vue.use (Router) é usado para garantir que o roteador seja adicionado como um middleware ao nosso projeto Vue.
 */
Vue.use(Router);

/**
 * Primeiro o roteador é importado do pacote vue-router por meio da instrução import.
 */
export default new Router({
    mode: "history",
    routes: [
        {
            // A configuração de router padrão.
            path: '/',
            name: 'home',
            component: Home
        }
    ],
});