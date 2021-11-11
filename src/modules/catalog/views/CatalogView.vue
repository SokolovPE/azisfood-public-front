<template>
<span>Hello world!</span>
</template>

<script lang="ts">
import Vue from 'vue';
import CatalogService from '@/modules/catalog/services/Catalog.service';
import Category from '@/modules/catalog/models/Category';

export default Vue.extend({
  name: 'Catalog',
  data() {
    return {
      categories: [] as Category[],
    };
  },
  async mounted() {
    this.categories = await CatalogService.getCategories();
  },
});
</script>

<style scoped>

</style>
