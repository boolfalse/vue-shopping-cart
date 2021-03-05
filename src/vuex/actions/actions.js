
import axios from 'axios'

export default {
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
    },
    DECREMENT_ITEM({commit}, index) {
        commit('DECREMENT_CART_ITEM', index)
    },
    INCREMENT_ITEM({commit}, index) {
        commit('INCREMENT_CART_ITEM', index)
    }
};
