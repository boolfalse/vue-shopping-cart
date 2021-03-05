
export default {
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
    },
    DECREMENT_CART_ITEM: (state, index) => {
        let qty = state.cart[index].quantity;
        if (qty > 1) {
            state.cart[index].quantity = qty - 1;
        }
    },
    INCREMENT_CART_ITEM: (state, index) => {
        let qty = state.cart[index].quantity;
        state.cart[index].quantity = qty + 1;
    }
};
