<template>
<div class="v-catalog">
  <h2>Catalog</h2>
  <v-catalog-item />
  <v-catalog-item />
  <v-catalog-item />
</div>
</template>

<script>
import vCatalogItem from './v-catalog-item'

export default {
  name: "v-catalog",
  components: {
    vCatalogItem
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