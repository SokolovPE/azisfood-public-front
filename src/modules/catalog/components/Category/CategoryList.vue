<template>
  <v-app-bar app height="64" flat prominent class="second-bar">
    <category-list-md
      class="mt-0"
      :categories="categories"
      :item-height="itemHeight"
      @changed="selected"
      v-if="false"
    />
    <category-list-sm
      class="mt-0"
      :categories="categories"
      :item-height="itemHeight"
      @changed="selected"
      v-else
    />
  </v-app-bar>
  <!--  <v-container class="mb-0 category-container" fluid>-->
  <!--    <category-list-md-->
  <!--      :categories="categories"-->
  <!--      :item-height="itemHeight"-->
  <!--      @changed="selected"-->
  <!--      v-if="$vuetify.breakpoint.mdAndUp"-->
  <!--    />-->
  <!--    <category-list-sm-->
  <!--      :categories="categories"-->
  <!--      :item-height="itemHeight"-->
  <!--      @changed="selected"-->
  <!--      v-else-->
  <!--    />-->
  <!--  </v-container>-->
</template>

<script lang="ts">
import Vue from 'vue';
import Category from '@/modules/catalog/models/Category';

import CatalogService from '@/modules/catalog/services/Catalog.service';

import CategorySmList from '@/modules/catalog/components/Category/CategorySmList.vue';
import CategoryMdList from '@/modules/catalog/components/Category/CategoryMdList.vue';

export default Vue.extend({
  name: 'CategoryList',
  components: {
    'category-list-sm': CategorySmList,
    'category-list-md': CategoryMdList,
  },
  data() {
    return {
      categories: [] as Category[],
      itemHeight: 50,
      smallMode: true,
    };
  },
  methods: {
    selected(category: Category) {
      this.$emit('changed', category);
    },
  },
  async mounted() {
    this.categories = await CatalogService.getCategories();
  },
});
</script>

<style scoped lang="scss">
.second-bar {
  position: fixed !important;
  top: 64px !important;
  z-index: 5 !important;
}

.categories {
  justify-content: start !important;
}
</style>
