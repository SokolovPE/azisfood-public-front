<template>
  <v-container
    class="d-flex fill-height pa-0 justify-center"
    :class="[{ 'container-small': this.$vuetify.breakpoint.sm }]"
  >
    <template v-if="products.length > 0">
      <product
        v-for="product in products"
        :key="product.id"
        :item="product"
        @dblclick.stop="selectProduct(product)"
      />
    </template>
    <v-container class="d-flex justify-center fill-height" fluid v-else>
      <v-row class="products-empty">
        <div class="d-flex justify-center">
          <v-img :src="notFoundPicUrl" />
        </div>
        <h2 class="pt-4 products-empty-message">Something awesome will arrive soon!</h2>
      </v-row>
    </v-container>
    <v-dialog v-model="displayInfo" v-if="displayInfo">
      <product-details :item="selectedProduct" />
    </v-dialog>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Product from '@/modules/catalog/models/Product';

import ProductItem from '@/modules/catalog/components/Product/ProductItem.vue';
import ProductDetails from '@/modules/catalog/components/Product/ProductDetails.vue';

import CatalogService from '@/modules/catalog/services/Catalog.service';
import HelperService from '@/modules/common/services/Helper.service';

export default Vue.extend({
  name: 'ProductList',
  components: {
    product: ProductItem,
    ProductDetails,
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
      selectedProduct: new Product(),
      displayInfo: false,
      notFoundPicUrl: HelperService.makeUrl('/public/messages/404_goods.png'),
    };
  },
  methods: {
    selectProduct(payload: Product) {
      this.selectedProduct = payload;
      this.displayInfo = true;
    },
  },
  watch: {
    async categoryId(newValue) {
      this.products = await CatalogService.getProducts(newValue);
    },
  },
});
</script>

<style lang="scss" scoped>
.container-small {
  width: 70%;
}

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
