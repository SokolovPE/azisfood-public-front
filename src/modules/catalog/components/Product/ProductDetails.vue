<template>
  <v-card>
    <v-card-title class="product-details-title pa-0">
      <v-img class="product-image" :src="item.fullUrl" max-width="350" />
      <span class="product-title">{{ item.title }}</span>
    </v-card-title>
    <v-card-title>Available options</v-card-title>
    <v-card-text> zz </v-card-text>

    <v-card-actions>
      <v-btn color="deep-purple lighten-2" text> Reserve</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
import Product from '@/modules/catalog/models/Product';

export default Vue.extend({
  name: 'ProductDetails',
  props: {
    item: {
      type: Product,
      required: true,
    },
  },
});
</script>

<style scoped lang="scss">
.product-details-title {
  flex-direction: column;
  background-color: #3f51b5;

  .product-title {
    color: white;
    margin-top: -20px;
    margin-bottom: 10px;
    font-size: 1.85rem;
    font-weight: bold;
    text-align: center;
  }
}
</style>
