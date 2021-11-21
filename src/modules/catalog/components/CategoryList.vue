<template>
  <v-container fluid>
    <v-row>
      <v-col :cols="overflow ? 11 : 12" ref="categories" :class="getState()">
        <v-row class="categories justify-center">
          <category
            v-for="category in filtered"
            :key="category.id"
            :item="category"
            :selected="category.id === selectedCategory.id"
            :height="itemHeight"
          />
        </v-row>
      </v-col>
      <v-col v-if="overflow">
        <v-row @click.stop="toggle">EXPAND</v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import Category from '@/modules/catalog/models/Category';

import CatalogService from '@/modules/catalog/services/Catalog.service';

import CategoryItem from '@/modules/catalog/components/CategoryItem.vue';

export default Vue.extend({
  name: 'CategoryList',
  components: {
    category: CategoryItem,
  },
  data() {
    return {
      categories: [] as Category[],
      selectedCategory: new Category(),
      overflow: false,
      itemHeight: 50,
      expanded: false,
    };
  },
  computed: {
    filtered(): Category[] {
      // .filter((cat) => cat.title !== 'del');
      return this.categories.filter((cat) => cat.title !== 'del');
    },
  },
  methods: {
    setNext() {
      [, this.selectedCategory] = this.categories;
    },
    getState() {
      return {
        'categories--expanded': this.overflow && this.expanded,
        'categories--collapsed': this.overflow && !this.expanded,
      };
    },
    toggle() {
      this.expanded = !this.expanded;
    },
  },
  watch: {
    async currentCategory(newValue) {
      this.$emit('changed', newValue);
    },
  },
  async mounted() {
    this.categories = await CatalogService.getCategories();
    [this.selectedCategory] = this.categories;

    this.$nextTick(() => {
      const container = this.$refs.categories as HTMLElement;
      console.log(container.offsetHeight);
      console.log(this.itemHeight + 10);
      this.overflow = container.offsetHeight / (this.itemHeight + 10) > 1;
    });
  },
});
</script>

<style scoped lang="scss">
.categories--collapsed {
  height: 70px;
  overflow: hidden;
  .categories {
    justify-content: start !important;
  }
}

.categories--expanded {
  overflow: unset;
  .categories {
    justify-content: start !important;
  }
}
</style>
