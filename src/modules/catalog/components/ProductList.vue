<template>
  <v-container class="d-flex fill-height pt-0" fluid>
    <template v-if="products.length > 0">
      <product v-for="product in products" :key="product.id" :item="product" />
    </template>
    <v-container class="d-flex justify-center fill-height" fluid v-else>
      <v-row class="products-empty">
        <div class="d-flex justify-center">
          <v-img :src="notFoundPicUrl" />
        </div>
        <h2 class="pt-4 products-empty-message">Something awesome will arrive soon!</h2>
      </v-row>
    </v-container>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import ProductItem from '@/modules/catalog/components/ProductItem.vue';
import Product from '@/modules/catalog/models/Product';
import CatalogService from '@/modules/catalog/services/Catalog.service';
import HelperService from '@/modules/common/services/Helper.service';

export default Vue.extend({
  name: 'ProductList',
  components: {
    product: ProductItem,
  },
  props: {
    categoryId: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      products: [] as Product[],
      notFoundPicUrl: HelperService.makeUrl('/public/messages/404_goods.png'),
    };
  },
  watch: {
    async categoryId(newValue) {
      this.products = await CatalogService.getProducts(newValue);
    },
  },
});
</script>

<style lang="scss" scoped>
.products-empty {
  .d-flex {
    width: 100%;
    .v-image {
      // do something for xs devices
      max-width: 50%;
    }
  }

  .products-empty-message {
    font-size: x-large;
    font-weight: 200;
    text-align: center;
    width: 100%;
  }
}
</style>
