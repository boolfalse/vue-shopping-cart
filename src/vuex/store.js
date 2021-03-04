
import Vue from 'vue'
import Vuex from 'vuex'

import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
    state: { // variables, objects, massives, collections, etc
        products: [],
        cart: []
    },
    mutations: { // synchronized tool for changing the "state" data
        SET_PRODUCTS_TO_STATE: (state, products) => {
            state.products = products;
        },
        SET_CART: (state, product) => {
            let isProductExist = false;
            state.cart.map((item) => {
                if (item.article === product.article) {
                    isProductExist = true;
                    item.quantity++;
                }
            });

            isProductExist || state.cart.push({
                ...product,
                quantity: 1
            })
        },
        REMOVE_FROM_CART: (state, index) => {
            state.cart.splice(index, 1)
        }
    },
    actions: { // async tool for changing the "state" data
        GET_PRODUCTS_FROM_API({commit}) {
            const url = "http://localhost:3000/products";

            return axios(url, {
                method: "GET"
            }).then((products) => {
                commit('SET_PRODUCTS_TO_STATE', products.data);

                return products;
            }).catch(err => {
                console.log(err.message);

                return err;
            });
        },
        ADD_TO_CART({commit}, product) {
            commit('SET_CART', product);
        },
        DELETE_FROM_CART({commit}, index) {
            commit('REMOVE_FROM_CART', index)
        }
    },
    getters: { // opportunity for getting the "state" data with shortcuts
        PRODUCTS(state) {
            return state.products;
        },
        CART(state) {
            return state.cart;
        }
    },
});
