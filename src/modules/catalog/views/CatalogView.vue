<template>
  <div class="catalog-view">
    <category-list @changed="categoryChanged" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CatalogService from '@/modules/catalog/services/Catalog.service';
import Product from '@/modules/catalog/models/Product';
import Category from '@/modules/catalog/models/Category';

import CategoryList from '@/modules/catalog/components/CategoryList.vue';

export default Vue.extend({
  name: 'Catalog',
  components: {
    CategoryList,
  },
  data() {
    return {
      products: [] as Product[],
    };
  },
  methods: {
    async categoryChanged(category: Category) {
      this.products = await CatalogService.getProducts(category.id);
    },
  },
});
</script>

<style scoped>
.catalog-view {
  width: 100%;
}
</style>
