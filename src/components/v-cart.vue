<template>
  <div class="v-cart">
    <router-link :to="{name: 'catalog'}">
      <div class="v-catalog__link_to_cart">Catalog</div>
    </router-link>
    <h2>Cart</h2>
    <p v-if="cart_data.length === 0">There are no products in Cart!</p>
    <v-cart-item
        v-for="(item, index) in cart_data"
        :key="item.article"
        :cart_item_data="item"
        @deleteFromCart="deleteFromCart(index)"
    />
    <div class="v-cart__total">
      <p class="v-cart__total_name">Total price:</p>
      <p>${{cartTotalCost}}</p>
    </div>
  </div>
</template>

<script>
import vCartItem from './v-cart-item'
import {mapActions} from 'vuex'

export default {
  name: "v-cart",
  components: {
    vCartItem
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {}
  },
  computed: {
    cartTotalCost() {
      let total = 0;
      for (let item of this.cart_data) {
        total += item.price * item.quantity;
      }

      return total.toLocaleString();
    }
  },
  methods: {
    ...mapActions([
        'DELETE_FROM_CART'
    ]),
    deleteFromCart(index) {
      this.DELETE_FROM_CART(index)
    }
  }
}
</script>

<style lang="scss">
.v-cart {
  margin-bottom: 100px;

  &__total {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    padding: $padding*2 $padding*3;
    display: flex;
    justify-content: center;
    background: #26ae68;
    color: #ffffff;
    font-size: 20px;
  }
  &__total_name {
    margin-right: $margin*2;
  }
}
</style>