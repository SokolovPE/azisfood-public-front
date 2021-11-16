<template>
  <div class="catalog-view">
    <span>Hello world!</span>
    <v-btn @click.stop="setNext">Switch to first</v-btn>
    <div>
      Empty
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import CatalogService from '@/modules/catalog/services/Catalog.service';
import Category from '@/modules/catalog/models/Category';
import Product from '@/modules/catalog/models/Product';

export default Vue.extend({
  name: 'Catalog',
  data() {
    return {
      categories: [] as Category[],
      currentCategory: new Category(),
      products: [] as Product[],
    };
  },
  watch: {
    async currentCategory(newValue) {
      this.products = await CatalogService.getProducts(newValue.id);
    },
  },
  methods: {
    setNext() {
      [, this.currentCategory] = this.categories;
    },
  },
  async mounted() {
    this.categories = await CatalogService.getCategories();
    [this.currentCategory] = this.categories;
  },
});
</script>

<style scoped>
.catalog-view {
  width: 100%;
}
</style>
