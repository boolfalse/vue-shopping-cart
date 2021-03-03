<template>
  <div class="v-main-wrapper">
    <p>{{ title }}</p>
    <v-catalog />
    <v-cart />
  </div>
</template>

<script>
import vCatalog from './v-catalog';
import vCart from './v-cart';

export default {
  name: 'v-main-wrapper',
  components: {
    vCatalog,
    vCart
  },
  props: {},
  data() {
    return {
      title: "Main Wrapper"
    }
  },
  computed: {},
  methods: {},
  watch: {},
  mounted() {
    console.log("Component was completely loaded.")
  }
}
</script>

<style>
.v-main-wrapper {
  max-width: 900px;
  margin: 0 auto;
}
</style>