<template>
<div class="v-catalog">
  <h2>Catalog</h2>
  <v-catalog-item
      v-for="product in products"
      :key="product.article"
      v-bind:product_data="product"
      @sendDataFromChild="getDataFromChild"
  />
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
    return {
      "products": [
        {
          "image": "1.jpg",
          "name": "T-shirt 1",
          "price": 2100,
          "article": "T1",
          "available": true,
          "category": "Male"
        },
        {
          "image": "2.jpg",
          "name": "T-shirt 2",
          "price": 3150,
          "article": "T2",
          "available": true,
          "category": "Female"
        },
        {
          "image": "3.jpg",
          "name": "T-shirt 3",
          "price": 4200,
          "article": "T3",
          "available": false,
          "category": "Female"
        },
        {
          "image": "4.jpg",
          "name": "T-shirt 4",
          "price": 5300,
          "article": "T4",
          "available": true,
          "category": "Male"
        },
        {
          "image": "5.jpg",
          "name": "T-shirt 5",
          "price": 6500,
          "article": "T5",
          "available": false,
          "category": "Female"
        },
        {
          "image": "6.jpeg",
          "name": "T-shirt 6",
          "price": 8700,
          "article": "T6",
          "available": true,
          "category": "Female"
        }
      ]
    }
  },
  computed: {},
  methods: {
    getDataFromChild(data) {
      console.log(data)
    }
  }
}
</script>

<style lang="scss">
.v-catalog {
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
}
</style>