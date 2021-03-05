
import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions/actions';
import mutations from './mutations/mutations';
import getters from './getters/getters';

Vue.use(Vuex);

export default new Vuex.Store({
    state: { // variables, objects, massives, collections, etc
        products: [],
        cart: []
    },
    mutations, // synchronized tool for changing the "state" data
    actions, // async tool for changing the "state" data
    getters, // opportunity for getting the "state" data with shortcuts
});
