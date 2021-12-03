<template>
  <v-container class="catalog-view pa-0">
    <category-list @changed="categoryChanged" />
    <product-list class="overflow-y-auto" :category-id="selectedCategory.id" />
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

import Category from '@/modules/catalog/models/Category';

import CategoryList from '@/modules/catalog/components/Category/CategoryList.vue';
import ProductList from '@/modules/catalog/components/Product/ProductList.vue';

export default Vue.extend({
  name: 'Catalog',
  components: {
    CategoryList,
    ProductList,
  },
  data() {
    return {
      selectedCategory: {} as Category,
    };
  },
  methods: {
    categoryChanged(category: Category) {
      this.selectedCategory = category;
    },
  },
});
</script>

<style scoped>
.catalog-view {
  width: 100%;
}
</style>
