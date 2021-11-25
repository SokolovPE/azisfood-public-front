<template>
  <div class="catalog-view">
    <category-list @changed="categoryChanged" />
    <product-list :category-id="selectedCategory.id" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Category from '@/modules/catalog/models/Category';

import CategoryList from '@/modules/catalog/components/CategoryList.vue';
import ProductList from '@/modules/catalog/components/ProductList.vue';

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
