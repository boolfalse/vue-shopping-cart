<template>
  <div class="v-cart">
    <h2>Cart</h2>
    <v-cart-item />
  </div>
</template>

<script>
import vCartItem from './v-cart-item'

export default {
  name: "v-cart",
  components: {
    vCartItem
  },
  props: {},
  data() {
    return {}
  },
  computed: {}
}
</script>

<style>
</style>