
import Vue from 'vue'
import Router from 'vue-router'

import vCatalog from './../components/v-catalog'
import vCart from './../components/v-cart'

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: "Catalog",
            component: vCatalog
        },
        {
            path: '/cart',
            name: "Cart",
            component: vCart,
            props: true
        }
    ]
})
