<template>
  <v-container class="mb-0 category-container" fluid>
    <v-row>
      <v-col
        :cols="overflow ? 9 : 12"
        :sm="overflow ? 11 : 12"
        ref="categories"
        class="categories justify-center"
        :class="getState()"
      >
        <v-row :class="[{ 'justify-md-center': !overflow }]">
          <category
            v-for="category in categories"
            :key="category.id"
            :item="category"
            :selected="category.id === selectedCategory.id"
            :height="itemHeight"
            @click="clickTest(category)"
          />
        </v-row>
      </v-col>
      <v-col v-if="overflow">
        <v-row class="categories justify-center" @click.stop="toggle">
          <div class="categories-expander d-flex align-center justify-start my-1">
            <v-icon :class="[{ 'chevron--expanded': expanded }]">mdi-chevron-down</v-icon>
            {{ expanded ? 'less' : 'more' }}
          </div>
        </v-row>
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
  methods: {
    clickTest(category: Category) {
      this.selectedCategory = category;
    },
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
    async selectedCategory(newValue) {
      this.$emit('changed', newValue);
    },
  },
  async mounted() {
    this.categories = await CatalogService.getCategories();
    [this.selectedCategory] = this.categories;

    this.$nextTick(() => {
      const container = this.$refs.categories as HTMLElement;
      this.overflow = container.offsetHeight / (this.itemHeight + 10) > 1;
    });
  },
});
</script>

<style scoped lang="scss">
.categories {
  justify-content: start !important;

  &.categories--collapsed {
    height: 70px;
    overflow: hidden;
  }

  &.categories--expanded {
    overflow: unset;
  }

  .categories-expander {
    font-size: 18px;
    font-weight: 300;
    height: 50px;

    &:hover {
      color: #e53935;
      cursor: pointer;
    }

    i {
      color: inherit;
    }

    .chevron--expanded {
      transform: rotate(-180deg);
    }
  }
}
</style>
